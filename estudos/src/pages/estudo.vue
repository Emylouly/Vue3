<template>
    <div>

      <a v-bind:href="link">Clique aqui</a>


        <form class="form">
            <label for="nome">Nome</label><br/>
            <input type="text" id="nome" name="nome" class="input" v-model="nome">
            <label form="sobrenome">Sobrenome</label><br/>
            <input type="text" id="sobrenome" name="sobrenome" class="input" v-model="sobrenome">
            <label for="dataNascimento">Data de nascimento</label><br/>
            <input type="number" id="dataNascimento" name="dataNascimento" class="input" v-model="dataNascimento">
        </form>

        <p>{{ nome }}</p>
        <p>{{ dataNascimento }}</p>
        <p>{{ nomeCompleto }}</p>

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

        <form class="form">
        <label for="numero1">Numero 1</label>
        <input type="number" id="numero1" name="numero1" class="input" v-model="numero1">
        <label for="numero2">Numero 2</label>
        <input type="number" id="numero2" name="numero2" class="input" v-model="numero2">
        </form>

        <p>{{ soma }}</p>
        <p>{{ dobro }}</p>

        <br/>

        <Mensagem :mensagem="texto" :nome="nome" :sobrenome="sobrenome" :livro="livro"/>

        <button @click="mostrarmensagem = !mostrarmensagem">Alterar imagem</button><br>
        <img v-if="mostrarmensagem" src="/img/emy.png" alt="Minha imagem">



        </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeMount, onUpdated, computed, watch } from 'vue';
import Mensagem from './mensagem.vue';

const nome = ref("Maria")
const sobrenome = ref('Silva')
const dataNascimento = ref("0")
const contador = ref(0)
const numero1 = ref(0)
const numero2 = ref(0)
const texto = ref('Aqui diz pipabaripapabarapapa')
const link = ref('http://localhost:8080/')
const mostrarmensagem = ref(true)

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
  mensagem.value = 'Foi!!!'
})

onUpdated(() => {
  console.log('🔁 O componente foi atualizado. Valor atual do contador:', contador.value)
})

const nomeCompleto = computed(() => {
  return `${nome.value} ${sobrenome.value}`.trim();
});

const soma = computed(() => numero1.value + numero2.value)
const dobro = computed(() => numero1.value * 2)

watch(contador, (novovalor, valorantigo) => {
  console.log(`Contador mudou de ${valorantigo} para ${novovalor}`)
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