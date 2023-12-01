<template>
  <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start rtl:justify-end">
          <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
              </path>
            </svg>
          </button>
          <RouterLink class="flex ms-2 md:me-24" to="/">
            <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">RudRuk</span>
          </RouterLink>
        </div>
        <div class="flex items-center">
          <div class="flex items-center ms-3">
            <div>
              <button type="button"
                class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" src="https://picsum.photos/200/300" alt="user photo">
              </button>
            </div>
            <div
              class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
              id="dropdown-user">
              <div class="px-4 py-3" role="none">
                <p class="text-sm text-gray-900 dark:text-white" role="none">
                  Rudolf Rukavina
                </p>
                <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                  rukavina.rudi@gmail.com
                </p>
              </div>
              <ul class="py-1" role="none">
                <li>
                  <RouterLink to="/logout"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem">Sign out</RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <aside id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidebar">


    <div class="h-full px-2 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li class="border p-1 rounded-xl shadow_one">
          <p class="text-center p-2 text-gray-900 rounded-lg m-[2px] mb-3 shadow_two border-gray-50 dark:text-white bg-gray-200 dark:bg-gray-700 group">
            <span class="ms-3">Training programs</span>
          </p>
          <ul>
            <li class='my-2 mx-1 shadow_one rounded-lg'>
              <div
                class="flex items-center p-2 text-gray-900 rounded-lg bg-gray-100 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700 group">
                <span class="flex-1 ms-3 whitespace-nowrap">Hypertrophy</span>
                <span
                  class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="muscle">
                    <path fill="#d50629"
                      d="M58.47 11.14c-.19.15-.36.31-.48.53-.63 1.16-1.45 2.9-2.2 5.14C54.82 19.75 54 23.55 54 28c0 6.43-1.71 12.37-5.87 16.97C43.89 49.68 37.11 52.99 27 54c-4.43.63-8.06 1.67-11.13 2.84-1.8.69-3.4 1.43-4.87 2.16 0 0-1.86 1-3 1-2.21 0-4-.79-4-3s1-3 3-5c0 0 1.21-1.21 2.29-3.46a16.72 16.72 0 0 0 1.61-5.7c.07-.59.1-1.2.1-1.84 0-5.1-.58-16.49 8-24 8-7 19-5 29.08-8.51C49.55 7.98 50.82 7.05 52 6c.5-.5 1.1-1 1.78-1.38 1.17-.64 2.55-.92 3.99-.18 1.2.63 2.08 1.82 2.21 3.17a3.96 3.96 0 0 1-1.51 3.53z">
                    </path>
                    <path fill="#980629"
                      d="M20 47c-2 6 16 8 28.13-2.03C43.89 49.68 37.11 52.99 27 54c-4.43.63-8.06 1.67-11.13 2.84-1.8.69-3.4 1.43-4.87 2.16 0 0-1.86 1-3 1-2.21 0-4-.79-4-3s1-3 3-5c0 0 1.21-1.21 2.29-3.46a16.72 16.72 0 0 0 1.61-5.7c.9 1.45 2.22 1.8 4.1-.84 4.96-6.95 12.88-24.73 35.48-26.95-3.22.43-20.53 2.1-30.48 31.95z">
                    </path>
                    <path fill="#d5cec7"
                      d="M15.87 56.84c-1.8.69-3.4 1.43-4.87 2.16 0 0-1.86 1-3 1-2.21 0-4-.79-4-3s1-3 3-5c0 0 1.21-1.21 2.29-3.46.73 1.07 2.8 2.93 6.71-2.54 0 0-2.9 7.73-.13 10.84zM59.98 7.61c.14 1.43-.49 2.73-1.51 3.53-.19.15-.36.32-.48.53-.63 1.16-1.46 2.91-2.2 5.14C56 13 45 16 45 16c1.55-3.1 3.5-4.72 3.08-7.51C49.5 7.86 50.82 7.05 52 6c.5-.5 1.1-1 1.78-1.38 1.17-.64 2.55-.92 3.99-.18 1.2.63 2.08 1.82 2.21 3.17z">
                    </path>
                    <path fill="none" stroke="#d5cec7" stroke-miterlimit="10"
                      d="M59.98 7.61c-.11-1.11-.72-2.11-1.61-2.78a3.85 3.85 0 0 0-.6-.39c-1.44-.74-2.82-.46-3.99.18C53.1 5 52.5 5.5 52 6c-1.18 1.05-2.5 1.86-3.92 2.49C38 12 27 10 19 17c-8.58 7.51-8 18.9-8 24 0 .64-.03 1.25-.1 1.84a16.72 16.72 0 0 1-1.61 5.7C8.21 50.79 7 52 7 52c-2 2-3 2.79-3 5s1.79 3 4 3c1.14 0 3-1 3-1 1.47-.73 3.07-1.47 4.87-2.16 3.07-1.17 6.7-2.21 11.13-2.84 10.11-1.01 16.89-4.32 21.13-9.03C52.29 40.37 54 34.43 54 28c0-4.45.82-8.25 1.79-11.19.75-2.24 1.57-3.98 2.2-5.14.06-.11.13-.2.21-.29.08-.09.17-.16.27-.24.9-.7 1.48-1.77 1.53-2.98 0-.18 0-.37-.02-.55z">
                    </path>
                  </svg></span>
              </div>
            </li>

            <li class='my-2 mx-1 rounded-lg shadow_one'>
              <div
                class="flex items-center p-2 text-gray-900 rounded-lg bg-gray-100 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700 group">
                <span class="flex-1 ms-3 whitespace-nowrap">Powerbuilding</span>
              </div>
            </li>
            <li>
              <RouterLink to="/create"
                class="flex items-center px-2 mt-3 shadow_one m-[4px] text-gray-900 rounded-lg bg-gray-200 dark:text-white hover:bg-gray-300 dark:hover:bg-blue-700 group">
                <span class='text-xl m-1'>+</span>
                <span class="flex-1 ms-3 whitespace-nowrap">Add your own</span>
                <span
                  class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-300 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
              </RouterLink>
            </li>
          </ul>
        </li>
        <li class='border p-1 rounded-xl'>
          <p
            class="text-center p-2 ps-0 mb-2 text-gray-900 rounded-xl border-2 border-gray-50 dark:text-white bg-gray-200 dark:bg-gray-700 group">
            <span class="ms-3">Personal records</span>
          </p>
          <ul>
            <li>
              <div
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700 group">
                <span class="flex-1 ms-3 whitespace-nowrap">Bench press</span>
                <span
                  class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">123kg</span>
              </div>
            </li>
            <li>
              <div
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700 group">
                <span class="flex-1 ms-3 whitespace-nowrap">Squat</span>
                <span
                  class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">223kg</span>
              </div>
            </li>
            <li>
              <div
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700 group">
                <span class="flex-1 ms-3 whitespace-nowrap">Overhead press</span>
                <span
                  class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">50kg</span>
              </div>
            </li>
            <li>
              <div
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-100 dark:hover:bg-blue-700 group">
                <span class="flex-1 ms-3 whitespace-nowrap">Deadlift</span>
                <span
                  class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">123kg</span>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <RouterLink to="/donate"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg
              class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
              <path
                d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
            </svg>
            <span class="flex-1 ms-3 whitespace-nowrap">Donate</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
  import { RouterLink } from "vue-router";
</script>

<style scoped>
.shadow_one {
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

.shadow_two {
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}

</style>
