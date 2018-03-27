<template>

	<v-card>

		<v-card-title primary-title>

			<div class="headline">Stories</div>

		</v-card-title>

		<v-list>

			<v-list-tile avatar v-for="story in stories.items" :key="story.resourceURI">

				<v-list-tile-content>
					<v-list-tile-title>{{ story.name }}</v-list-tile-title>
				</v-list-tile-content>

			</v-list-tile>

		</v-list>

	</v-card>

</template>

<script>

	export default {
		name: 'MarvelCharacterStoriesCard',
		props: {
			stories: {
				type: Object,
				default: {}
			}
		}
	};

</script>
