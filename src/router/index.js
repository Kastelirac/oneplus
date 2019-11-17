import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import pronadi from '@/components/pronadi'
import ponudi from '@/components/ponudi'
import registrirajse from '@/components/registrirajse'
import prijava from '@/components/prijava'
import trazi from '@/components/trazi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/pronadi',
      name:'pronadi',
      component: pronadi
    },
    {
      path:'/ponudi',
      name:'ponudi',
      component: ponudi
    },
    {
      path:'/registrirajse',
      name:'registrirajse',
      component: registrirajse
    },
    {
      path:'/prijava',
      name:'prijava',
      component: prijava
    },
    {
      path:'/trazi',
      name:'trazi',
      component: trazi
    }
  ]
})
