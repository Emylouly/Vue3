<template>
    <div>
        <Message :msg="msg" v-show="msg" />
        <form id="burger-form" @submit="createBurger">

            <div class="input-container">
                <label for="nome">Nome do cliente</label>
                <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite o seu nome: ">
            </div>

            <div class="input-container">
                <label for="pao">Escola do pão: </label>
                <select name="pao" id="pao" v-model="pao">
                    <option value="">Selecione o pao</option>
                    <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{pao.tipo}}</option>
                </select>
            </div>
            <div class="input-container">
                <label for="carne">Escolha da carne: </label>
                <select name="carne" id="carne" v-model="carne">
                    <option value="">Selecione a carne</option>
                    <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">{{carne.tipo}}</option>
                </select>
            </div>
            <div class="input-container">
                <label id="opcionais-title" for="opcionais">Selecione os opcionais: </label>


                <div class="checkbox-container" v-for="opcional in opcionaisdata" :key="opcional.id">
                    <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo">
                    <span>{{ opcional.tipo }}</span>
                </div>
                </div>
            <div class="input-container">
                <input type="submit" class="submit-btn" value="Criar meu Burguer">
            </div>
        </form>
    </div>
</template>


<script>

import Message from './Message.vue';

    export default {
        name: 'BurgerForm',
        components: {
            Message
        },
        data(){
            return{
                paes: null,
                carnes: null,
                opcionaisdata: null,
                nome: null,
                pao: null,
                carne: null,
                opcionais: [],
                status: "Solicitado",
                msg: null
            }
        },
        methods:{
            async getingredientes(){
                //Get para buscar os ingredientes do servidor
                const req = await fetch('http://localhost:3000/ingredientes');
                //Salva ingredientes escolhidos em data
                const data = await req.json();

                this.paes = data.paes;
                this.carnes = data.carnes;
                this.opcionaisdata = data.opcionais;
            },
            //Impede que a página seja recarregada
            async createBurger(e){
                e.preventDefault();

                //Data com as escolhas de ingredientes
                const data ={
                    id: Date.now(),
                    nome: this.nome,
                    pao: this.pao,
                    carne: this.carne,
                    opcionais: Array.from(this.opcionais),
                    status: 'Solicitado'
                }

                //Transforma os dados Data de JS para Json
                const dataJson = JSON.stringify(data);
                //Post que cria um novo pedido no servidor
                const req = await fetch("http://localhost:3000/burgers", {
                    method: "POST",
                    headers:{"Content-Type": "application/json"},
                    body: dataJson
                });

                //Retorna dos dados do pedido criado
                const res = await req.json();

                // colocar msg de sistema
                this.msg = `Pedido N ${res.id} realizado com sucesso`;

                //limpar mensagem
                setTimeout(() => this.msg = "", 3000);

                //limpar os campos
                this.nome = '',
                this.pao = '',
                this.carne = '',
                this.opcionais = []

            }
        },
        mounted(){
            //Quando a página é carregada ele chama o getingredientes
            this.getingredientes()
        }
    }
</script>


<style scoped>
    #burger-form {
        max-width: 400px;
        margin: 0 auto;
    }


    .input-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }


    label {
        font-weight: bold;
        margin-bottom: 15px;
        color: #222;
        padding: 5px 10px;
        border-left: 4px solid #FCBA03;
    }


    input, select {
        padding: 5px 10px;
        width: 300px;
    }


    #optionais-container {
        flex-direction: row;
        flex-wrap: wrap;
    }


    #opcionais-title {
        width: 100%;
    }


    .checkbox-container {
        display: flex;
        align-items: flex-start;
        width: 50%;
        margin-bottom: 20px;
    }


    .checkbox-container span,
    .checkbox-container input {
        width: auto;
    }


    .checkbox-container span {
        margin-left: 6px;
        font-weight: bold;
    }


    .submit-btn {
        background-color: #222;
        color: #FCBA03;
        font-weight: bold;
        border: 2px solid #222;
        padding: 10px;
        font-size: 16px;
        margin: 0 auto;
        cursor: pointer;
        transition: .5s;
    }


    .submit-btn:hover {
        background-color: transparent;
        color: #222;
    }


</style>