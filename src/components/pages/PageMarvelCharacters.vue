<template>

	<v-container fluid grid-list-md>

		<v-layout row wrap>

			<v-flex xs3 v-for="character in characters.results" :key="character.name">

				<MarvelCharacterCard :character="character"></MarvelCharacterCard>

			</v-flex>

			<v-pagination :length="totalPages" :total-visible="10" v-model="page" @input="paginate"></v-pagination>

		</v-layout>

	</v-container>

</template>

<script>

	import {
		mapGetters,
		mapState,
		mapActions
	} from 'vuex';

	import MarvelCharacterCard from '../marvel/CharacterCard';

	export default {
		name: 'PageMarvelCharacterCard',
		props: {
			// TODO
		},
		data: () => ({
			page: 1
		}),
		computed: {
			...mapGetters([
				'characters'
			]),
			...mapState([
				// TODO
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
		watch: {
			// TODO
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
		beforeCreate() {
			// TODO
		},
		created() {

			this.FETCH_CHARACTERS();

		},
		beforeMount() {
			// TODO
		},
		mounted() {
			// TODO
		},
		beforeUpdate() {
			// TODO
		},
		updated() {
			// TODO
		},
		beforeDestroy() {
			// TODO
		},
		destroyed() {
			// TODO
		}
	};

</script>

<style lang="scss" scoped>

	// TODO

</style>
