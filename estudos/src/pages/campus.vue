<template>
  <AdminLayout>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8">
        <v-card elevation="4" class="pa-6">
          <v-card-title class="text-h6">Cadastrar Campus</v-card-title>
          <v-card-text>
            <form @submit.prevent="salvarCampus">
              <v-text-field
                v-model="campus.nome"
                label="Campus"
                required
              />

              <v-text-field
                v-model="campus.sigla"
                label="Sigla"
                required
              />

              <!-- Estado -->
              <v-select
                v-model="campus.estado"
                :items="estados"
                label="Estado"
                item-title="nome"
                item-value="sigla"
                return-object
                required
              />

              <!-- Cidade (filtrada por estado) -->
              <v-select
                v-model="campus.cidade"
                :items="cidadesFiltradas"
                label="Cidade"
                :disabled="!campus.estado"
                required
              />

              <v-btn type="submit" color="primary" class="mt-4">Salvar</v-btn>
            </form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </AdminLayout>
</template>

<script setup>
import { ref, computed } from 'vue'

const campus = ref({
  nome: '',
  sigla: '',
  estado: null,
  cidade: ''
})

// Lista de estados e cidades
const estados = [
  {
    nome: 'São Paulo',
    sigla: 'SP',
    cidades: ['São Paulo', 'Campinas', 'Santos']
  },
  {
    nome: 'Minas Gerais',
    sigla: 'MG',
    cidades: ['Belo Horizonte', 'Uberlândia', 'Juiz de Fora']
  },
  {
    nome: 'Rio de Janeiro',
    sigla: 'RJ',
    cidades: ['Rio de Janeiro', 'Niterói', 'Campos dos Goytacazes']
  }
]

// Computed para filtrar cidades conforme o estado selecionado
const cidadesFiltradas = computed(() => {
  return campus.value.estado?.cidades || []
})

function salvarCampus() {
  console.log('Dados do campus:', {
    nome: campus.value.nome,
    sigla: campus.value.sigla,
    estado: campus.value.estado?.nome || '',
    cidade: campus.value.cidade
  })
}
</script>
