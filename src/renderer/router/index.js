import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path     : '/logging-page',
      name     : 'logging-page',
      component: require('@/components/LoggingPage')
    },
    {
      path     : '/configuration-page',
      name     : 'configuration-page',
      component: require('@/components/ConfigurationPage')
    },
    {
      path    : '*',
      redirect: '/logging-page'
    }
  ]
})
