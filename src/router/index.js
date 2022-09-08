import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/views/HomePage')
    },
    {
        path: '/page',
        name: 'page',
        component: () => import('@/views/PageTwo')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router