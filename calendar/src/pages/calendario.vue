<template>
    <div>
      <v-sheet class="d-flex" height="54" tile>
        <v-select class="ma-2"
        density="compact"
        label="Modo de Visualização"
        variant="outlined"
        hide-details>
        </v-select>

        <v-select class="ma-2"
        density="compact"
        label="Dias da semana"
        variant="outlined"
        hide-details>
        </v-select>

      </v-sheet>

      <v-sheet>
        <v-calendar
        ref="caledar">
        </v-calendar>
      </v-sheet>
    </div>
</template>