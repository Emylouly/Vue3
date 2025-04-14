<template>
    <div>
        <h2>Está é a descrição da pessoa {{ nome }}</h2>
        <Dados />

        <Form />

    </div>
</template>

<script>
import Dados from './Dados.vue';
import Form from './Form.vue';
    export default {
        name: 'Pessoas',
        components:{
            Dados,
            Form
        },
        data(){
            return{
                nome: 'Loulou',
                
            }
        },
}
</script>

<style>

    .pai{
        color: red;
    }

</style>