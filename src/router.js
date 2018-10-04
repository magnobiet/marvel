import Vue from 'vue';
import Router from 'vue-router';

import PageNotFound from '@/components/pages/PageNotFound.vue';
import PageDashboard from '@/components/pages/PageDashboard.vue';
import PageMarvelCharacters from '@/components/pages/PageMarvelCharacters.vue';
import PageMarvelCharacter from '@/components/pages/PageMarvelCharacter.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
		path: '*',
		component: PageNotFound,
	}, {
		path: '/',
		name: 'PageDashboard',
		component: PageDashboard,
	}, {
		path: '/character',
		name: 'PageMarvelCharacters',
		component: PageMarvelCharacters,
	}, {
		path: '/character/:id',
		name: 'PageMarvelCharacter',
		component: PageMarvelCharacter,
	}],
});
