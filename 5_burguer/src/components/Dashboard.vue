<template>
    <div>
    <Message :msg="msg" v-show="msg" />
    <div id="burger-table">
        <div>
            <div id="burger-table-heading">
                <div class="order-id">#:</div>
                <div>Cliente:</div>
                <div>Pão:</div>
                <div>Carne:</div>
                <div>Opcionais:</div>
                <div>Ação:</div>
            </div>
        </div>

        <div id="burger-table-rows">

            <div class="burger-table-row" v-for="burger in burgers" :key="burger.id">

                <div class="order-number">{{ burger.id }}</div>
                <div>{{ burger.nome }}</div>
                <div>{{ burger.pao }}</div>
                <div>{{ burger.carne }}</div>
                <div>
                    <ul>
                        <li v-for="(opcional, index) in burger.opcionais" :key="index">
                            {{ opcional }}
                        </li>
                    </ul>
                </div>
                
                <div>
                    <select name="status" id="status" @change="updatedBurger($event, burger.id)">
                        <option value="">Selecione</option>
                        <option v-for="s in status" :key="s.id" :value="s.tipo" :selected="burger.status ==s.tipo">
                            {{ s.tipo }}
                        </option>
                    </select>
                    <button class="delete-btn" @click="deleteBurger(burger.id)">Cancelar</button>
                </div>

            </div>

        </div>
    </div>
</div>
</template>

<script>

import Message from './Message.vue';

export default {
    name: 'Dashboard',
    components:{
        Message
    },
    data(){
        return{
            burgers: null,
            burger_id: null,
            status: [],
            msg: null
        }
    },
    methods:{
        async getPedidos(){
            //Metodo que pede os hamburgues do servidor
            const req = await fetch("http://localhost:3000/burgers");
            //Converte os dados de JS para Json
            const data = await req.json();

            //Declara que o dado burgers é igual à data vinda do servidor
            this.burgers = data;

            //resetar status
            this.getStatus();

            console.log(this.burgers);
        },
        async getStatus(){
            //metodo que pede os status do servidor
            const req = await fetch("http://localhost:3000/status");
            //Converte os dados de JS para Json
            const data = await req.json();
            
            //Declara que o dado status é igual à data vinda do servidor
            this.status = data;

            console.log(this.status);
        },
        async deleteBurger(id){

            const req = await fetch(`http://localhost:3000/burgers/${id}`, {
            method: "DELETE"
            });

            const res = await req.json();

            // colocar msg de sistema
            this.msg = `Pedido removido com sucesso!`;

            //limpar mensagem
            setTimeout(() => this.msg = "", 3000);

            this.getPedidos();
        },
        async updatedBurger(event, id){
            const option = event.target.value;
            const dataJson = JSON.stringify({ status: option });

            const req = await fetch(`http://localhost:3000/burgers/${id}`,{
                method: "PATCH",
                headers:{ "Content-Type": "application/json" },
                body: dataJson,
            });

            const res = await req.json();

            // colocar msg de sistema
            this.msg = `O pedido Nº ${res.id} foi atualizado para ${res.status}.`;

            //limpar mensagem
            setTimeout(() => this.msg = "", 3000);

        }
    },
    mounted(){
        //Quando a página é carregada ele chama o getPedidos
        this.getPedidos();
    }
}

</script>

<style scoped>

    #burger-table {
        max-width: 1200px;
        margin: 0 auto;
    }

    #burger-table-heading,
    #burger-table-rows,
    .burger-table-row {
        display: flex;
        flex-wrap: wrap;
    }

    #burger-table-heading {
        font-weight: bold;
        padding: 12px;
        border-bottom: 3px solid #333;
    }

    .burger-table-row {
        width: 100%;
        padding: 12px;
        border-bottom: 1px solid #CCC;
    }

    #burger-table-heading div,
    .burger-table-row div {
        width: 19%;
    }

    #burger-table-heading .order-id,
    .burger-table-row .order-number {
        width: 5%;
    }

    select {
        padding: 12px 6px;
        margin-right: 12px;
    }

    .delete-btn {
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

    .delete-btn:hover {
        background: transparent;
        color: #222;
    }

</style>