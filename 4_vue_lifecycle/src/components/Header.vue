<template>
    <ul>
        <li class="home"><a href="#">Home</a></li>
        <li class="projetos"><a href="#">Projetos</a></li>
        <li class="contato"><a href="#">Contato</a></li>
        <li v-if="esta_logado"><a href="#">Meu Perfil</a></li>
    </ul>
</template>

<script>

export default {
    name: 'Header',
    props: ["esta_logado"]
    
}

</script>

<style scoped>

    ul{
        list-style: none;
        display: flex;
    }

    li{
        margin-right: 10px;
    }

    a{
        color: #DDD;
        text-decoration: none;
        transition: .5s;
    }

    a:hover {
        color: turquoise;
    }

    .home{
        background-color: blueviolet;
    }
    .projetos{
        background-color: cadetblue;
    }
    .contato{
        background-color: crimson;
    }

</style>