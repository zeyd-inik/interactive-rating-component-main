import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/thank-you',
            name: 'thankYouView',
            component: () => import('../views/ThankYouView.vue'), // Lazy load the view
        },
    ],
});

export default router;
