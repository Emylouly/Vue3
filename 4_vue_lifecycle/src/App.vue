<template>
<div>

  <PrimeiroComponente />

  <p>O dado de app é {{ testando }}</p>

  <LyfeCycle />

  <Pessoas />

</div>
</template>

<script>

import LyfeCycle from './components/LyfeCycle.vue';
import Pessoas from './components/Pessoas.vue';
import PrimeiroComponente from './components/PrimeiroComponente.vue';

export default {
  name:'App',
  components:{
    PrimeiroComponente,
    LyfeCycle,
    Pessoas,
  },
  data(){
    return{
        testando: 'Tste',
    }
  },
}

</script>