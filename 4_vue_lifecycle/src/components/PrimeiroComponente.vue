<template>
    <div>
    
    <MultiplosEventos />

    <Reutilizacao />
    <Reutilizacao />
    <Reutilizacao />
    <Reutilizacao />
    <Reutilizacao />


    <h1>Ola mundo</h1>

    <p>Meu nome é {{ nome }} e minha profissao é {{ profissao }}</p>
    </div>
</template>

<script>

import MultiplosEventos from './MultiplosEventos.vue';
import Reutilizacao from './Reutilizacao.vue';

export default {
    name:'PrimeiroComponente',
    components:{
        MultiplosEventos,
        Reutilizacao,
    },
    data(){
        return{
            nome:'Emily',
            profissao:'Sla'
        }
    }
}
</script>
