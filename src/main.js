// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'

import StoryblokVue from 'storyblok-vue'
import VueParticles from 'vue-particles'

import MainMenu from '@/components/main-menu'

Vue.use(VueParticles)
Vue.use(StoryblokVue)
Vue.use(VueFire)

Vue.component('main-menu', MainMenu)

Vue.config.productionTip = false

require('./foundation.min.css')
require('./style.css')

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
