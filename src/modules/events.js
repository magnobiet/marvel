import qs from 'query-string';

export default {
	state: {
		data: [],
	},
	getters: {
		events: state => state.data,
	},
	mutations: {
		RECEIVE_EVENTS(state, {
			events,
		}) {
			state.data = events;
		},
	},
	actions: {

		async FETCH_EVENTS({
			commit,
		}) {

			const route = `events?${qs.stringify(this.getters.apiQuery)}`;

			const {
				data,
			} = await this._vm.$http.get(route);

			commit('RECEIVE_EVENTS', {
				events: data.data,
			});

		},

	},
};
