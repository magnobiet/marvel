<template>

	<v-toolbar color="red" dark clipped-left app>

		<v-toolbar-side-icon @click.native="toggleDrawer"/>

		<v-toolbar-title>{{ company }}</v-toolbar-title>

		<v-spacer/>

	</v-toolbar>

</template>

<script>

	export default {
		name: 'PageToolbar',
		props: {
			company: {
				type: String,
				default: 'Application Name'
			}
		},
		data: () => ({}),
		methods: {
			toggleDrawer() {
				this.$bus.$emit('drawer:toggle');
			}
		}
	};

</script>

<style lang="scss" scoped>
v-toolbar{
	color: red;
}
	.toolbar__title {
		font-family: 'Product Sans', Avenir, Helvetica, Arial, sans-serif;
	}

</style>