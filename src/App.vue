<!-- <template>
  <Sidebar></Sidebar>
  <div class="p-4 sm:ml-64">
    <div class="mt-14"> -->
      <!-- Table -->
      <!-- <div class="w-full mx-auto bg-white shadow-lg rounded-md border-2 border-gray-500">
        <header class="px-5 py-4 border-b border-gray-100">
          <div class="grid grid-cols-4 gap-1 text-center rounded-md shadow_two p-2">
            <div v-for="(item, index) in 4" class="border-2 p-2 rounded-md">
              Day {{ item }}
            </div>
          </div>
        </header>
        <div class="p-3">
          <div class="overflow-x-auto rounded-lg shadow_two">
            {{ selectedDay }}
            <table class="table-auto w-full">
              <thead class="text-sm font-semibold uppercase text-blue-900 bg-blue-200">
                <tr>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left border-red-600">
                      Week 2 - Day 3
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
                <tr v-for="item in 8" :class="item % 2 ? 'bg-blue-50' : 'bg-blue-100'">
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="font-medium text-gray-800">Bench press</div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">1</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium">3</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">8</div>
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
      </div> -->

      <!-- <img class='rounded-lg shadow-zinc-950 shadow-2xl' src="https://picsum.photos/1600/700" alt=""> -->
      <!-- <RouterView />
    </div>
    <footer
      class="px-5 py-0 mx-2 border-2 border-t-0 shadow_three border-gray-700 flex overflow-x-auto gap-4 m-1 rounded-lg rounded-t-sm">
      <div v-for="(item, index) in weeks" class="flex-none p-5 rounded-md items-start mt-5 text-center"
        @click="selectWeek(index)">
        <div class="flex-none p-4 rounded-md items-start" :class='index + 1 === selectedWeek ? "pt-10" : ""'
          :style="getBoxShadowForWeek(item)">
        </div>
        <div class='flex-none p-2 rounded-md items-start border-2 shadow_two mt-5'
          :class='index + 1 === selectedWeek ? "border-blue-300" : ""'>
          Week {{ index + 1 }}
        </div>
      </div>
      <br>
    </footer>
    {{ selectedWeek }}
    {{ selectedDay }}
  </div> -->
  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink class="" to="/">Home</RouterLink>
      </nav>
    </div>
  </header> -->

  <!-- <Sidebar></Sidebar>
  <div class="sm:ml-64">
    <Topbar></Topbar>
    <div class="p-4">
      <RouterView />
    </div>
  </div> -->
<!-- </template> -->

