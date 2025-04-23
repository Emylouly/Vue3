<template>
    <div>
        <button v-show="email">Mostrar</button>
        <p>{{ email }}</p>
    </div>
</template>

<script>

export default {
    name:'Email',
    props:{
        email: String,
    }
}
</script>
