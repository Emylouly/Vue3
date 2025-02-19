<template>
    <div>
    
    <h1>Ola mundo</h1>

    <p>Meu nome é {{ nome }} e minha profissao é {{ profissao }}</p>
    </div>
</template>

<script>
export default {
    name:'PrimeiroComponente',
    data(){
        return{
            nome:'Emily',
            profissao:'Sla'
        }
    }
}
</script>
