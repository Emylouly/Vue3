<template>
    <div>

      <Message :msg="msg" v-show="msg" />

      <v-sheet class="d-flex" height="54" tile>
        <v-select
        v-model="type"
        :items="types"
        class="ma-2"
        density="compact"
        label="Modo de Visualização"
        variant="outlined"
        hide-details>
        </v-select>

        <v-select
        v-model="weekday"
        :items="weekdays"
        class="ma-2"
        density="compact"
        label="Dias da semana"
        variant="outlined"
        hide-details>
        </v-select>

      </v-sheet>

      <v-sheet>
        <v-calendar
        ref="calendar"
        v-model="value"
        :events="events"
        :view-mode="type"
        :weekdays="weekday"
        @click:date="openDialog"
        >
        </v-calendar>
      </v-sheet>

      <v-dialog v-model="dialog" max-width="400">
        <v-card>
          <v-card-title>Adicionar Evento</v-card-title>
          <v-card-text>
            <v-text-field v-model="newEvent.title" label="Título do evento" />
            <v-select
            v-model="newEvent.color"
            :items="colors"
            label="Cor"/>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="saveEvent">Salvar</v-btn>
            <v-btn @click="dialog = false">Cancelar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
</template>

<script>
import { useDate } from 'vuetify';
import Message from '@/components/Message.vue';

export default {
  components: { Message, useDate},
  name:'Calendario',
  data(){
    return{
      msg:null,
      type: 'month',
      types: [
              { title:'Mês', value:'month'},
              { title:'Semana', value:'week'},
              { title:'Dia', value:'day'}],
      weekday:[0, 1, 2, 3, 4, 5, 6],
      weekdays:[
                    { title:'Dom - Sáb', value:[0, 1, 2, 3, 4, 5, 6] },
                    { title:'Seg - Dom', value:[1, 2, 3, 4, 5, 6, 0] },
                    { title:'Seg - Sex', value:[1, 2, 3, 4, 5] },
                    { title:'Seg, Qua, Sex', value:[1, 3, 5] },
                  ],
      value: [new Date()],
      events:[],
      colors:[
              'blue',
              'indigo',
              'deep-purple',
              'cyan',
              'green',
              'orange',
              'grey darken-1',
            ],
      titles:[],
      dialog: false,
      selectedDate: null,
      newEvent:{
        title: '',
        color: '',
      },
    }
  },
  methods:{
    openDialog({date}){
      this.selectedDate = date
      this.dialog = true
      this.newEvent = {
        title: '',
        color: ''
      }
    },
    saveEvent(){
      if (!this.newEvent.title || !this.newEvent.color) return;
      this.events.push({
        title: this.newEvent.title,
        start: this.selectedDate,
        end: this.selectedDate,
        color: this.newEvent.color,
        allDay: true,
      });
      //Mensagem de confirmação de salvamento de evento
      this.msg = 'Salvo';
      //limpar mensagem
      setTimeout(() => this.msg = "", 1500);
      this.dialog = false
    },
  },
    created() {
    this.events.push({
      title: 'Teste',
      start: new Date(),
      end: new Date(),
      color: 'blue',
      allDay: true
    })
  }
}

</script>