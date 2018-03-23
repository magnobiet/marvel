<template>

	<v-card>

		<v-card-media :src="character.thumbnail.path + '.' + character.thumbnail.extension" height="200px">

			<v-container fill-height fluid>

				<v-layout fill-height>

					<v-flex xs12 align-end flexbox>
						<span class="headline white--text">{{ character.name }}</span>
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

</template>

<script>

	export default {
		name: 'MarvelCharacterCard',
		props: {
			character: {
				type: Object,
				default: {}
			}
		}
	};

</script>
