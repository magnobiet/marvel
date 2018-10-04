import qs from 'query-string';

export default {
	state: {
		data: [],
	},
	getters: {
		stories: state => state.data,
	},
	mutations: {
		RECEIVE_STORIES(state, {
			stories,
		}) {
			state.data = stories;
		},
	},
	actions: {

		async FETCH_STORIES({
			commit,
		}) {

			const route = `stories?${qs.stringify(this.getters.apiQuery)}`;

			const {
				data,
			} = await this._vm.$http.get(route);

			commit('RECEIVE_STORIES', {
				stories: data.data,
			});

		},

	},
};
