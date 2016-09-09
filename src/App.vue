<template>
  <div class="main" id="app">
  	<hello></hello>
    <router-view transition="expand" transition-mode="out-in"></router-view>
  </div>
</template>

<script>
//import store from './store'
import Hello from './components/Hello'

export default {
  components: {
    Hello
  }
}
</script>

<style>
	/*body{
	    background-image: url(./assets/16.png);
	    width: 100%;
	    height: 2700px;
	    background-size: 100% 100%;
	    background-repeat: no-repeat;
	}*/
</style>
