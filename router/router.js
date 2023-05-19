import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/pages/Home.vue';
import Explore from '../src/pages/Explore.vue';
import Item from '../src/pages/Item.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/explore',
        name: 'Explore',
        component: Explore,
    },
    {
        path: '/explore/:slug',
        name: 'explore item single page',
        component: Item,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
