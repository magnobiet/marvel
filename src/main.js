import Vue from 'vue';
import Vuetify from 'vuetify';

import App from './App.vue';
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
		Accept: 'application/json',
		'Content-Type': 'application/json; charset=utf-8',
	},
});
Vue.use(Vuetify);

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
