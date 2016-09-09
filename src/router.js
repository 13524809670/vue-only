import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
//import { user, user-v } from './components'

Vue.use(VueRouter)
const router = new VueRouter()

/*router.map({
	'/': {
		name: 'home',
		components: user
	},
	'/user': {
		name: 'user',
		components: user
	},
	'/user/edit/:id': {
		name: 'user-v',
		components: user-v
	}
})*/
export default router;