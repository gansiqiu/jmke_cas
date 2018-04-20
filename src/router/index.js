import Vue from 'vue'
import Router from 'vue-router'
// import Menu from '@/components/Menu'
import User from '@/components/User'
import Roll from '@/components/Roll'
import Jurisdiction from '@/components/Jurisdiction'
import UserCOU from '@/components/UserCOU'
import RollCOU from '@/components/RollCOU'
import JurisdictionCOU from '@/components/JurisdictionCOU'

Vue.use(Router)

export default new Router({
  routes: [
        {
          path: '/',
          name: 'user',
          component: User
        },
        {
          path: '/user',
          name: 'user',
          component: User
        },
        {
            path: '/roll',
            name:"roll",
            component: Roll
        },
        {
            path: '/jurisdiction',
            name:"jurisdiction",
            component: Jurisdiction
        },
        {
            path: '/user/userCOU',
            name:'userCOU',
            component: UserCOU
        },
        {
            path: '/roll/rollCOU',
            name:'rollCOU',
            component: RollCOU
        },
        {
            path: '/jurisdiction/jurisdictionCOU',
            name:'jurisdictionCOU',
            component: JurisdictionCOU
        }
    ]
})
