<template>

	<v-container fluid grid-list-md>

		<v-layout row wrap>

			<v-flex xs12>

				<marvel-character-search/>

			</v-flex>

			<v-flex v-if="characters.results && !characters.results.length" xs12 class="text-xs-center">

				<v-alert :value="true" type="info">
					Nothing to see here...
				</v-alert>

			</v-flex>

			<v-flex v-for="character in characters.results" v-else :key="character.name" xs3>

				<marvel-character-card :character="character"/>

			</v-flex>

			<v-flex v-if="isLoading" xs12 class="text-xs-center">

				<v-progress-circular :size="50" indeterminate color="amber"/>

			</v-flex>

			<v-flex xs12>

				<v-pagination v-if="totalPages" :length="totalPages" :total-visible="10" v-model="page" @input="paginate"/>

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
		components: {
			MarvelCharacterCard,
			MarvelCharacterSearch
		},
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
		created() {

			this.loading(true);

			this.FETCH_CHARACTERS().then(() => this.loading(false), () => this.loading(false));

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
		}
	};

</script>
