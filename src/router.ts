import {createRouter, createWebHistory} from 'vue-router'

import LoginContainer from "./container/LoginContainer.vue";

const routes = [
    { path: '/', component: LoginContainer },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router