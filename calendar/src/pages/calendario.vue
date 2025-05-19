<template>
  <div>
    <Message :msg="msg" v-show="msg" />

    <!-- Filtro de visualização -->
    <v-sheet class="d-flex" height="54" tile>
      <v-select
        v-model="type"
        :items="types"
        class="ma-2"
        density="compact"
        label="View Mode"
        variant="outlined"
        hide-details
      ></v-select>
      <v-select
        v-model="weekday"
        :items="weekdays"
        class="ma-2"
        density="compact"
        label="Dias da semana"
        variant="outlined"
        hide-details
      />
    </v-sheet>

    <!-- Calendário -->
    <v-sheet>
      <v-calendar
        ref="calendar"
        v-model="value"
        :events="events"
        :view="type"
        :weekdays="weekday"
        @click:date="openDialog"
      />
    </v-sheet>

    <!-- Diálogo para adicionar evento -->
    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title>Adicionar Evento</v-card-title>

        <v-card-text>
          <v-text-field v-model="newEvent.title" label="Título do evento" />

          <v-menu
            v-model="menuStart"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
          >
            <template #activator="{ props }">
              <v-text-field
                v-model="formattedStart"
                label="Início"
                readonly
                v-bind="props"
              />
            </template>
            <v-date-picker
              v-model="newEvent.start"
              @update:modelValue="updateFormattedStart"
            />
          </v-menu>

          <v-menu
            v-model="menuEnd"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
          >
            <template #activator="{ props }">
              <v-text-field
                v-model="formattedEnd"
                label="Fim"
                readonly
                v-bind="props"
              />
            </template>
            <v-date-picker
              v-model="newEvent.end"
              @update:modelValue="updateFormattedEnd"
            />
          </v-menu>

          <v-select
            v-model="newEvent.color"
            :items="colors"
            label="Cor"
          />
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
import Message from '@/components/Message.vue';

export default {
  components: { Message },
  name: 'Calendario',
  data() {
    return {
      msg: null,
      type: 'month',
      types: [
        { title: 'Mês', value: 'month' },
        { title: 'Semana', value: 'week' },
        { title: 'Dia', value: 'day' },
      ],
      weekday: [0, 1, 2, 3, 4, 5, 6],
      weekdays: [
        { title: 'Dom - Sáb', value: [0, 1, 2, 3, 4, 5, 6] },
        { title: 'Seg - Dom', value: [1, 2, 3, 4, 5, 6, 0] },
        { title: 'Seg - Sex', value: [1, 2, 3, 4, 5] },
        { title: 'Seg, Qua, Sex', value: [1, 3, 5] },
      ],
      value: [new Date()],
      events: [],
      colors: [
        'blue',
        'indigo',
        'deep-purple',
        'cyan',
        'green',
        'orange',
        'grey darken-1',
      ],
      dialog: false,
      selectedDate: null,
      formattedStart: '',
      formattedEnd: '',
      menuStart: false,
      menuEnd: false,
      newEvent: {
        title: '',
        color: '',
        start: null,
        end: null,
      },
    };
  },
  methods: {
    openDialog(date) {
      if (!date) return;

      const parsedDate = new Date(date); // transforma string ISO em objeto Date
      

      this.selectedDate = parsedDate;
      this.dialog = true;

      this.newEvent = {
        title: '',
        color: '',
        start: parsedDate,
        end: parsedDate,
      };

      this.formattedStart = parsedDate && !isNaN(parsedDate.getTime()) ? parsedDate.toLocaleDateString('pt-BR') : '';
      this.formattedEnd = parsedDate && !isNaN(parsedDate.getTime()) ? parsedDate.toLocaleDateString('pt-BR') : '';

    },
    saveEvent() {
      if (
        !this.newEvent.title ||
        !this.newEvent.color ||
        !this.newEvent.start ||
        !this.newEvent.end
      ) {
        this.msg = 'Preencha todos os campos!';
        setTimeout(() => (this.msg = ''), 2000);
        return;
      }

      const evento = {
        title: this.newEvent.title,
        color: this.newEvent.color,
        start: this.newEvent.start,
        end: this.newEvent.end,
        allDay: true,
      };

      this.events.push(evento);

      fetch('http://localhost:8081/eventos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(evento),
      })
        .then((res) => {
          if (!res.ok) throw new Error('Erro ao salvar');
          return res.json();
        })
        .then(() => {
          this.msg = 'Evento salvo com sucesso!';
          setTimeout(() => (this.msg = ''), 1500);
        })
        .catch((err) => {
          console.error(err);
          this.msg = 'Erro ao salvar o evento!';
          setTimeout(() => (this.msg = ''), 2000);
        });

      this.dialog = false;
    },
    updateFormattedStart(date) {
      if (!date || isNaN(new Date(date).getTime())) {
        this.formattedStart = '';
      } else {
        this.formattedStart = new Date(date).toLocaleDateString('pt-BR');
      }
    },

    updateFormattedEnd(date) {
      if (!date || isNaN(new Date(date).getTime())) {
        this.formattedEnd = '';
      } else {
        this.formattedEnd = new Date(date).toLocaleDateString('pt-BR');
      }
    },

  },
  created() {
  // Buscar eventos do backend
  fetch('http://localhost:8081/eventos')
    .then(res => {
      if (!res.ok) throw new Error('Erro ao buscar eventos');
      return res.json();
    })
    .then(data => {
      // Converter strings de data para objetos Date
      this.events = data.map(evento => ({
        ...evento,
        start: new Date(evento.start),
        end: new Date(evento.end),
      }));
    })
    .catch(err => {
      console.error(err);
      this.msg = 'Erro ao carregar eventos!';
      setTimeout(() => (this.msg = ''), 3000);
    });
},

};
</script>
