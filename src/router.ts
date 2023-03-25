import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [

        // HOME - PRESENTATION
        {
            path: '/',
            name: 'home',
            components: {
                default: () => import('./views/header/index.vue'),
                body: () => import('./views/presentation/index.vue')
            }
        },

        // PORTFOLIO
        {
            path: '/portfolio',
            name: 'portfolio',
            components: {
                default: () => import('./views/header/index.vue'),
                body: () => import('./views/presentation/index.vue')
            },
            meta: {
                requiresAuth: true,
                inventory: true
            },
        },

        // REDIRECTS
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            components: {
                default: () => import('./views/header/index.vue'),
                body: () => import('./views/errors/notFound.vue')
            }
        },
    ]
});

export default router;