<!-- <script setup>
  import Sidebar from "./components/Sidebar.vue";
  import { RouterLink, RouterView } from "vue-router";
  import { ref } from "vue"

  const hypertrophy = ref({
    weeks: [
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
        title: 'Week 2',
        category: 'Medium',
        value: '',
        data: [
          { title: "Day 1", value: "done", current: false },
          { title: "Day 2", value: "skipped", current: false },
          { title: "Day 3", value: "", current: false },
          { title: "Day 4", value: "", current: false },
        ]
      },
      {
        title: 'Week 3',
        category: 'Hard',
        value: '',
        data: [
          { title: "Day 1", value: "", current: false },
          { title: "Day 2", value: "", current: false },
          { title: "Day 3", value: "", current: false },
          { title: "Day 4", value: "", current: false },
        ]
      },
      {
        title: 'Week 4',
        category: 'Deload',
        value: '',
        data: [
          { title: "Day 1", value: "", current: false },
          { title: "Day 2", value: "", current: false },
          { title: "Day 3", value: "", current: false },
          { title: "Day 4", value: "", current: false },
        ]
      },
      {
        title: 'Week 5',
        category: 'Easy',
        value: '',
        data: [
          { title: "Day 1", value: "", current: false },
          { title: "Day 2", value: "", current: false },
          { title: "Day 3", value: "", current: false },
          { title: "Day 4", value: "", current: false },
        ]
      },
      {
        title: 'Week 6',
        category: 'Medium',
        value: '',
        data: [
          { title: "Day 1", value: "", current: false },
          { title: "Day 2", value: "", current: false },
          { title: "Day 3", value: "", current: false },
          { title: "Day 4", value: "", current: false },
        ]
      },
      {
        title: 'Week 7',
        category: 'Hard',
        value: '',
        data: [
          { title: "Day 1", value: "", current: false },
          { title: "Day 2", value: "", current: false },
          { title: "Day 3", value: "", current: false },
          { title: "Day 4", value: "", current: false },
        ]
      },
      {
        title: 'Week 8',
        category: 'Deload',
        value: '',
        data: [
          { title: "Day 1", value: "", current: false },
          { title: "Day 2", value: "", current: false },
          { title: "Day 3", value: "", current: false },
          { title: "Day 4", value: "", current: false },
        ]
      },
      {
        title: 'Week 9',
        category: 'Easy',
        value: '',
        data: [
          { title: "Day 1", value: "", current: false },
          { title: "Day 2", value: "", current: false },
          { title: "Day 3", value: "", current: false },
          { title: "Day 4", value: "", current: false },
        ]
      },
      {
        title: 'Week 10',
        category: 'Medium',
        value: '',
        data: [
          { title: "Day 1", value: "", current: false },
          { title: "Day 2", value: "", current: false },
          { title: "Day 3", value: "", current: false },
          { title: "Day 4", value: "", current: false },
        ]
      },
      {
        title: 'Week 11',
        category: 'Hard',
        value: '',
        data: [
          { title: "Day 1", value: "", current: false },
          { title: "Day 2", value: "", current: false },
          { title: "Day 3", value: "", current: false },
          { title: "Day 4", value: "", current: false },
        ]
      },
      {
        title: 'Week 12',
        category: 'Deload',
        value: '',
        data: [
          { title: "Day 1", value: "", current: false },
          { title: "Day 2", value: "", current: false },
          { title: "Day 3", value: "", current: false },
          { title: "Day 4", value: "", current: false },
        ]
      },
    ]
  }) -->
  <!-- // const weeks = [
  //   [
  //     { day: 1, info: "Day 1 info", value: "done", current: false },
  //     { day: 2, info: "Day 2 info", value: "done", current: false },
  //     { day: 3, info: "Day 3 info", value: "done", current: false },
  //     { day: 4, info: "Day 4 info", value: "done", current: false },
  //   ],
  //   [
  //     { day: 1, info: "Day 1 info", value: "skipped", current: false, },
  //     { day: 2, info: "Day 2 info", value: "done", current: false },
  //     { day: 3, info: "Day 3 info", value: "", current: false },
  //     { day: 4, info: "Day 4 info", value: "", current: false },
  //   ],
  //   [
  //     { day: 1, info: "Day 1 info", value: "", current: false, },
  //     { day: 2, info: "Day 2 info", value: "", current: false },
  //     { day: 3, info: "Day 3 info", value: "", current: false },
  //     { day: 4, info: "Day 4 info", value: "", current: false },
  //   ],
  //   [
  //     { day: 1, info: "Day 1 info", value: "", current: false, },
  //     { day: 2, info: "Day 2 info", value: "", current: false },
  //     { day: 3, info: "Day 3 info", value: "", current: false },
  //     { day: 4, info: "Day 4 info", value: "", current: false },
  //   ],
  //   [
  //     { day: 1, info: "Day 1 info", value: "", current: false },
  //     { day: 2, info: "Day 2 info", value: "", current: false },
  //     { day: 3, info: "Day 3 info", value: "", current: false },
  //     { day: 4, info: "Day 4 info", value: "", current: false },
  //   ],
  // ];

  // const selectedWeek = ref(weeks[0]);
  // const selectedDay = ref(weeks[0][0])

  // const selectWeek = (weekNumber) => {
  //   selectedWeek.value = weeks[weekNumber];
  //   selectedDay.value = weeks[weekNumber].find((day) => day.value === "");
  //   const currentDay = weeks[weekNumber].find((day) => day.current === true);
  //   if (currentDay) {
  //     currentDay.current = false;
  //   }
  //   selectedDay.current = true;
  //   console.log(selectedDay.value)
  // };

  // const getBoxShadowForWeek = (week) => {
  //   const selectedDayIndex = selectedDay.value.day - 1;
  //   const selectedDayStyle = week.map((day, index) => {
  //     const basePosition = selectedDayIndex === index ? -18 : 0;
  //     const position = basePosition - (index * 6);
  //     return `${position}px`;
  //   });

  //   console.log(selectedDayStyle[selectedDay.value.day])
  //   const boxShadowColors = week.map((day) => {
  //     switch (day.value) {
  //       case 'done':
  //         return '#90EE90';
  //       case 'skipped':
  //         return '#FF7F7F';
  //       default:
  //         return 'black';
  //     }
  //   });
  //   // for each item inside week i need to do a check of its value and then a switch case, if it's value is done, then its color is green, if it's skipped, then it's color is red, if it's value is an empty string, then it's color is gray and if it's current is true, it's color should be blue regardles of what the value says it should be
  //   console.log(week, 'asdkfjngfsdlfn')
  //   return `box-shadow:${boxShadowColors[0]} 0px 0px 0px 3px inset, rgb(255, 255, 255) 6px ${selectedDayStyle[1]} 0px -3px, ${boxShadowColors[1]} 6px ${selectedDayStyle[1]}, rgb(255, 255, 255) 12px ${selectedDayStyle[2]} 0px -3px, ${boxShadowColors[2]} 12px ${selectedDayStyle[2]}, rgb(255, 255, 255) 18px ${selectedDayStyle[3]} 0px -3px, ${boxShadowColors[3]} 18px ${selectedDayStyle[3]}`
  // };

  // const getSelectedBoxShadowForWeek = (weekNumber) => {
  //   const boxShadowColors = ['blue', 'white', 'green', 'red'];
  //   return boxShadowColors.map((color, index) => `${color} ${index * 6}px -${index * 6}px 0px -2px`).join(', ');
  // }; -->

