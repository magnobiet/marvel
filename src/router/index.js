import Vue from 'vue';
import Router from 'vue-router';

import PageNotFound from '@/components/pages/PageNotFound';
import PageDashboard from '@/components/pages/PageDashboard';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [{
		path: '*',
		component: PageNotFound
	}, {
		path: '/',
		name: 'PageDashboard',
		component: PageDashboard
	}]
});
