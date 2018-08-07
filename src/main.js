// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Home from '@/components/Home'
import Experience from '@/components/Experience'
import Nav from '@/components/Nav'
import WorkCard from '@/components/WorkCard'
import Education from '@/components/Education'
import EduCard from '@/components/EduCard'
import Projects from '@/components/Projects'
import ProjectCard from '@/components/ProjectCard'




import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
    Home,
    Experience,
    Nav,
    WorkCard,
    Education,
    EduCard,
    Projects,
    ProjectCard
  },
  template: '<App/>'
})
