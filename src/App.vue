<template>

	<div id="app">

		<v-app id="inspire">

			<app-navigation></app-navigation>

			<app-toolbar :company="company"></app-toolbar>

			<v-content>

				<v-container fluid fill-height>

					<v-layout>

						<router-view></router-view>

					</v-layout>

				</v-container>

			</v-content>

			<app-footer :company="company"></app-footer>

		</v-app>

	</div>

</template>

<script>

	import AppToolbar from '@/components/AppToolbar';
	import AppNavigation from '@/components/AppNavigation';
	import AppFooter from '@/components/AppFooter';

	export default {
		name: 'App',
		components: {
			AppToolbar,
			AppNavigation,
			AppFooter
		},
		computed: {
			company: {
				get: () => 'Marvel'
			}
		}
	};

</script>

<style lang="scss">

	@import '~vuetify/dist/vuetify.min';

	body {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}

</style>
