<template>

  <Sidebar></Sidebar>
  <div class="p-4 sm:ml-64">
   <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
    <img class='rounded-lg shadow-zinc-950 shadow-2xl' src="https://picsum.photos/1600/700" alt="">
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
import Sidebar from "./components/Sidebar.vue"
import { RouterLink, RouterView } from "vue-router";
</script>
