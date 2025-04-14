<template>
<div>

  <Header />

  <p v-if="esta_trabalhando">Sono e cansaço</p>
  <p v-else>To com fome</p>

  <div>
    <button @click="showEmail">{{textoBotao}}</button>
  </div>

  <select v-model="mostrar_email">
    <option :value="true">Mostrar</option>
    <option :value="false">Esconder</option>
  </select>
  <p v-show="mostrar_email">Meu email é: {{ email }}</p>

  <p class="teste">Acesse o google: <a v-bind:href="meu_link" target="Google1">Google omg</a></p>

  <p class="pai"> pai pai pai</p>

   <PrimeiroComponente />

  <p>O dado de app é {{ testando }}</p>

  <Picture />

  <LyfeCycle />

  <Pessoas />

</div>
</template>

<script>

import Header from './components/Header.vue';
import LyfeCycle from './components/LyfeCycle.vue';
import Pessoas from './components/Pessoas.vue';
import Picture from './components/Picture.vue';
import PrimeiroComponente from './components/PrimeiroComponente.vue';

export default {
  name:'App',
  components:{
    Header,
    PrimeiroComponente,
    LyfeCycle,
    Pessoas,
    Picture,
  },
  data(){
    return{
        testando: 'Tste',
        esta_trabalhando: true,
        email:'emily@gmail.com',
        mostrar_email: false,
        meu_link:'https://google.com',
        textoBotao:'Mostrar e-mail'
    }
  },

  methods:{
    showEmail(){
      console.log("Testando"),
      this.mostrar_email = !this.mostrar_email
      if(!this.mostrar_email){
        this.textoBotao = 'Mostrar e-mail'
      } else{
        this.textoBotao = 'Esconder e-mail'
      }
    }
  }
}

</script>

<style>

body{
    background-color: #333;
    color: white;


}

a{
  color: blue;
}

.teste{
        background-color: black;
  
}

</style>