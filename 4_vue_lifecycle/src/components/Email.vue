<template>
    <div>
        <button v-show="email">{{ email }}</button>
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
