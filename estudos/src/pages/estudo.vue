<template>
    <div>
        <form class="form">
            <label for="nome">Nome</label><br/>
            <input type="text" id="nome" name="nome" class="input" v-model="name">
            <label for="dataNascimento">Data de nascimento</label><br/>
            <input type="number" id="dataNascimento" name="dataNascimento" class="input" v-model="dataNascimento">
        </form>

        <p>{{ name }}</p>
        <p>{{ dataNascimento }}</p>

        <p>Contador: {{ contador }}</p>
        <button @click="incrementar">Incrementar</button>

        <form class="form">
            <label for="titulo">Titulo</label><br/>
            <input type="text" id="titulo" name="titulo" class="input" v-model="livro.titulo">
            <label for="paginas">Paginas</label><br/>
            <input type="number" id="paginas" name="paginas" class="input" v-model="livro.paginas">
        </form>

        <p>{{ livro.titulo }}</p>
        <p>{{ livro.paginas }}</p>

        <p>{{ mensagem }}</p>

        </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeMount, onUpdated } from 'vue';

const name = ref("aaaa")
const dataNascimento = ref("0")
const contador = ref(0)

function incrementar() {
  contador.value++;
}

const livro = reactive({
  titulo: 'As cronicas de narnia',
  paginas: 125
})

const mensagem = ref("")

onBeforeMount(() => {
  console.log('🔵 Componente vai ser montado')
})

onMounted(() => {
  console.log('🟢 Componente montado')
  mensagem.value = 'Pronto!'
})

onUpdated(() => {
  console.log('🔁 O componente foi atualizado. Valor atual do contador:', contador.value)
  // Não mude mensagem.value aqui!
})
</script>


<style>
.form {
    margin: 0;
    padding: 5px;
    width: 200px;
    background-color: black;
    color: white;
    border: 1px solid white;
}

.input{
    background-color: white;
    color: black;
}

</style>