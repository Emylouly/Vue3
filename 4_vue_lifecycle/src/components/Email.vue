<template>
    <div>
        <select v-model="mostrar">
            <option :value="true">Mostra</option>
            <option :value="false">Some</option>
        </select>
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
