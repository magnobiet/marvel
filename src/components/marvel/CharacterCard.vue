<template>

	<v-card v-if="!mobile">

		<v-card-media :src="character.image" height="200px">

			<v-container fill-height fluid>

				<v-layout fill-height>

					<v-flex xs12 align-end flexbox>
						<span class="headline white--text">{{ character.name }}</span>
					</v-flex>

				</v-layout>

			</v-container>

		</v-card-media>

		<v-card-actions>

			<v-spacer/>

			<v-btn :to="{ name: 'PageMarvelCharacter', params: { id: character.id }}" flat>
				See details
			</v-btn>

		</v-card-actions>

	</v-card>

	<v-card v-else>
		<v-card-media :src="character.image" height="200px">

			<v-container fill-height fluid>

				<v-layout fill-height>

					<v-flex xs12 align-end flexbox>
						<span class="headline white--text">{{ character.name }}</span>
					</v-flex>

				</v-layout>

			</v-container>

		</v-card-media>

		<v-card-actions>

			<v-spacer/>

			<v-btn :to="{ name: 'PageMarvelCharacter', params: { id: character.id }}" flat>
				See details
			</v-btn>

		</v-card-actions>
	</v-card>

</template>

<script>

	export default {
		name: 'MarvelCharacterCard',
		props: {
			character: {
				type: Object,
				default: Object
			}
		}
	};

</script>
