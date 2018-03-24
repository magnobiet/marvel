<template>

	<v-container fluid grid-list-md>

		<v-layout row wrap>

			<v-flex xs12>

				<v-text-field label="Search character name" v-model="search" :append-icon="'search'" @input="doSearch"></v-text-field>

			</v-flex>

			<v-flex xs12 class="text-xs-center" v-if="!totalPages">

			    <v-progress-circular indeterminate :size="50" color="amber"></v-progress-circular>

			</v-flex>

			<v-flex xs3 v-else v-for="character in characters.results" :key="character.name">

				<marvel-character-card :character="character"></marvel-character-card>

			</v-flex>

			<v-flex xs12>

				<v-pagination :length="totalPages" :total-visible="10" v-if="totalPages" v-model="page" @input="paginate"></v-pagination>

			</v-flex>

		</v-layout>

	</v-container>

</template>

<script>

	import {
		mapGetters,
		mapActions
	} from 'vuex';

	import {
		debounce
	} from 'lodash';

	import MarvelCharacterCard from '../marvel/CharacterCard';

	export default {
		name: 'PageMarvelCharacters',
		data: () => ({
			page: 1,
			search: ''
		}),
		computed: {
			...mapGetters([
				'characters'
			]),
			totalPages: {
				get: function() {
					return Math.ceil(this.characters.total / 20) || 0;
				}
			}
		},
		components: {
			MarvelCharacterCard
		},
		methods: {
			...mapActions([
				'FETCH_CHARACTERS'
			]),
			paginate(page) {

				this.FETCH_CHARACTERS({
					page
				});

			},
			doSearch: debounce(function() {

				if (this.search !== '') {

					this.FETCH_CHARACTERS({
						filter: {
							nameStartsWith: this.search,
							orderBy: 'name'
						}
					});

				} else {

					this.FETCH_CHARACTERS({
						page: 1
					});

				}

			}, 1000)
		},
		created() {

			this.FETCH_CHARACTERS();

		}
	};

</script>
