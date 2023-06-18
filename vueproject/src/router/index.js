import { createRouter, createWebHistory } from 'vue-router'
import FrontPage from '@/components/pages/FrontPage'
import GameDetails from '@/components/pages/GameDetails'
import GameDisplay from '@/components/pages/GameDisplay'
import GameModification from '@/components/pages/GameModification'
import GameSearch from '@/components/pages/GameSearch'
import GameStart from '@/components/pages/GameStart'
import Login from '@/components/pages/Login'
import NotificationPanel from '@/components/pages/NotificationPanel'
import ProfilePage from '@/components/pages/ProfilePage'
import ProfileUpdate from '@/components/pages/ProfileUpdate'
import Ranking from '@/components/pages/Ranking'
import Registration from '@/components/pages/Registration'
import RoomCreationComplete from '@/components/pages/RoomCreationComplete'
import RoomSearch from '@/components/pages/GameSearch'

const routes = [
    { path: '/', name: 'FrontPage', component: FrontPage },
    { path: '/gameDetails', name: 'GameDetails', component: GameDetails },
    { path: '/gameDisplay', name: 'GameDisplay', component: GameDisplay },
    { path: '/gameModification', name: 'GameModification', component: GameModification },
    { path: '/gameSearch', name: 'GameSearch', component: GameSearch },
    { path: '/gameStart', name: 'GameStart', component: GameStart },
    { path: '/login', name: 'Login', component: Login },
    { path: '/notificationPanel', name: 'NotificationPanel', component: NotificationPanel },
    { path: '/profilePage', name: 'ProfilePage', component: ProfilePage },
    { path: '/profileUpdate', name: 'ProfileUpdate', component: ProfileUpdate },
    { path: '/ranking', name: 'Ranking', component: Ranking },
    { path: '/registration', name: 'Registration', component: Registration },
    { path: '/roomCreationComplete', name: 'RoomCreationComplete', component: RoomCreationComplete },
    { path: '/roomSearch', name: 'RoomSearch', component: RoomSearch },
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