<template>

	<div id="app">

		<v-app id="inspire">

			<app-navigation/>

			<app-toolbar :company="company"/>

			<v-content>

				<v-container fluid fill-height>

					<v-layout>

						<router-view/>

					</v-layout>

				</v-container>

			</v-content>

			<app-footer :company="company"/>

		</v-app>

		<app-loader/>

	</div>

</template>

<script>

	import AppLoader from '@/components/AppLoader';
	import AppToolbar from '@/components/AppToolbar';
	import AppNavigation from '@/components/AppNavigation';
	import AppFooter from '@/components/AppFooter';

	export default {
		name: 'App',
		components: {
			AppLoader,
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

	@import '~vuetify/dist/vuetify.min.css';

	body {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}

</style>
