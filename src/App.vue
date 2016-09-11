<template>
  <!-- <div class="main"> 
    <router-view transition="expand" transition-mode="out-in"></router-view>
  </div>-->
  <div id="app" class="app">
    <img src="./assets/3123_03.png" alt="" class="icon">
    <button><a v-link="{ path: '/hello' }">点击查看简历</a></button>
    <img class="logo" src="./assets/logo.png">
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  components: {
    Hello
  }
}
</script>

<style>
/*公共样式*/
* {
  margin: 0;
  padding: 0;
}
html {
  height: 100%;
}

body {
  /*display: flex;(显示：弯曲)*/
  align-items: center;/*(对齐项目：中心)*/
  justify-content: center;/*(证明内容：中心)*/
  height: 100%;
  background: rgba(250,120,2,0.6);
}
#app {
  width: 1000px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  margin: 100px auto 0;
}

img {
  display: block;
  margin: 0 auto;
}

h1 {
  color: #fff;
  font-size: 50px;
  color: blue;
}
h4 {
  font-size: 36px;
  color: #222;
}

ul {
  list-style: none;
}
li {
  font-size: 30px;
  color: #fff;
}

a {
  color: green;
  font-size: 35px;
  font-weight: 700;
  font-style: italic;
  text-decoration: none;
  cursor: pointer;
  width: 100%;
}
a:hover {
  color: #fff;
}
/*公共样式*/

.icon {
  width: 200px;
  height: 260px;
}
.logo {
  width: 200px;
  height: 200px;
}
button {
  width: 100%;
  height: 90px;
  line-height: 90px;
  text-align: center;
  background: #fff;
  border-radius: 50%;
  outline: none;
  border: none;
}
button:hover {
  background: #222;
  cursor: pointer;
}
button:hover a {
  color: #fff;
}
</style>

