<template>

	<v-card>

		<v-card-title primary-title>

			<div class="headline">Comics</div>

		</v-card-title>

		<v-list>

			<v-list-tile v-for="comic in comics.items" :key="comic.resourceURI" avatar>

				<v-list-tile-content>
					<v-list-tile-title>{{ comic.name }}</v-list-tile-title>
				</v-list-tile-content>

			</v-list-tile>

		</v-list>

	</v-card>

</template>

<script>

	export default {
		name: 'MarvelCharacterComicsCard',
		props: {
			comics: {
				type: Object,
				default: Object
			}
		}
	};

</script>
