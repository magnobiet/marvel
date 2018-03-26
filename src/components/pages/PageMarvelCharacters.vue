<template>

	<v-container fluid grid-list-md>

		<v-layout row wrap>

			<v-flex xs12>

				<marvel-character-search></marvel-character-search>

			</v-flex>

			<v-flex xs12 class="text-xs-center" v-if="characters.results && !characters.results.length">

				 <v-alert type="info" :value="true">
				 	Nothing to see here...
				 </v-alert>

			</v-flex>

			<v-flex xs3 v-else v-for="character in characters.results" :key="character.name">

				<marvel-character-card :character="character"></marvel-character-card>

			</v-flex>

			<v-flex xs12 class="text-xs-center" v-if="isLoading">

				<v-progress-circular indeterminate :size="50" color="amber"></v-progress-circular>

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

	import MarvelCharacterCard from '../marvel/CharacterCard';
	import MarvelCharacterSearch from '../marvel/CharacterSearch';

	export default {
		name: 'PageMarvelCharacters',
		data: () => ({
			page: 1,
			isLoading: false
		}),
		computed: {
			...mapGetters([
				'apiPaginate',
				'characters'
			]),
			totalPages: {
				get() {
					return Math.ceil(this.characters.total / this.apiPaginate.limit) || 0;
				}
			}
		},
		components: {
			MarvelCharacterCard,
			MarvelCharacterSearch
		},
		methods: {
			...mapActions([
				'FETCH_CHARACTERS'
			]),
			loading(status) {
				this.isLoading = status;
			},
			paginate(page) {

				this.loading(true);

				this.FETCH_CHARACTERS({
					page
				}).then(() => {

					this.loading(false);
					window.scrollTo(0, 0);

				}, () => this.loading(false));

			}
		},
		created() {

			this.loading(true);

			this.FETCH_CHARACTERS().then(() => this.loading(false), () => this.loading(false));

		}
	};

</script>
