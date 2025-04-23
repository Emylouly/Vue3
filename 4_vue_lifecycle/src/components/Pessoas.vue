<template>
    <div>
        <h2>Está é a descrição da pessoa {{ nome }}</h2>
        <Dados />

        <Email compEmail="cafe@gmail.com"/>

    </div>
</template>

<script>
import Dados from './Dados.vue';
import Form from './Form.vue';
import Email from './Email.vue';

    export default {
        name: 'Pessoas',
        components:{
            Dados,
            Form,
            Email,
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