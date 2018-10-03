import qs from 'query-string';

export default {
	state: {
		data: [],
	},
	getters: {
		series: state => state.data,
	},
	mutations: {
		RECEIVE_SERIES(state, {
			series,
		}) {
			state.data = series;
		},
	},
	actions: {

		async FETCH_SERIES({
			commit,
		}) {

			const route = `series?${qs.stringify(this.getters.apiQuery)}`;

			const {
				data,
			} = await this._vm.$http.get(route);

			commit('RECEIVE_SERIES', {
				series: data.data,
			});

		},

	},
};
