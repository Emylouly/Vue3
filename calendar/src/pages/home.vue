<template>
    <v-container class="mt-10">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card elevation="4">
            <v-card-title class="text-h5">Página Inicial</v-card-title>
            <v-card-text>
              Esta é a página inicial criada com roteamento automático.
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="mostrarMensagem">Clique aqui</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
     </v-container>
  </template>
  
  <script setup>
  function mostrarMensagem() {
    alert('Você clicou no botão!')
  }
  </script>
  