<template>

	<v-container fluid grid-list-md>

		<v-layout row wrap>

			<v-flex xs12 class="text-xs-center" v-if="!totalPages">

			    <v-progress-circular indeterminate :size="50" color="amber"></v-progress-circular>

			</v-flex>

			<v-flex xs3 v-else v-for="character in characters.results" :key="character.name">

				<MarvelCharacterCard :character="character"></MarvelCharacterCard>

			</v-flex>

			<v-pagination :length="totalPages" :total-visible="10" v-if="totalPages" v-model="page" @input="paginate"></v-pagination>

		</v-layout>

	</v-container>

</template>

<script>

	import {
		mapGetters,
		mapActions
	} from 'vuex';

	import MarvelCharacterCard from '../marvel/CharacterCard';

	export default {
		name: 'PageMarvelCharacterCard',
		data: () => ({
			page: 1
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

			}
		},
		created() {

			this.FETCH_CHARACTERS();

		}
	};

</script>
