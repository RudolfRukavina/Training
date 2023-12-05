<template>
  <Sidebar></Sidebar>
  <div class="p-4 sm:ml-64" v-if="useUserStore().user">
    <div class="mt-14">
      <!-- Table -->
      <div class="w-full mx-auto bg-white shadow-lg rounded-md border-2 border-gray-500">
        <header class="px-5 py-4 border-b border-gray-100">
          <div class="grid grid-cols-4 gap-1 text-center rounded-md shadow_two p-2">
            <div v-for="(item, index) in  selectedWeek.data " @click="handleDaySelect(item)"
              :class="item === selectedDay ? `shadow_two + ${'bg-' + [item.value] + '-500'}` : `${'bg-' + [item.value] + '-500'}`"
              :key='index' class="border-2 p-2 rounded-md">
              {{ item.title }}
            </div>
          </div>
        </header>
        <div class="p-3">
          <div class="overflow-x-auto rounded-lg shadow_two">
            <table class="table-auto w-full">
              <thead class="text-sm font-semibold uppercase text-blue-900 bg-blue-200">
                <tr>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-lg text-left">
                      {{ selectedDay.training.title }}
                    </div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Sets</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Reps</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-center">RPE</div>
                  </th>
                </tr>
              </thead>
              <tbody class="text-sm divide-y divide-gray-100">
                <tr v-for="exercise, index  in  selectedDay.training.exercises " :key='index'>
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="font-medium text-gray-800">{{ exercise.label }}</div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">{{ exercise.sets }}</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium">{{ exercise.reps }}</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">{{ exercise.rpe }}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="border-t-0 text-xl border-gray-100 grid grid-cols-4 m-1 shadow_two rounded-lg rounded-t-sm">
          <button class="col-span-2 py-3 w-full bg-gray-300 rounded-l-lg rounded-t-sm">
            ⏎ Back
          </button>
          <button class="border-x py-3 w-full bg-red-100">Skip</button>
          <button class="py-3 bg-green-50 rounded-r-lg rounded-t-sm">
            Done
          </button>
        </div>
      </div>
      <RouterView />
    </div>
    <footer
      class="px-5 py-0 mx-2 border-2 border-t-0 shadow_three border-gray-700 flex overflow-x-auto gap-4 m-1 rounded-lg rounded-t-sm">
      <div v-for="( item, index ) in  hypertrophy.weeks" :key="index" @click='handleWeekSelect(item)'
        class="flex-none py-8 px-5 rounded-md items-start mt-8 text-center">
        <div class="flex-none p-4 rounded-md items-start h-10"
          :class="selectedWeek === item ? 'button_shadow' + item.data[selectedDay.index - 1].index : 'button_shadow'">

        </div>
        <div>{{ item.title }}</div>
      </div>
      <br>
    </footer>
  </div>
  <div class="bg-white" v-else>


    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="mx-auto max-w-2xl py-48">
        <div class="text-center">
          <h1 class="text-8xl font-bold tracking-tight text-gray-900">Fittter</h1>
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">Strength Training Web Application</h2>
          <p class="mt-2 text-lg leading-8 text-gray-600">It is free and always will be.</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">

            <button class="gsi-material-button" @click="useUserStore().handleSignInGoogle">
              <div class="gsi-material-button-state"></div>
              <div class="gsi-material-button-content-wrapper">
                <div class="gsi-material-button-icon">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"
                    xmlns:xlink="http://www.w3.org/1999/xlink" style="display: block">
                    <path fill="#EA4335"
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z">
                    </path>
                    <path fill="#4285F4"
                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z">
                    </path>
                    <path fill="#FBBC05"
                      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z">
                    </path>
                    <path fill="#34A853"
                      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z">
                    </path>
                    <path fill="none" d="M0 0h48v48H0z"></path>
                  </svg>
                </div>
                <span class="gsi-material-button-contents">Sign in</span>
                <span style="display: none">Sign in with Google</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true">
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
    </div>
  </div>
