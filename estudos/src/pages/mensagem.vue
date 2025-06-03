<template>
  <div>
    <p>{{ mensagem }}</p>
    <p>Meu nome é {{ nome }} {{ sobrenome }}</p>
    <p>Livro favorito {{ livro }}</p>
  </div>
</template>

<script setup>
defineProps({
  mensagem: String,
  nome: String,
  sobrenome: String,
  livro: {
    titulo: String,
    paginas: Number
  }
})
</script>
