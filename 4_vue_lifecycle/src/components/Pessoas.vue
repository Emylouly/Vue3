<template>
    <div>
        <h2>Está é a descrição da pessoa {{ nome }}</h2>
        <Dados />

        <Email :email="email" :trabalho="trabalho"/>

    </div>
</template>

<script>
import Dados from './Dados.vue';
import Email from './Email.vue';
import Form from './Form.vue';

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
                email: 'Emily@gmail.com',
                trabalho: 'Trabalho com finanças',
                
            }
        },
}
</script>

<style>

    .pai{
        color: red;
    }

</style>