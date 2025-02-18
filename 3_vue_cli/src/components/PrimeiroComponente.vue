<template>
  <div>
    <h1>Olá, bem-vindo!</h1>
    <p>Meu nome é {{ nome }}, minha profissão é {{ profissao }}.</p>
  </div>
</template>

<script>
export default {
  name: "PrimeiroComponente",
  data() {
    return {
      nome: "Carlos",
      profissao: "Cafeeiro",
    };
  },
};
</script>
