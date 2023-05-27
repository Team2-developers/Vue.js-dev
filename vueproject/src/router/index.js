import { createRouter, createWebHistory } from 'vue-router'
import FrontPage from '@/components/pages/FrontPage'
import NotificationPanel from '@/components/pages/NotificationPanel'
import ProfilePage from '@/components/pages/ProfilePage'

const routes = [
    { path: '/', name: 'FrontPage', component: FrontPage },
    { path: '/notificationPanel', name: 'NotificationPanel', component: NotificationPanel },
    { path: '/profilePage', name: 'ProfilePage', component: ProfilePage }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router