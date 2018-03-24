<template>

	<v-flex xs12 sm12>

		<v-card>

			<v-card-title primary-title>

				<div class="headline">
					{{ character.name }} <small class="body-1 grey--text">#{{ character.id }}</small>
				</div>

			</v-card-title>

			<v-card-media :src="character.image" height="400px"></v-card-media>

			<v-card-text>
				<p>{{ character.description }}</p>
			</v-card-text>

			<v-card-actions>

				<v-btn flat :href="character.urlDetail" target="_blank">
					More details
				</v-btn>

				<v-spacer></v-spacer>

			</v-card-actions>

		</v-card>

	</v-flex>

</template>

<script>

	import {
		mapGetters,
		mapActions
	} from 'vuex';

	export default {
		name: 'PageMarvelCharacter',
		data: () => ({
			show: false
		}),
		computed: {
			...mapGetters([
				'character'
			])
		},
		methods: {
			...mapActions([
				'FETCH_CHARACTER'
			])
		},
		created() {

			this.FETCH_CHARACTER({
				id: this.$route.params.id
			});

		}
	};

</script>
