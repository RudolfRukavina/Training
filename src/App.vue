<template>
  <Sidebar></Sidebar>
  <div class="p-4 sm:ml-64">
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <!-- Table -->
      <div class="w-full mx-auto bg-white shadow-lg rounded-md border border-gray-200">
        <header class="px-5 py-4 border-b border-gray-100">
          <div class='grid grid-cols-4 gap-1 text-center rounded-md'>
            <div v-for='item, index in 4' class='border-2 p-2 rounded-md'
              :class='item === 1 || item === 2 ? "bg-green-300 border-green-400" : item === 3 ? "bg-blue-200 border-blue-300" : ""'>
              Day {{
                item }}
            </div>
          </div>
        </header>
        <div class="p-3">
          <div class="overflow-x-auto rounded-lg">
            <table class="table-auto w-full border-2">
              <thead class="text-sm font-semibold uppercase text-blue-900 bg-blue-200">
                <tr>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left border-red-600">Week 2 - Day 3</div>
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
                <tr v-for='item in 8' :class='item % 2 ? "bg-blue-50" : "bg-blue-100"'>
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="font-medium text-gray-800">Bench press</div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">1</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium">
                      3
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">8</div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class='grid grid-cols-4 gap-1 text-center border my-2 rounded-md shadow-lg p-5'>
        <div v-for='item, index in 4' class='border-2 p-2 rounded-md'
          :class='item === 1 ? "bg-green-300 border-green-400" : item === 2 ? "bg-blue-100 border-blue-300" : ""'>
          Week {{ item
          }}
        </div>
      </div>
      <!-- <img class='rounded-lg shadow-zinc-950 shadow-2xl' src="https://picsum.photos/1600/700" alt=""> -->
      <RouterView />
    </div>
  </div>
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
</template>

<script setup>
  import Sidebar from "./components/Sidebar.vue";
  import { RouterLink, RouterView } from "vue-router";
</script>
