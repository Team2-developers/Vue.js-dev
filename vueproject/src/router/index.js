import { createRouter, createWebHistory } from 'vue-router'
import FrontPage from '@/components/pages/FrontPage'
import GameDetails from '@/components/pages/GameDetails'
import GameDisplay from '@/components/pages/GameDisplay'
import GameModification from '@/components/pages/GameModification'
import GameSearch from '@/components/pages/GameSearch'
import GameRanking from '@/components/pages/GameRanking'
import GameStart from '@/components/pages/GameStart'
import NotificationPanel from '@/components/pages/NotificationPanel'
import ProfilePage from '@/components/pages/ProfilePage'
import ProfileUpdate from '@/components/pages/ProfileUpdate'
import RoomCreationComplete from '@/components/pages/RoomCreationComplete'
import RoomSearch from '@/components/pages/GameSearch'
import UserLogin from '@/components/pages/UserLogin'
import UserRegistration from '@/components/pages/UserRegistration'
import RoomJoin from '@/components/pages/RoomJoin'

const routes = [
    { path: '/', name: 'FrontPage', component: FrontPage },
    { path: '/gameDetails', name: 'GameDetails', component: GameDetails },
    { path: '/gameDisplay', name: 'GameDisplay', component: GameDisplay },
    { path: '/gameModification', name: 'GameModification', component: GameModification },
    { path: '/gameSearch', name: 'GameSearch', component: GameSearch },
    { path: '/gameRanking', name: 'GameRanking', component: GameRanking },
    { path: '/gameStart', name: 'GameStart', component: GameStart },
    { path: '/notificationPanel', name: 'NotificationPanel', component: NotificationPanel },
    { path: '/profilePage', name: 'ProfilePage', component: ProfilePage },
    { path: '/gameModification', name: 'GameModification', component: GameModification },
    { path: '/profileUpdate', name: 'ProfileUpdate', component: ProfileUpdate },
    { path: '/roomCreationComplete', name: 'RoomCreationComplete', component: RoomCreationComplete },
    { path: '/roomSearch', name: 'RoomSearch', component: RoomSearch },
    { path: '/userLogin', name: 'UserLogin', component: UserLogin },
    { path: '/userRegistration', name: 'UserRegistration', component: UserRegistration },
    { path: '/RoomJoin', name: 'RoomJoin', component: RoomJoin },
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