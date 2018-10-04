import axios from 'axios';

export default {
	install(Vue, options) {

		const Http = (Vue, options) => {

			const Axios = axios.create(options);

			Axios.interceptors.request.use((config) => {

				config.startTime = new Date().getTime();

				Vue.$bus.$emit('loader:toggle', true);

				return config;

			}, error => Promise.reject(error));

			Axios.interceptors.response.use((response) => {

				response.config.endTime = new Date().getTime();

				Vue.$bus.$emit('loader:toggle', false);

				return response;

			}, (error) => {

				Vue.$bus.$emit('loader:toggle', false);

				return Promise.reject(error);

			});

			return Axios;

		};

		Object.defineProperties(Vue.prototype, {
			$http: {
				get: () => Http(Vue.prototype, options),
			},
		});

	},
};
