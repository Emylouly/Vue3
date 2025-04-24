<template>
    <div>

        <img :src="mosquichorro" :alt="descricao">
        <MudarImagem @mudar-imagem="trocarImagem" />

    </div>
</template>

<script>

import MudarImagem from './MudarImagem.vue';

export default {
    name:'Picture',
    components: {
        MudarImagem
    },
    data(){
        return{
            mosquichorro:"/img/a.png",
            descricao:"um cachorro mosquito"
        }
    },
    methods: {
        trocarImagem() {
            if(this.mosquichorro == '/img/a.png'){
                this.mosquichorro = '/img/b.png'
            }
            else if(this.mosquichorro == '/img/b.png'){
                this.mosquichorro = '/img/c.png'
            }
            else if(this.mosquichorro == '/img/c.png'){
                this.mosquichorro = '/img/d.png'
            }
            else if(this.mosquichorro == '/img/d.png'){
                this.mosquichorro = '/img/e.png'
            }
            else if(this.mosquichorro == '/img/e.png'){
                this.mosquichorro = '/img/f.png'
            }
            else {
                this.mosquichorro = '/img/a.png'
            }
        }
    }
}
</script>