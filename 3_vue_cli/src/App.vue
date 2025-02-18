<template>
  <div>
  <PrimeiroComponente />

  <p>O dato de app é {{ testando }}</p>

  </div>
</template>

<script>
import PrimeiroComponente from './components/PrimeiroComponente.vue';

export default {
  name: 'App',
  components: {
    PrimeiroComponente
  },
  data(){
    return{
      testando:"teste"
    }
  }
}
</script>