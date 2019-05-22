import Vue from 'vue'
import App from './App.vue'
import "lib-flexible/flexible.js"
import { Row, Col } from 'vant'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
import qs from 'qs'




Vue.use(Row).use(Col);

Vue.config.productionTip = false
import router from './router/index.js'

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
