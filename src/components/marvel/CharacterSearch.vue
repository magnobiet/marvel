<template>

	<v-text-field v-model="search" :append-icon="'search'" label="Search character name" @input="doSearch"/>

</template>

<script>

	import {
		mapActions
	} from 'vuex';

	import {
		debounce
	} from 'lodash';

	export default {
		name: 'MarvelCharacterSearch',
		data: () => ({
			search: ''
		}),
		methods: {
			...mapActions([
				'FETCH_CHARACTERS'
			]),
			doSearch: debounce(function() {

				if (this.search !== '') {

					this.FETCH_CHARACTERS({
						filter: {
							nameStartsWith: this.search,
							orderBy: 'name'
						}
					});

				} else {

					this.FETCH_CHARACTERS({
						page: 1
					});

				}

			}, 1000)
		}
	};

</script>
