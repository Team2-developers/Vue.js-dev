import { createRouter, createWebHistory } from 'vue-router'
import FrontPage from '@/components/pages/FrontPage'
import NotificationPanel from '@/components/pages/NotificationPanel'
import ProfilePage from '@/components/pages/ProfilePage'
import GameDisplay from '@/components/pages/GameDisplay'
import GameSearch from '@/components/pages/GameSearch'

const routes = [
    { path: '/', name: 'FrontPage', component: FrontPage },
    { path: '/notificationPanel', name: 'NotificationPanel', component: NotificationPanel },
    { path: '/profilePage', name: 'ProfilePage', component: ProfilePage },
    { path: '/gameDisplay', name: 'GameDisplay', component: GameDisplay },
    { path: '/gameSearch', name: 'GameSearch', component: GameSearch }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
 scrollBehavior(to, from, savedPosition){
    if (savedPosition) {
      return savedPosition
    } else { 
      return {
        top: 0
      }
    }
  }

})

export default router