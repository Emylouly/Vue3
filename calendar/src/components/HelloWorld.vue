<template>
  <v-container class="my-5">
    <v-row justify="center">
      <v-col cols="12" md="5">
        <!-- Cartão principal -->
        <v-card elevation="4">
          <v-card-title class="text-h5">Atalho do Teclado</v-card-title>
          <v-card-text>
            <v-sheet class="pa-4" color="#f5f5f5">
              <p>Use o atalho abaixo para copiar o texto selecionado:</p>
              <v-kbd>Ctrl</v-kbd> + <v-kbd>C</v-kbd>
            </v-sheet>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" text>Ok, entendi</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-btn to="/home">Ir para home</v-btn>

  </v-container>
</template>

<script>

</script>

<style scoped>
.custom-col {
  background-color: #121212 !important; /* tom escuro fixo como na 2ª imagem */
  color: white; /* garante contraste do texto */
}
</style>
