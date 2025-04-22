<template>
    <div>
    
    <MultiplosEventos />

    <h1>Ola mundo</h1>

    <p>Meu nome é {{ nome }} e minha profissao é {{ profissao }}</p>
    </div>
</template>

<script>

import MultiplosEventos from './MultiplosEventos.vue';

export default {
    name:'PrimeiroComponente',
    components:{
        MultiplosEventos,
    },
    data(){
        return{
            nome:'Emily',
            profissao:'Sla'
        }
    }
}
</script>
