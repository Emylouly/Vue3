<template>
  <div>
    <p>{{ mensagem }}</p>
  </div>
</template>

<script setup>
defineProps({
  mensagem: String
})
</script>
