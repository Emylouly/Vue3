<template>
    <div>

        <img :src="mosquichorro" :alt="descricao">

    </div>
</template>

<script>
export default {
    name:'Picture',
    data(){
        return{
            mosquichorro:"/img/a.png",
            descricao:"um cachorro mosquito"
        }
    }
}
</script>