import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/Menu'
import User from '@/components/User'
import Roll from '@/components/Roll'
import Jurisdiction from '@/components/Jurisdiction'

Vue.use(Router)

export default new Router({
  routes: [
        {
            path: '/',
            name: 'Menu',
            component: Menu,
            children:[
                {
                    path: 'user',
                    component: User
                },
                {
                    path: 'roll',
                    component: Roll
                },
                {
                    path: 'jurisdiction',
                    component: Jurisdiction
                },
            ]
        }
    ]
})
