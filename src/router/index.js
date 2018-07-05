import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hey from '@/components/Hey'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
      {
        path: '/hello/:name',
        component: Hello
      },
      {
        path: '/hey/:name',
        component: Hey
      },
      {
        path: '/hi/:name',
        component: Hi
      },
      ]
    }
  ]
})
