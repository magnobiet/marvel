import qs from 'query-string';

export default {
	state: {
		data: [],
	},
	getters: {
		comics: state => state.data,
	},
	mutations: {
		RECEIVE_COMICS(state, {
			comics,
		}) {
			state.data = comics;
		},
	},
	actions: {

		async FETCH_COMICS({
			commit,
		}) {

			const route = `comics?${qs.stringify(this.getters.apiQuery)}`;

			const {
				data,
			} = await this._vm.$http.get(route);

			commit('RECEIVE_COMICS', {
				comics: data.data,
			});

		},

	},
};
