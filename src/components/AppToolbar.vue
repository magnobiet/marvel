<template>

	 <v-toolbar color="red" dark clipped-left app>

		<v-toolbar-side-icon @click.native="toggleDrawer"></v-toolbar-side-icon>

		<v-toolbar-title>{{ company }}</v-toolbar-title>

		<v-spacer></v-spacer>

	</v-toolbar>

</template>

<script>

	export default {
		name: 'PageToolbar',
		data: () => ({}),
		props: {
			company: {
				type: String,
				default: 'Application Name'
			}
		},
		methods: {
			toggleDrawer() {
				this.$bus.$emit('drawer:toggle');
			}
		}
	};

</script>

<style lang="scss" scoped>

	.toolbar__title {
		font-family: 'Product Sans', Avenir, Helvetica, Arial, sans-serif;
	}

</style>
