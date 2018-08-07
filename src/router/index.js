import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Projects from '@/components/Projects'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home,
      alias: '/Home'
    },
    {
      path: '/experience',
      name: "Experience",
      component: Experience
    },
    {
      path: '/education',
      name: "Education",
      component: Education
    },
    {
      path: '/projects',
      name: "Projects",
      component: Projects
    }
  ]
})
