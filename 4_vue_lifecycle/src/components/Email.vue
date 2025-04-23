<template>
    <div>
        <div>
        <button @click="showEmail">Mostrar</button>
        </div>
        <p v-show="mostrar">{{ email }}</p>

        <div>
            <button @click="showTrabalho">{{ textoBotao }}</button>
        </div>
        <p v-show="mostrar2">{{ trabalho }}</p>
    </div>
</template>

<script>

export default {
    name:'Email',
    props: {
        email: String,
        trabalho: String,
    },
    data(){
        return{
            mostrar: false,
            mostrar2: false,
            textoBotao: 'Mostrar trabalho',
        }
    },
    methods:{
        showEmail(){
            console.log("Foi"),
            this.mostrar = !this.mostrar;
        },

        showTrabalho(){
            console.log("Rapaz"),
            this.mostrar2 = !this.mostrar2;
            if(!this.mostrar2){
                this.textoBotao = 'Mostrar trabalho'
            }
            else{
                this.textoBotao = 'Esconder Trabalho'
            }
        }
    }
}
</script>
