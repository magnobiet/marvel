<template>

	<v-footer class="grey darken-3" app inset>

		<v-layout row wrap justify-center>

			<v-flex xs12 py-3 text-xs-center white--text>
				&copy;{{ year }}
				<span v-if="company"> — <strong>{{ company }}</strong></span>
			</v-flex>

		</v-layout>

	</v-footer>

</template>

<script>

	export default {
		name: 'AppFooter',
		props: {
			company: {
				type: String,
				default: null
			},
			year: {
				type: String,
				default: new Date().getFullYear().toString()
			}
		}
	};

</script>

<style lang="scss" scoped>
v-footer{
    height: auto;
}
</style>
