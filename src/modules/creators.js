import qs from 'query-string';

export default {
	state: {
		data: [],
	},
	getters: {
		creators: state => state.data,
	},
	mutations: {
		RECEIVE_CREATORS(state, {
			creators,
		}) {
			state.data = creators;
		},
	},
	actions: {

		async FETCH_CREATORS({
			commit,
		}) {

			const route = `creators?${qs.stringify(this.getters.apiQuery)}`;

			const {
				data,
			} = await this._vm.$http.get(route);

			commit('RECEIVE_CREATORS', {
				creators: data.data,
			});

		},

	},
};
