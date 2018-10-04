import qs from 'query-string';

function formatResult(character) {

	character.urlDetail = character.urls.filter(url => url.type === 'detail')[0].url.replace('http:', 'https:');
	character.description = character.description ? character.description : 'No description for this character.';
	character.image = `${character.thumbnail.path}.${character.thumbnail.extension}`.replace('http:', 'https:');

	return character;

}

export default {
	state: {
		list: {},
		detail: {},
	},
	getters: {
		characters: state => state.list,
		character: state => state.detail,
	},
	mutations: {
		RECEIVE_CHARACTERS(state, payload) {
			state.list = payload;
		},
		RECEIVE_CHARACTER(state, payload) {
			state.detail = payload;
		},
	},
	actions: {
		CLEAR_CHARACTERS(context) {
			context.commit('RECEIVE_CHARACTERS', {});
		},
		async FETCH_CHARACTERS(context, payload = {}) {

			const queryString = {
				...this.getters.apiQuery,
				...this.getters.apiPaginate,
			};

			if (payload.filter) {

				queryString.orderBy = payload.filter.orderBy;
				queryString.nameStartsWith = payload.filter.nameStartsWith;

			}

			if (payload.page) {
				queryString.offset = (payload.page - 1) * this.getters.apiPaginate.limit;
			}

			const {
				data,
			} = await this._vm.$http.get(`characters?${qs.stringify(queryString)}`);

			data.data.results = data.data.results.map(character => formatResult(character));

			context.commit('RECEIVE_CHARACTERS', data.data);

		},
		async FETCH_CHARACTER(context, payload) {

			const queryString = {
				...this.getters.apiQuery,
				...this.getters.apiPaginate,
			};

			const {
				data,
			} = await this._vm.$http.get(`characters/${payload.id}?${qs.stringify(queryString)}`);

			data.data.results = data.data.results.map(character => formatResult(character));

			context.commit('RECEIVE_CHARACTER', data.data.results[0]);

		},
	},
};
