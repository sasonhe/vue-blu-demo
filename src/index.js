
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueBlu from 'vue-blu'
import App from './App.vue'
import routes from './router.config.js'

Vue.use(VueBlu)
Vue.sue(VueRouter)
Vue.use(VueResource)

var router = new VueRouter({
    routes
})

new Vue({
    el : '#app',
    router,
    render : (h) => {
        return h(App)
    }
})
