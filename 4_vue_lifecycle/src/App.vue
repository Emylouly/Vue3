<template>
<div>

  <p v-if="esta_trabalhando">Sono e cansaço</p>
  <p v-else>To com fome</p>

  <select v-model="mostrar_email">
    <option :value="true">Mostrar</option>
    <option :value="false">Esconder</option>
  </select>
  <p v-show="mostrar_email">Meu email é: {{ email }}</p>

  <p>Acesse o google: <a v-bind:href="meu_link" target="Google1">Google omg</a></p>

  <PrimeiroComponente />

  <p>O dado de app é {{ testando }}</p>

  <Picture/>

  <LyfeCycle />

  <Pessoas />

</div>
</template>

<script>

import LyfeCycle from './components/LyfeCycle.vue';
import Pessoas from './components/Pessoas.vue';
import Picture from './components/Picture.vue';
import PrimeiroComponente from './components/PrimeiroComponente.vue';

export default {
  name:'App',
  components:{
    PrimeiroComponente,
    LyfeCycle,
    Pessoas,
    Picture
  },
  data(){
    return{
        testando: 'Tste',
        esta_trabalhando: true,
        email:'emily@gmail.com',
        mostrar_email: true,
        meu_link:'https://google.com'
    }
  },
}

</script>