<!-- </script> -->


<template>
  <Sidebar></Sidebar>
  <div class="p-4 sm:ml-64">
    <div class="mt-14">
      <!-- Table -->
      <div class="w-full mx-auto bg-white shadow-lg rounded-md border-2 border-gray-500">
        <header class="px-5 py-4 border-b border-gray-100">
          <div class="grid grid-cols-4 gap-1 text-center rounded-md shadow_two p-2">
            <div v-for="(item, index) in  selectedWeek.data " @click="handleDaySelect(item)"
              :class="item === selectedDay ? `shadow_two + ${'bg-' + [item.value] + '-500'}` : `${'bg-' + [item.value] + '-500'}`"
              :key='index' class="border-2 p-2 rounded-md">
              {{ item.title }} {{ }}
            </div>
            <!-- <div class="grid grid-cols-2 text-center" v-if='selectedDay.training.title === "WEEK 1 - DAY 1"'>
                <p class=''>Hypertrophy</p>
                <p class='border-x'>Easy</p>

              </div> -->
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

      <!-- <img class='rounded-lg shadow-zinc-950 shadow-2xl' src="https://picsum.photos/1600/700" alt=""> -->
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
  <!-- <header>
    <div class=" wrapper">
        <nav>
          <RouterLink class="" to="/">Home</RouterLink>
        </nav>
      </div>
      </header> -->

  <!-- <Sidebar></Sidebar>
  <div class="sm:ml-64">
    <Topbar></Topbar>
    <div class="p-4">
      <RouterView />
    </div>
  </div> -->
</template>

