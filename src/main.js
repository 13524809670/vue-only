

//创建路由
var Vue = require('vue')
var VueRouter = require('vue-router')
var Hello = require('./components/Hello.vue')
var One = require('./components/One.vue')
var Two = require('./components/Two.vue')
var Three = require('./components/Three.vue')

Vue.use(VueRouter)


//新路由连接地址
var Foo = Vue.extend({
	template: '<p>这是一个连接！</p>'
})

var Bar = Vue.extend({
	template: '<p>This is 链接</p>'
})


var App = Vue.extend({})

//创建新的路由包
var router = new VueRouter()
//在新路由包引用
router.map({
	'/foo': {
		component: Foo
	},
	'/': {
		component: Bar
	},
	'/hello': {
        component: Hello
    },
	'/one': {
		component: One
	},
	'/two': {
		component: Two
	},
	'/three': {
		component: Three
	}
})

router.start(App, '#app')
//启动应用.路由器会创建一个App实例，并且挂载到选择符#app匹配的元素上