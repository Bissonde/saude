<template >
	<main id="historic-page" style="position:relative;width: 85%;">
	<v-card>
	  <v-card-title>
		Historico dos Pacientes
		<v-spacer></v-spacer>
		<v-text-field
		  v-model="search"
		  append-icon="mdi-magnify"
		  label="Search"
		  single-line
		  hide-details
		></v-text-field>
	  </v-card-title>
	  <v-data-table
	  	responsive
		:headers="headers"
		:items="desserts"
		:search="search"
	  ></v-data-table>
	</v-card>
</main>
  </template>
  <script>
	export default {
	  data () {
		return {
		  search: '',
		  headers: [
			{
			  align: 'start',
			  key: 'bi',
			  sortable: false,
			  title: 'BI',
			},
			{ key: 'name', title: 'Nome Completo' },
			{ key: 'age', title: 'Idade' },
			{ key: 'gender', title: 'Sexo' },
			{ key: 'address', title: 'Morada' },
			{ key: 'provenance', title: 'Proveniência' },
			{ key: 'service', title: 'Serviço' },
			{ key: 'start_date_diagnostic', title: 'Diagnóstico de entrada' },
			{ key: 'end_date_diagnostic', title: 'Diagnóstico de saida' },
			{ key: 'start_date', title: 'Data de entrada' },
			{ key: 'end_date', title: 'Data de saida' },
			{ key: 'exams', title: 'Exames' },
			{ key: 'complementary_exams', title: 'Exames Complementares' },
			{ key: 'type_of_high', title: 'Tipo de alta' },
			{ key: 'bed_number', title: 'Numero da cama' },
			{ key: 'vaccines', title: 'Vacinas' },
			{ key: 'causes_of_occurrences_to_mergency_anks', title: 'Causas de ocorrências aos Bancos de Urgências' },
			{ key: 'surgical_procedures', title: 'Procedimentos cirúrgicos' },

		  ],
		  desserts: [
			{
			  bi: 'Frozen Yogurt',
			  name: 159,
			  age: 6.0,
			  gender: 24,
			  address: 4.0,
			  provenance: 1,

			  service: 'Frozen Yogurt',
			  start_date_diagnostic: 159,
			  end_date_diagnostic: 6.0,
			  start_date: 24,
			  end_date: 4.0,
			  exams: 1,

			  complementary_exams: 'Frozen Yogurt',
			  type_of_high: 159,
			  bed_number: 6.0,
			  vaccines: 24,
			  causes_of_occurrences_to_mergency_anks: 4.0,
			  surgical_procedures: 1,
			},
		  ],
		}
	  },
	}
  </script>