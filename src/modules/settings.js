export default {
	state: {
		api: {
			ts: 1,
			hash: 'aac009c4d968e2f0521b675c738c48a2',
			apikey: '2237aa0e743d49554a446471885cfba2',
		},
		paginate: {
			offset: 0,
			limit: 20,
		},
	},
	getters: {
		apiQuery: state => state.api,
		apiPaginate: state => state.paginate,
	},
	mutations: {},
	actions: {},
};
