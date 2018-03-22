<template>

	<v-container fluid grid-list-md>

		<v-layout row wrap>

			<v-flex v-bind="{ [`xs${card.flex}`]: true }" v-for="card in cards" :key="card.title">

				<v-card>

					<v-card-media :src="card.src" height="200px">

						<v-container fill-height fluid>

							<v-layout fill-height>

								<v-flex xs12 align-end flexbox>
									<span class="headline white--text" v-text="card.title" />
								</v-flex>

							</v-layout>

						</v-container>

					</v-card-media>

					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn icon>
							<v-icon>favorite</v-icon>
						</v-btn>
						<v-btn icon>
							<v-icon>bookmark</v-icon>
						</v-btn>
						<v-btn icon>
							<v-icon>share</v-icon>
						</v-btn>
					</v-card-actions>

				</v-card>

			</v-flex>

		</v-layout>

	</v-container>

</template>

<script>

	import {
		mapGetters,
		mapState,
		mapActions
	} from 'vuex';

	export default {
		name: 'PageDashboard',
		props: {
			// TODO
		},
		data: () => ({
			cards: [
				{ title: 'Lorem ipsum dolor', src: 'https://vuetifyjs.com/static/doc-images/cards/house.jpg', flex: 3 },
				{ title: 'Sit amet, consectetur', src: 'https://vuetifyjs.com/static/doc-images/cards/road.jpg', flex: 3 },
				{ title: 'Adipisicing elit', src: 'https://vuetifyjs.com/static/doc-images/cards/plane.jpg', flex: 3 }
			]
		}),
		computed: {
			...mapGetters([
				// TODO
			]),
			...mapState([
				// TODO
			]),
			prop: {
				get: () => 'computed `prop` getter',
				set: () => 'computed `prop` setter'
			}
		},
		components: {
			// TODO
		},
		watch: {
			// TODO
		},
		methods: {
			...mapActions([
				// TODO
			])
		},
		beforeCreate() {
			// TODO
		},
		created() {
			// TODO
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
