import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'
import ArtworksView from '@/views/ArtworksView.vue'
import DocumentView from '@/views/DocumentView.vue'
import LandscapeView from '@/views/LandscapeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import RedirectView from '@/views/RedirectView.vue'

const routes = [
	{ path: '/', component: LandscapeView },
	{ path: '/redirect', component: RedirectView },
	{ path: '/about', component: AboutView },
	{ path: '/docs', component: DocumentView },
	{ path: '/artworks', component: ArtworksView },
	{
		path: '/:catchAll(.*)',
		name: 'not-found',
		component: NotFoundView,
	},
]

export default createRouter({
	history: createWebHistory(),
	routes,
})
