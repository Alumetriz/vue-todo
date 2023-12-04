import HomePage from "@/Pages/HomePage.vue";
import {createRouter, createWebHistory} from "vue-router";
import EditTaskPage from "@/Pages/EditTaskPage.vue";
import UserProfilePage from "@/Pages/UserProfilePage.vue";
import CalendarPage from "@/Pages/CalendarPage.vue";
import FocusPage from "@/Pages/FocusPage.vue";

const routes = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/UserProfile",
        component: UserProfilePage,
    },
    {
        path: "/CalendarPage",
        component: CalendarPage,
    },
    {
        path: "/FocusPage",
        component: FocusPage,
    },
    {
        path: "/EditTask",
        component: EditTaskPage,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;