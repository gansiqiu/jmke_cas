import Vue from 'vue'
import Router from 'vue-router'
import User from '@/components/User'
import Role from '@/components/Role'
import Jurisdiction from '@/components/Jurisdiction'
import UserCOU from '@/components/UserCOU'
import RoleCOU from '@/components/RoleCOU'
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
            path: '/role',
            name:"role",
            component: Role
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
            path: '/role/roleCOU',
            name:'roleCOU',
            component: RoleCOU
        },
        {
            path: '/jurisdiction/jurisdictionCOU',
            name:'jurisdictionCOU',
            component: JurisdictionCOU
        }
    ]
})
