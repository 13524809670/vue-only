<template>
  <div class="hello">
    <img src="../assets/aa_03.png" alt="" class="pic">
    <h1>{{ msg }}</h1>
    <!--<ul v-if="show" transition="expand" class="expand-transition expand-enter expand-leave">  -->
    <ul class="hello-b">
      <h2>王锐</h2>
      <li v-for="todo in todoa">{{ todo.text }}</li>
    </ul>
    <a v-link="{ path: '/one' }" class="hello-a">Next</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '个人介绍',
      todoa: [
        { text: '性别：男' },
        { text: '年龄：26' },
        { text: '籍贯：湖北-黄冈' },
        { text: '现居地：上海' },
        { text: '联系电话：13524809670' },
        { text: 'E-mail：1634208912@qq.com' }
      ]
    }
  }
}
</script>

<style scoped>
.hello{
  width: 1070px;
  height: 680px;
  background-image: url(../assets/12_09.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  margin: 0 auto;
}

h1{
  width: 47px;
  line-height: 90px;
  float: left;
  margin: 120px 50px 20px 0;
}

h2{
  font-size: 40px;
  color: #fff;
  margin-bottom: 10px;
}

.hello ul h2 {
  transform: translate(650px,0px);
  transition: all 0.1s;
  opacity: 0;
}
/*动画执行时的样式*/
.hello:hover ul h2{
  transform: translate(0px,0px);
  opacity: 1;
}


ul{
  margin: 160px 0 90px 0;
  display: inline-block;
}
/*照片动画*/
.pic{
  display: block;
  float: left;
  height: 680px;
  width: 500px;
  margin-right: 50px;
  animation: pic 3s ease-in-out backwards;
}
@keyframes pic{
  0% { 
    transform: translateY(-200px);
    opacity: 0;
  }
  100%{
    transform: translateY(0);
    opacity: 1;
  }
}

/*个人介绍动画开始样式*/
.hello ul li {
  transform: translate(650px,0px);
  transition: all 0.5s;
  opacity: 0;
}
/*动画执行时的样式*/
.hello:hover ul li{
  transform: translate(0px,0px);
  opacity: 1;
}
/*动画依次延时*/
.hello ul li:nth-of-type(1) {
  transition-delay: 0.05s;
}
.hello ul li:nth-of-type(2) {
  transition-delay: 0.1s;
}
.hello ul li:nth-of-type(3) {
  transition-delay: 0.15s;
}
.hello ul li:nth-of-type(4) {
  transition-delay: 0.2s;
}
.hello ul li:nth-of-type(5) {
  transition-delay: 0.25s;
}
.hello ul li:nth-of-type(6) {
  transition-delay: 0.25s;
}
.hello ul li:nth-of-type(7) {
  transition-delay: 0.25s;
}

.hello-a {
  display: inline-block;
  width: 90px;
}

</style>
