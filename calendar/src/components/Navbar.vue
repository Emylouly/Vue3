<template>
  <div id="nav">
    <v-btn @click="toggleTheme" class="mr-7">Alternar Tema</v-btn>
    <v-btn to="/" class="mr-7">Início</v-btn>
    <v-btn to="/home" class="mr-7">Home</v-btn>
    <v-btn to="/calendario" class="mr-7">Calendário</v-btn>
    </div>
  </template>
  
  <script setup>
  import { useTheme } from 'vuetify'
  
  const theme = useTheme()
  
  function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  }
  </script>
  
<style scoped>
  #nav {
    padding: 15px;
  }
</style>