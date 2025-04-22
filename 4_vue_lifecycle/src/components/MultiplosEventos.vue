<template>
    <div>

        <button @click="primeiro($event), segundo($event), terceiro(terceiro_evento, $event), quarto($event)">Ativar Multiplos Eventos</button>
        <p>{{ multiplos_eventos }}</p>

    </div>
</template>

<script>
export default {
    name:'MultiplosEventos',
    data(){
        return{
            multiplos_eventos: "",
            terceiro_evento: "Terceiro Evento",
        }
    },
    methods:{
        primeiro(e){
            this.multiplos_eventos = "Primeiro evento!";
        },
        segundo(e){
            setTimeout(() => this.multiplos_eventos="Segundo evento!", 500);
        },
        terceiro(e){
            setTimeout(() => this.multiplos_eventos= this.terceiro_evento, 1500);
        },
        quarto(e){
            setTimeout(() => this.multiplos_eventos= " ", 2500);
    }
    }
}
</script>

<style scoped>
    div{
        margin: 150px;
    }
</style>