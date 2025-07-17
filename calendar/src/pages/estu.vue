<template>
    <AdminLayout>
        <v-card flat style="width: 95%;">  
            <v-card-title class="d-flex align-center pe-2">
                <v-icon icon="mdi-book-open-page-variant"></v-icon> &nbsp; Disciplinas&nbsp;&nbsp;
                <v-spacer></v-spacer>
                <v-btn variant="flat" color="success" @click="handleNew">Novo</v-btn>&nbsp;
                &nbsp;
                <v-select
                    v-model="selectProfessor"
                    :items="professor"
                    item-title="label"
                    item-value="id"
                    density="compact"
                    label="Filtrar por Professor"
                    clearable
                    variant="solo-filled"
                    flat
                    hide-details
                ></v-select>
                &nbsp;
                <v-select
                    v-model="selectCargaHoraria"
                    :items="cargaHoraria"
                    item-title="label"
                    item-value="id"
                    density="compact"
                    label="Filtrar por Carga Horaria"
                    clearable
                    variant="solo-filled"
                    flat
                    hide-details
                ></v-select>
                &nbsp;
                <v-text-field
                    v-model="search"
                    density="compact"
                    label="Search"
                    prepend-inner-icon="mdi-magnify"
                    variant="solo-filled"
                    flat
                    hide-details
                    single-line
                    clearable
                ></v-text-field>
                <v-btn
          variant="flat"
          color="warning"
          class="ml-4"
          @click="limparFiltros"
        >
          <v-icon start>mdi-broom</v-icon> Limpar Filtros
        </v-btn>
            </v-card-title>


            <v-divider></v-divider>
            <v-data-table :headers="headers" :items="filtered">
                <template v-slot:item.professor="{ item }">
                    {{ item.professor.nome }}
                </template>
                <template v-slot:item.actions="{ item }">
                    <v-btn size="small" icon color="info" @click="viewItem(item)">
                        <v-icon>mdi-eye</v-icon> <!-- Visualizar -->
                        <v-tooltip activator="parent" location="top">Visualizar: {{item.nome}}</v-tooltip>
                    </v-btn>
                    &nbsp;
                    <v-btn size="small" icon color="primary" @click="editItem(item)">
                        <v-icon>mdi-pencil</v-icon>
                        <v-tooltip activator="parent" location="top">Editar: {{item.nome}}</v-tooltip>
                    </v-btn>
                    &nbsp;
                    <v-btn size="small" icon color="error" @click="deleteItem(item)">
                        <v-icon>mdi-delete</v-icon> <!-- Deletar -->
                        <v-tooltip activator="parent" location="top">Deletar: {{item.nome}}</v-tooltip>
                    </v-btn>
                    &nbsp;
                    <v-btn size="small" icon color="purple" @click="abrirTurmas(item)">
                        <v-icon>mdi-table-multiple</v-icon> <!-- Deletar -->
                        <v-tooltip activator="parent" location="top">Turmas de: {{item.nome}}</v-tooltip>
                    </v-btn>
                    &nbsp;
                    <v-btn size="small" icon color="deep-purple" @click="adicionarTurmas(item)">
                        <v-icon>mdi-table-row-plus-before</v-icon> <!-- Deletar -->
                        <v-tooltip activator="parent" location="top">Adicionar turmas à: {{item.nome}}</v-tooltip>
                    </v-btn>
                </template>
            </v-data-table>


    <v-dialog v-model="dialogTurmas" max-width="600">
        <v-card>
            <v-card-title>
            Turmas da Disciplina: {{ disciplinaSelecionada?.nome }}
            <v-spacer></v-spacer>
            <v-btn icon @click="dialogTurmas = false">
            <v-icon>mdi-close</v-icon>
            </v-btn>
            </v-card-title>

        <v-divider></v-divider>

            <v-card-text>
                <v-list>
                    <v-list-item v-for="turma in turmasDaDisciplina" :key="turma.id" class="py-1">
                    <v-row class="w-100" align="center" justify="space-between" no-gutters>
                        <v-col cols="11">
                        {{ turma.codigo }} - {{ turma.ano }}/{{ turma.semestre }} - {{ turma.curso }}
                        </v-col>
                        <v-col cols="1" class="text-right">
                        <v-btn icon color="red" size="small" @click="removerTurma(turma)">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        </v-col>
                    </v-row>
                    </v-list-item>
                </v-list>
            </v-card-text>

        </v-card>
    </v-dialog>

        </v-card>
    </AdminLayout>
