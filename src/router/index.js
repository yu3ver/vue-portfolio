import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import About from '@/components/about'
import Portfolio from '@/components/portfolio'
import PortfolioItem from '@/components/portfolioitem'
import Contact from '@/components/contact'
import Settings from '@/components/settings'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'Hello', component: Home },
        { path: '/about', name: 'About', component: About },
        { path: '/portfolio', name: 'Portfolio', component: Portfolio },
        { path: '/contact', name: 'Contact', component: Contact },

        { path: '/portfolio/:item', name: 'PortfolioItem', component: PortfolioItem },

        { path: '/switch', name: 'Settings', component: Settings },

        { path: '*', redirect: '/' }
    ]
})
