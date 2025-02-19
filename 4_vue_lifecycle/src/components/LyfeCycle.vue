<template>
    <h1>Meu nome é {{ nome }}</h1>
</template>

<script>
export default{
    name:'LyfeCycle',
    data(){
        return{
            nome:'Não sei'
        }
    },
    created(){
    setTimeout(() => {
    this.nome = "Emily"
  }, 1000);
},
  mounted(){
    setTimeout(() =>{
    this.nome = "Louise"
  }, 2000);
},
}
</script>