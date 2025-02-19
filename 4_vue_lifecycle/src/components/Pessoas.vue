<template>
    <div>
        <h2>Está é a descrição da pessoa {{ nome }}</h2>
        
        <Dados />
        </div>
</template>

<script>

import Dados from './Dados.vue';

export default{
    name: 'Pessoas',
    components:{
        Dados,
    },
    data(){
        return{
            nome: 'Loulou'
        }
    }
}
</script>
