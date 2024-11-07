import { createMemoryHistory, createRouter } from 'vue-router'

import LoginContainer from "./container/LoginContainer.vue";

const routes = [
    { path: '/', component: LoginContainer },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router