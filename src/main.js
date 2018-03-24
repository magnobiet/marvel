// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';

import App from './App';
import store from './store';
import router from './router';
import EventBus from './plugins/event-bus';
import Http from './plugins/http';

Vue.config.productionTip = false;

// Plugins
Vue.use(EventBus);
Vue.use(Http, {
	baseURL: '/api/',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json; charset=utf-8'
	}
});
Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	router,
	template: '<App/>',
	components: {
		App
	},
});
