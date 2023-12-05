<template>
  <div>
    <button @click="useUserStore().handleSignInGoogle" v-if="!useUserStore().userData">Google Sign In</button>
    <p v-if="useUserStore().user">Hello {{ useUserStore().userData.displayName || useUserStore().userData.email }}</p>
    <button @click="useUserStore().handleLogOut" v-if="useUserStore().userData">Log out</button>
    <div v-if="useUserStore().userData">
      <p>User Data:</p>
      <ul v-if="useUserStore().userData">
        <li>Username: {{ useUserStore().userData.username }}</li>
        <li>Email: {{ useUserStore().userData.email }}</li>
        <!-- Add other user-specific data fields here -->
      </ul>
      <button @click="useUserStore().updateUserData">Update User Data</button>
      {{ useUserStore().userData }}

      <p class='my-2 text-3xl text-center' v-if='useUserStore().userData'
        @click="useUserStore().userData.hypertrophy[index] = 1"
        v-for='(item, index) in useUserStore().userData.hypertrophy'>{{ item }}
      </p>
    </div>
  </div>
</template>

<script setup>
  import { useUserStore } from "../stores/user";
</script>
