<template>
    <div>
        <div>
        <button @click="showEmail">Mostrar</button>
        </div>
        <p v-show="mostrar">{{ email }}</p>
    </div>
</template>

<script>

export default {
    name:'Email',
    props:{
        email: String,
    },
    data(){
        return{   
            mostrar: false,
        }
    },
    methods:{
        showEmail(){
            console.log("Foi"),
            this.mostrar = !this.mostrar;
        }
    }
}
</script>
