// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueProgressBar from 'vue-progressbar';

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
Vue.use(VueProgressBar);

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
