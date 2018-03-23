import qs from 'query-string';

export default {
	state: {
		data: []
	},
	getters: {
		characters: (state) => state.data
	},
	mutations: {
		RECEIVE_CHARACTERS(state, payload) {
			state.data = payload.characters;
		}
	},
	actions: {

		async FETCH_CHARACTERS(context, payload) {

			const queryString = {
				...this.getters.apiQuery,
				...this.getters.apiPaginate
			};

			if (payload && payload.page) {
				queryString.offset = (payload.page - 1) * 20;
			}

			const {
				data
			} = await this._vm.$http.get(`characters?${ qs.stringify(queryString) }`);

			context.commit('RECEIVE_CHARACTERS', {
				characters: data.data
			});

		}

	}
};
