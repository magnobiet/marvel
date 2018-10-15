<template>

	<v-container grid-list-md>

		<v-layout row wrap>

			<v-flex xs12 md6 offset-md3>

				<v-card>

					<v-img v-if="!mobile" src="https://i.annihil.us/u/prod/misc/marvel.svg" height="200px"/>
					<v-img v-else contain src="https://i.annihil.us/u/prod/misc/marvel.svg" height="200px"/>

					<v-card-text>
						<p>The Marvel Comics API allows developers everywhere to access information about Marvel's vast library of comics—from what's coming up, to 70 years ago.</p>
					</v-card-text>

					<v-card-actions>

						<v-spacer/>

						<v-btn xs6 href="https://developer.marvel.com/documentation/getting_started" target="_blank">
							API Documentation
						</v-btn>

						<v-btn xs6 href="https://developer.marvel.com/docs" target="_blank">
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
		name: 'PageDashboard',
		data: () => {
			return{
				window: {
					width: 0,
					height: 0
						}
			};
		},
		computed: {
			mobile() {
				console.log(this.window.height);
				return (this.window.width < 600);
			}
		},
		created() {
			window.addEventListener('resize', this.handleResize);
			this.handleResize();
		},
		destroyed() {
			window.removeEventListener('resize', this.handleResize);
		},
		methods: {
			handleResize() {
				this.window.width = window.innerWidth;
				this.window.height = window.innerHeight;
			}
		},
	};

</script>

 <style lang="scss" scoped>
 @import 'src/assets/style.scss';
 </style>
