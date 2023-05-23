import { createRouter, createWebHistory } from 'vue-router'
import FrontPage from '@/components/pages/FrontPage'
import NotificationPanel from '@/components/pages/NotificationPanel'

const routes = [
    { path: '/', name: 'FrontPage', component: FrontPage },
    { path: '/notificationPanel', name: 'NotificationPanel', component: NotificationPanel }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router