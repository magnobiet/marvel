import Vue from 'vue';

const bus = new Vue();

export default {
	install(Vue) {

		Object.defineProperties(Vue.prototype, {
			$bus: {
				get: () => bus
			}
		});

	}
};
