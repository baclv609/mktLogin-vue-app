import Index from "../views/index.vue";
import { createRouter, createWebHistory } from "vue-router";
import Profile from "@/views/profile.vue";
import IndexDashboard from "@/views/index.vue";

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: () => import("@/views/index.vue"),
    },
    {
        path: '/',
        name: 'profile',
        component: () => import("@/views/index.vue"),
    },
    {
        path: '/api-docs',
        name: 'api-docs',
        component: () => import('@/views/api-docs.vue'),
    },
    {
        path: '/buy-package',
        name: 'buy-package',
        component: () => import('@/views/buy-package.vue'),
    },
    {
        path: '/recharge',
        name: 'recharge',
        component: () => import('@/views/recharge.vue'),
    }
]

const routers = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default routers;
