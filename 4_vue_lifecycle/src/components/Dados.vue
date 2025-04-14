<template>
    <div>
        <p>Eu trabalho em:</p>
        <ul>
            <li>Escola</li>
            <li>Cafeteria</li>
            <li>Casa</li>
        </ul>

        <p>Sei as seguintes linguagens de programação de backend:</p>

        <ul>
            <li v-for="(technology, index) in backend_technologies" v-bind:key="index">
                {{ technology }}</li>
            <li>a mais</li>
        </ul>

        <p>Sei as seguintes linguagens de programação de frontend:</p>

        <ul>
            <li v-for="technology in frontend_technologies" :key="technology.id">
                {{ technology.language }}</li>
            <li>a mais</li>
        </ul>

    </div>
</template>

<script>
export default {
    name:'Dados',

    data() {
        return {
            backend_technologies:['Python', 'PHP', 'JavaScript'],
            frontend_technologies:[
                {id: 1, language: 'HTML'},
                {id: 2, language: 'CSS'},
                {id: 3, language: 'VUE'},
            ]
        }
    }

}
</script>
