<template>
    <v-container class="mt-10">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card elevation="4">
            <v-card-title class="text-h5">Página Inicial</v-card-title>
            <v-card-text>
              Página inicial
              Página inicial aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </v-card-text>
            <v-card-text>
              Página inicial
              Página inicial aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              {{ name2 }}
            </v-card-text>
            <v-card-text>
              Página inicial aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </v-card-text>
            <v-card-text>sfhgsdfgs
              Página inicial
              Página inicial aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </v-card-text>
            <v-card-text>
              Página inicialcvxbcbvcb
              Página inicial aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              {{ name1 }}

            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" 
              
              
              @click="mostrarMensagem">Clique aqui</v-btn>
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

  const name = ref("asfa");
  const name1 = ref("bbbb");
  const name2 = ref("ccc");

  </script>
  