<script setup>
  import Sidebar from "./components/Sidebar.vue";
  import { RouterLink, RouterView } from "vue-router";
  import { ref } from "vue"

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

  // const getBoxShadowForWeek = (week) => {

  //   if (selectedWeek.value && selectedWeek.value.data.includes(selectedDay.value)) {
  //     const dayIndex = selectedWeek.value.data.indexOf(selectedDay.value);

  //     switch (dayIndex) {
  //       case 0:
  //         week.stateStyle = [-12, -12, -18, -24];
  //         break;
  //       case 1:
  //         week.stateStyle = [-6, -18, -18, -24];
  //         break;
  //       case 2:
  //         week.stateStyle = [-6, -12, -24, -24];
  //         break;
  //       case 3:
  //         week.stateStyle = [-6, -12, -18, -30];
  //         break;
  //       default:
  //         // Handle other cases if needed
  //         break;
  //     }
  //     console.log(week, 'fgdsf');
  //   }
  // };

  const getBoxShadowForWeek = (week) => {
    console.log(week)
    //for each week i need a box shadow, and based on the index of selectedDay inside selectedWeek, i need to change that week box-shadow to match the state of the days. If for example the first week is selected and second day of that week is selected, i need the box-shadow's second border to be different while all others stay the same. But also, if the currently selected day of the same week is the third one, i need it to be different while all the others stay the same, but i need it's value to be different than if it was the second one. Each week has 4 days, and only the selectedDay of the selectedWeek on a specific index inside the week has this different style value based on the index of the selectedDay inside the selectedWeek itself
  }
  // const weeks = [
  //   [
  //     { day: 1, info: "Day 1 info", value: "done", current: false },
  //     { day: 2, info: "Day 2 info", value: "done", current: false },
  //     { day: 3, info: "Day 3 info", value: "done", current: false },
  //     { day: 4, info: "Day 4 info", value: "done", current: false },
  //   ],
  //   [
  //     { day: 1, info: "Day 1 info", value: "skipped", current: false, },
  //     { day: 2, info: "Day 2 info", value: "done", current: false },
  //     { day: 3, info: "Day 3 info", value: "", current: false },
  //     { day: 4, info: "Day 4 info", value: "", current: false },
  //   ],
  //   [
  //     { day: 1, info: "Day 1 info", value: "", current: false, },
  //     { day: 2, info: "Day 2 info", value: "", current: false },
  //     { day: 3, info: "Day 3 info", value: "", current: false },
  //     { day: 4, info: "Day 4 info", value: "", current: false },
  //   ],
  //   [
  //     { day: 1, info: "Day 1 info", value: "", current: false, },
  //     { day: 2, info: "Day 2 info", value: "", current: false },
  //     { day: 3, info: "Day 3 info", value: "", current: false },
  //     { day: 4, info: "Day 4 info", value: "", current: false },
  //   ],
  //   [
  //     { day: 1, info: "Day 1 info", value: "", current: false },
  //     { day: 2, info: "Day 2 info", value: "", current: false },
  //     { day: 3, info: "Day 3 info", value: "", current: false },
  //     { day: 4, info: "Day 4 info", value: "", current: false },
  //   ],
  // ];

  // const selectedWeek = ref(weeks[0]);
  // const selectedDay = ref(weeks[0][0])

  // const selectWeek = (weekNumber) => {
  //   selectedWeek.value = weeks[weekNumber];
  //   selectedDay.value = weeks[weekNumber].find((day) => day.value === "");
  //   const currentDay = weeks[weekNumber].find((day) => day.current === true);
  //   if (currentDay) {
  //     currentDay.current = false;
  //   }
  //   selectedDay.current = true;
  //   console.log(selectedDay.value)
  // };

  // const getBoxShadowForWeek = (week) => {
  //   const selectedDayIndex = selectedDay.value.day - 1;
  //   const selectedDayStyle = week.map((day, index) => {
  //     const basePosition = selectedDayIndex === index ? -18 : 0;
  //     const position = basePosition - (index * 6);
  //     return `${position}px`;
  //   });

  //   console.log(selectedDayStyle[selectedDay.value.day])
  //   const boxShadowColors = week.map((day) => {
  //     switch (day.value) {
  //       case 'done':
  //         return '#90EE90';
  //       case 'skipped':
  //         return '#FF7F7F';
  //       default:
  //         return 'black';
  //     }
  //   });
  //   // for each item inside week i need to do a check of its value and then a switch case, if it's value is done, then its color is green, if it's skipped, then it's color is red, if it's value is an empty string, then it's color is gray and if it's current is true, it's color should be blue regardles of what the value says it should be
  //   console.log(week, 'asdkfjngfsdlfn')
  //   return `box-shadow:${boxShadowColors[0]} 0px 0px 0px 3px inset, rgb(255, 255, 255) 6px ${selectedDayStyle[1]} 0px -3px, ${boxShadowColors[1]} 6px ${selectedDayStyle[1]}, rgb(255, 255, 255) 12px ${selectedDayStyle[2]} 0px -3px, ${boxShadowColors[2]} 12px ${selectedDayStyle[2]}, rgb(255, 255, 255) 18px ${selectedDayStyle[3]} 0px -3px, ${boxShadowColors[3]} 18px ${selectedDayStyle[3]}`
  // };

  // const getSelectedBoxShadowForWeek = (weekNumber) => {
  //   const boxShadowColors = ['blue', 'white', 'green', 'red'];
  //   return boxShadowColors.map((color, index) => `${color} ${index * 6}px -${index * 6}px 0px -2px`).join(', ');
  // };


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
