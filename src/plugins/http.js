import axios from 'axios';

export default function install(Vue, options) {

	Object.defineProperties(Vue.prototype, {
		$http: {
			get: () => axios.create(options)
		}
	});

}
