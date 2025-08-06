import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import BurguersView from '../views/BurguersView.vue'
import HotDogsView from '../views/HotDogsSalchipapasView.vue'
import BebidasView from '../views/BebidasView.vue'
import ExtrasView from '../views/ExtrasView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/hamburguesas', component: BurguersView },
    { path: '/hotdogs', component: HotDogsView },
    { path: '/bebidas', component: BebidasView },
    { path: '/extras', component: ExtrasView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
