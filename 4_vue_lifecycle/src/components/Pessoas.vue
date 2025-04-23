<template>
    <div>
        <h2>Está é a descrição da pessoa {{ nome }}</h2>
        <Dados />

        <Email :email="email" />

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
                email: 'Emily@gmail.com'
                
            }
        },
}
</script>

<style>

    .pai{
        color: red;
    }

</style>