</template>

<script setup>
  import Sidebar from "../components/Sidebar.vue";
  import { RouterLink, RouterView } from "vue-router";
  import { ref, onBeforeMount } from "vue"
  import { useUserStore } from "../stores/user";

  onBeforeMount(() => {
    useUserStore().getUser()
  })

  const userData = ref()

  const handleDaySelect = (day) => {
    selectedDay.value = day
  }
  const handleWeekSelect = (week) => {
    selectedWeek.value = week
    console.log(selectedWeek.value)
    selectedDay.value = selectedWeek.value.data[0]
    console.log(selectedDay.value)
  }


  const hypertrophy = ref({
    weeks: [
      {
        title: 'Week 1',
        category: 'Easy',
        value: 'green',
        data: [
          {
            index: 1,
            title: "Day 1",
            value: "green",
            selected: false,
            training: {
              id: 0,
              title: 'WEEK 1 - DAY 1',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            index: 2,
            title: "Day 2",
            value: "green",
            selected: false,
            training: {
              id: 1,
              title: 'WEEK 1 - DAY 2',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            index: 3,
            title: "Day 3",
            value: "red",
            selected: false,
            training: {
              id: 2,
              title: 'WEEK 1 - DAY 3',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            index: 4,
            title: "Day 4",
            value: "",
            selected: false,
            training: {
              id: 3,
              title: 'WEEK 1 - DAY 4',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
        ]
      },
      {
        title: 'Week 2',
        category: 'Medium',
        value: '',
        data: [
          {
            index: 1,
            title: "Day 1",
            value: "done",
            selected: false,
            training: {
              id: 4,
              title: 'WEEK 2 - DAY 1',
              exercises: [
                {
                  label: 'Leg press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'ASDSADASD',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 2",
            value: "done",
            selected: false,
            training: {
              id: 5,
              title: 'WEEK 2 - DAY 2',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 3",
            value: "done",
            selected: false,
            training: {
              id: 6,
              title: 'WEEK 2 - DAY 3',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 4",
            value: "done",
            selected: false,
            training: {
              id: 7,
              title: 'WEEK 2 - DAY 4',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
        ]
      },
      {
        title: 'Week 3',
        category: 'Hard',
        value: '',
        data: [
          {
            title: "Day 1",
            value: "done",
            selected: false,
            training: {
              id: 8,
              title: 'WEEK 3 - DAY 1',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 2",
            value: "done",
            selected: false,
            training: {
              id: 9,
              title: 'WEEK 3 - DAY 2',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 3",
            value: "done",
            selected: false,
            training: {
              id: 10,
              title: 'WEEK 3 - DAY 3',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 4",
            value: "done",
            selected: false,
            training: {
              id: 11,
              title: 'WEEK 3 - DAY 4',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
        ]
      },
      {
        title: 'Week 4',
        category: 'Deload',
        value: '',
        data: [
          {
            title: "Day 1",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 4 - DAY 1',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 2",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 4 - DAY 2',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 3",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 4 - DAY 3',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 4",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 4 - DAY 4',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
        ]
      },
      {
        title: 'Week 1',
        category: 'Easy',
        value: '',
        data: [
          {
            title: "Day 1",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 1',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 2",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 2',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 3",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 3',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 4",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 4',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
        ]
      },
      {
        title: 'Week 1',
        category: 'Easy',
        value: '',
        data: [
          {
            title: "Day 1",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 1',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 2",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 2',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 3",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 3',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 4",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 4',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
        ]
      },
      {
        title: 'Week 1',
        category: 'Easy',
        value: '',
        data: [
          {
            title: "Day 1",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 1',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 2",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 2',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 3",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 3',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 4",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 4',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
        ]
      },
      {
        title: 'Week 1',
        category: 'Easy',
        value: '',
        data: [
          {
            title: "Day 1",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 1',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 2",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 2',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 3",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 3',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 4",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 4',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
        ]
      },
      {
        title: 'Week 1',
        category: 'Easy',
        value: '',
        data: [
          {
            title: "Day 1",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 1',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 2",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 2',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 3",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 3',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 4",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 4',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
        ]
      },
      {
        title: 'Week 1',
        category: 'Easy',
        value: '',
        data: [
          {
            title: "Day 1",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 1',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 2",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 2',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 3",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 3',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 4",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 4',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
        ]
      },
      {
        title: 'Week 1',
        category: 'Easy',
        value: '',
        data: [
          {
            title: "Day 1",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 1',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 2",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 2',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 3",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 3',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 4",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 4',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
        ]
      },
      {
        title: 'Week 1',
        category: 'Easy',
        value: '',
        data: [
          {
            title: "Day 1",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 1',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 2",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 2',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 3",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 3',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
          {
            title: "Day 4",
            value: "done",
            selected: false,
            training: {
              title: 'WEEK 1 - DAY 4',
              exercises: [
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
                {
                  label: 'Bench press',
                  sets: 1,
                  reps: 3,
                  rpe: 8
                },
              ]
            }
          },
        ]
      },
    ]
  })

  const selectedWeek = ref(hypertrophy.value.weeks[0])
  const selectedDay = ref(selectedWeek.value.data[0])

  const getBoxShadowForWeek = (week) => {
    console.log(week)
    //for each week i need a box shadow, and based on the index of selectedDay inside selectedWeek, i need to change that week box-shadow to match the state of the days. If for example the first week is selected and second day of that week is selected, i need the box-shadow's second border to be different while all others stay the same. But also, if the currently selected day of the same week is the third one, i need it to be different while all the others stay the same, but i need it's value to be different than if it was the second one. Each week has 4 days, and only the selectedDay of the selectedWeek on a specific index inside the week has this different style value based on the index of the selectedDay inside the selectedWeek itself
  }

</script>


<style scoped>
.shadow_three {
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}

.button_shadow {
  box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 6px -6px 0px -2px,
    rgb(31, 193, 27) 6px -6px, rgb(255, 255, 255) 12px -12px 0px -2px,
    rgb(255, 217, 19) 12px -12px, rgb(255, 255, 255) 18px -18px 0px -2px,
    rgb(255, 156, 85) 18px -18px
}

.button_shadow1 {
  box-shadow: blue 0px 0px 1px 2px inset, rgb(255, 255, 255) 6px -18px 0px -2px,
    rgb(31, 193, 27) 6px -18px, rgb(255, 255, 255) 12px -24px 0px -2px,
    rgb(255, 217, 19) 12px -24px, rgb(255, 255, 255) 18px -30px 0px -2px,
    rgb(255, 156, 85) 18px -30px
}

.button_shadow2 {
  box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 9px -32px 1px -2px,
    rgb(31, 193, 27) 9px -32px, rgb(255, 255, 255) 13px -12px 0px -2px,
    rgb(255, 217, 19) 13px -12px, rgb(255, 255, 255) 18px -18px 0px -2px,
    rgb(255, 156, 85) 18px -18px
}

.button_shadow3 {
  box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 6px -6px 0px -2px,
    rgb(31, 193, 27) 6px -6px, rgb(255, 255, 255) 12px -38px 0px -2px,
    rgb(255, 217, 19) 12px -38px, rgb(255, 255, 255) 18px -18px 0px -2px,
    rgb(255, 156, 85) 18px -18px
}

.button_shadow4 {
  box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 6px -6px 0px -2px,
    rgb(31, 193, 27) 6px -6px, rgb(255, 255, 255) 12px -12px 0px -2px,
    rgb(255, 217, 19) 12px -12px, rgb(255, 255, 255) 18px -44px 0px -2px,
    rgb(255, 156, 85) 18px -44px
}
</style>
