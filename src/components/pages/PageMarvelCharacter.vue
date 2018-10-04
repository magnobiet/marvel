<template>

	<v-container fluid grid-list-sm>

		<v-layout row wrap>

			<v-flex xs12 sm12>

				<v-card>

					<v-card-title primary-title>

						<div class="headline">
							{{ character.name }} <small class="body-1 grey--text">#{{ character.id }}</small>
						</div>

					</v-card-title>

					<v-parallax :src="character.image"/>

					<v-card-text>
						<p>{{ character.description }}</p>
					</v-card-text>

					<v-card-actions>

						<v-btn :href="character.urlDetail" flat target="_blank">
							More details
						</v-btn>

						<v-spacer/>

					</v-card-actions>

				</v-card>

			</v-flex>

			<v-flex d-flex xs12 sm6>

				<marvel-character-comics-card v-if="character.comics && character.comics.items && character.comics.items.length" :comics="character.comics"/>

			</v-flex>

			<v-flex d-flex xs12 sm6>

				<marvel-character-stories-card v-if="character.stories && character.stories.items && character.stories.items.length" :stories="character.stories"/>

			</v-flex>

		</v-layout>

	</v-container>

</template>

<script>

	import {
		mapGetters,
		mapActions
	} from 'vuex';

	import MarvelCharacterComicsCard from '../marvel/CharacterComicsCard';
	import MarvelCharacterStoriesCard from '../marvel/CharacterStoriesCard';

	export default {
		name: 'PageMarvelCharacter',
		components: {
			MarvelCharacterComicsCard,
			MarvelCharacterStoriesCard
		},
		data: () => ({
			show: false
		}),
		computed: {
			...mapGetters([
				'character'
			])
		},
		created() {

			this.FETCH_CHARACTER({
				id: this.$route.params.id
			});

		},
		methods: {
			...mapActions([
				'FETCH_CHARACTER'
			])
		},
	};

</script>
