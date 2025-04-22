<template>
    <div>
        <form action="" @submit="enviarFormulario($event)">
            <div>
                <input type="text" v-model="name">
            </div>
            <div>
                <input type="text" v-model="email">
            </div>
            <div>
                <Submit />
            </div>
        </form>
        <p>{{ name }}</p>
        <p>{{ email }}</p>
    </div>
</template>

<script>

import InputText from './Form/InputText.vue';
import Submit from './Form/Submit.vue';

export default {
    name: 'Form',
    components:{
        InputText,
        Submit
    },
    data(){
        return{
            name: "",
            email: ""
        }
    }
    ,
    methods: {
        enviarFormulario(e) {

            e.preventDefault();

            const name = this.name;
            const email = this.email;

            console.log("Formulário Enviado!");
            console.log("O nome é: " + name);
            console.log("O email é: " + email);

            //Ajax

            //inserir no banco os dados

        }
    }
}
</script>