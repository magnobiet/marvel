<template>

	<v-container fluid grid-list-md>

		<v-layout row wrap>

			<v-flex xs12 md6 offset-md3>

				<v-card>

					<v-img src="https://i.annihil.us/u/prod/misc/marvel.svg" height="200px"/>

					<v-card-text>
						<p>The Marvel Comics API allows developers everywhere to access information about Marvel's vast library of comics—from what's coming up, to 70 years ago.</p>
					</v-card-text>

					<v-card-actions>

						<v-spacer/>

						<v-btn href="https://developer.marvel.com/documentation/getting_started" target="_blank">
							API Documentation
						</v-btn>

						<v-btn href="https://developer.marvel.com/docs" target="_blank">
							Test Calls
						</v-btn>

					</v-card-actions>

				</v-card>

			</v-flex>

		</v-layout>

	</v-container>

</template>

<script>

	export default {
		name: 'PageDashboard'
	};

</script>
