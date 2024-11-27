import { createRouter, createWebHistory} from "vue-router";
import HomePage from '../views/HomePage.vue';
import LaunchDetailsPage from "@/views/LaunchDetailsPage.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: '/launch/:id',
        name: "LaunchDetails",
        component: LaunchDetailsPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;