<template>
    <div id="nav">
        <v-btn @click="toggleTheme" class="mr-7">Alternar theme</v-btn>
        <v-btn to="/" class="mr-7">Calendário</v-btn>
        <v-btn to="/estudo" class="mr-7">Estudo</v-btn>
        <v-btn to="/campus" class="mr-7">Campus</v-btn>
    </div>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

</script>

<style>
#nav{
    padding: 15px;
}
</style>