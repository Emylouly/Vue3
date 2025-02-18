<template>
  <div>
    <PrimeiroComponente />

    <p>O dado de app é: {{ testando }}</p>

    <div id="app">
      <form id="app-form" @submit.prevent="submitForm">
        <input type="text" v-model="input_name" placeholder="Digite o seu nome: " />
        <input type="submit" value="Enviar" v-on:click="submitForm"/>
      </form>

      <p>Seu nome é: {{ name }}</p>
      <p>{{ input_name }}</p>
    </div>
  </div>
</template>

<script>
import PrimeiroComponente from "./components/PrimeiroComponente.vue";

export default {
  name: "App",
  components: {
    PrimeiroComponente,
  },
  data() {
    return {
      testando: "teste",
      name: "",
      input_name: "",
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      console.log(this.input_name);
      this.name = this.input_name;
    },
  },
};
</script>