</template>


<script setup>
    import { ref, computed, onMounted } from 'vue'
    import { useRouter } from 'vue-router'

    import { professor_lista_all } from '@/services/professor_services';
    import { disciplina_lista_all, disciplina_delete } from '@/services/disciplina_services';
    import { turmadisciplina_lista_all, turmadisciplina_delete } from '@/services/turmadisciplina_service';

    const router = useRouter()

    onMounted(() => {
        atualizarDisciplina()
        atualizarprofessor()
    })

    const itens = ref([])
    const search = ref('')
    const cargaHoraria = ref([])
    const professor = ref()
    const selectProfessor = ref(null)
    const selectCargaHoraria = ref(null)


    const headers = [
    { align: 'start', key: 'id', title: 'Código', sortable: false },
    { key: 'nome', title: 'Nome', sortable: true },
    { key: 'cargaHoraria', title: 'Carga Horaria', sortable: true },
    { key: 'professor', title: 'Professor', sortable: true },
    { key: 'actions', title: 'Ações', sortable: false }
    ]

    const filtered = computed(() => {
    return itens.value.filter(item => {
        const matchesSearch = !search.value || item.nome.toLowerCase().includes(search.value.toLowerCase());
        const matchesprofessor = !selectProfessor.value || (item.professor && item.professor.id === selectProfessor.value);
        const matchescargaHoraria = !selectCargaHoraria.value || item.cargaHoraria === selectCargaHoraria.value;
        return matchesSearch && matchesprofessor && matchescargaHoraria;
    });
    })

    const dialogTurmas = ref(false)
    const disciplinaSelecionada = ref(null)
    const turmasDaDisciplina = ref([

    {
        id: 101,
        codigo: 'INF2025-1A',
        ano: 2025,
        semestre: 1,
        curso: 'Informática'
    },
    {
        id: 102,
        codigo: 'INF2025-1B',
        ano: 2025,
        semestre: 1,
        curso: 'Biocombustiveis'

    },
    {
        id: 103,
        codigo: 'INF2025-2A',
        ano: 2025,
        semestre: 2,
        curso: 'Eletromecanica'

    }

    ])

    async function abrirTurmas(item) {
    disciplinaSelecionada.value = item
    dialogTurmas.value = true

    try {
        const todas = await turmadisciplina_lista_all()
        turmasDaDisciplina.value = todas.filter(t =>
        t.disciplina?.id === item.id
        )
    } catch (error) {
        console.error('Erro ao buscar turmas da disciplina:', error)
    }
    }
    function atualizarDisciplina() {
    disciplina_lista_all()
        .then(resp => {
        itens.value = resp

            const cargaHorariasUnicas = [...new Set(resp.map(disciplina => disciplina.cargaHoraria))];
        
            cargaHoraria.value = cargaHorariasUnicas.sort((a, b) => a - b).map(c => ({
                id: c,
                label: `${c} horas`
            }));
        })
        .catch(err => {
        console.error('Erro ao atualizar disciplina:', err)
        });
    }

    function atualizarprofessor() {
    professor_lista_all()
        .then(resp => {
        professor.value = resp
            .sort((a, b) => a.nome.localeCompare(b.nome))
            .map(professor => ({
            id: professor.id,
            label: `${professor.nome}`
            }));
        })
        .catch(err => {
        console.error('Erro ao carregar professor:', err)
        })
    }

    function editItem(item) {
        router.push(`/editdisciplina/${item.id}`)
    }

    async function deleteItem(item) {
        if (confirm(`Tem certeza que deseja deletar a disciplina: ${item.nome}?`)) {
            try {
                await disciplina_delete(item.id)
                atualizarDisciplina()
            } catch (err) {
                console.error('Erro ao deletar:', err)
            }
        }
    }

    function viewItem(item) {
        router.push(`/viewdisciplina/${item.id}`)
    }

    function handleNew() {
        router.push('/newdisciplina')
    }

    function limparFiltros() {
        search.value = ''
        selectProfessor.value = null
        selectCargaHoraria.value = null
    }
</script>