import { createApp } from 'vue'
import {createRouter, createWebHistory} from "vue-router";
import './style.css'
import App from './App.vue'
import LandscapeView from "./views/LandscapeView.vue";
import Redirect from "./views/RedirectView.vue";
import AboutView from "./views/AboutView.vue";
import DocumentView from "./views/DocumentView.vue";
const routes = [
    { path: '/', component: LandscapeView },
    { path: '/redirect', component: Redirect,},
    { path: '/about', component: AboutView },
    { path: '/docs', component: DocumentView}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
