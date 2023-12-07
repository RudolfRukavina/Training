<template>
  <div>
    <transition name="slide-up">
      <div v-if="!useUserStore().user" class="login-container">
        <Login></Login>
      </div>
    </transition>

    <div class="dashboard-container" v-show="useUserStore().user">
      <Sidebar></Sidebar>
      <Dashboard></Dashboard>
    </div>
  </div>
</template>

<script setup>
  import Sidebar from "../components/Sidebar.vue";
  import Login from "../views/Login.vue";
  import { useUserStore } from "../stores/user";
  import Dashboard from "./Dashboard.vue";
</script>

<style>
.shadow_three {
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}

.button_shadow {
  box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 6px -6px 0px -2px,
    rgb(31, 193, 27) 6px -6px, rgb(255, 255, 255) 12px -12px 0px -2px,
    rgb(255, 217, 19) 12px -12px, rgb(255, 255, 255) 18px -18px 0px -2px,
    rgb(255, 156, 85) 18px -18px;
}

.button_shadow1 {
  box-shadow: blue 0px 0px 1px 2px inset, rgb(255, 255, 255) 6px -18px 0px -2px,
    rgb(31, 193, 27) 6px -18px, rgb(255, 255, 255) 12px -24px 0px -2px,
    rgb(255, 217, 19) 12px -24px, rgb(255, 255, 255) 18px -30px 0px -2px,
    rgb(255, 156, 85) 18px -30px;
}

.button_shadow2 {
  box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 9px -32px 1px -2px,
    rgb(31, 193, 27) 9px -32px, rgb(255, 255, 255) 13px -12px 0px -2px,
    rgb(255, 217, 19) 13px -12px, rgb(255, 255, 255) 18px -18px 0px -2px,
    rgb(255, 156, 85) 18px -18px;
}

.button_shadow3 {
  box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 6px -6px 0px -2px,
    rgb(31, 193, 27) 6px -6px, rgb(255, 255, 255) 12px -38px 0px -2px,
    rgb(255, 217, 19) 12px -38px, rgb(255, 255, 255) 18px -18px 0px -2px,
    rgb(255, 156, 85) 18px -18px;
}

.button_shadow4 {
  box-shadow: blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 6px -6px 0px -2px,
    rgb(31, 193, 27) 6px -6px, rgb(255, 255, 255) 12px -12px 0px -2px,
    rgb(255, 217, 19) 12px -12px, rgb(255, 255, 255) 18px -44px 0px -2px,
    rgb(255, 156, 85) 18px -44px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.5s;
}

.slide-up-enter,
.slide-up-leave-to {
  transform: translateY(-100%);
}

.login-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.dashboard-container {
  position: relative;
}
</style>
