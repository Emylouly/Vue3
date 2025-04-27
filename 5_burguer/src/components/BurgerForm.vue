<template>
    <div>
        <p>Componete de mensagem</p>
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
    export default {
        name: 'BurgerForm',
        data(){
            return{
                paes: null,
                carnes: null,
                opcionaisdata: null,
                nome: null,
                pao: null,
                carne: null,
                opcional: [],
                status: "Solicitado",
                msg: null
            }
        },
        methods:{
            async getingredientes(){
                const req = await fetch('http://localhost:3000/ingredientes');
                const data = await req.json();


                this.paes = data.paes;
                this.carnes = data.carnes;
                this.opcionaisdata = data.opcionais;
            },
            async createBurger(e){
                e.preventDefault();

                console.log("Criou Hamburguer");
            }
        },
        mounted(){
            this.getingredientes()
        }
    }
</script>


<style scoped>
    #burguer-form{
        max-width: 400px;
        margin: 0 auto;
    }


    .input-container{
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }


    label{
        font-weight: bold;
        margin-bottom: 15px;
        color: #222;
        padding: 5px 10px;
        border-left: 4px solid #FCBA03;
    }


    input, select{
        padding: 5px 10px;
        width: 300px;
    }


    #optionais-container{
        flex-direction: row;
        flex-wrap: wrap;
    }


    #opcionais-title{
        width: 100%;
    }


    .checkbox-container{
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