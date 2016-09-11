<template>
  <div class="one">
    <h1>{{ msg }}</h1>
    <ul class="first">
      <h4>求职意向</h4>
      <li v-for="todo in todoa">{{ todo.text }}</li>
    </ul>
    <img src="../assets/3123_03.png" alt="" class="pic">
    <ul class="last">
      <h4>专业技能</h4>
      <li v-for="todo in todob">{{ todo.text }}</li>
    </ul>
    <a v-link="{ path: '/two' }">Next</a>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: '简历',
      todoa: [
        { text: '期望职业：Web前端工程师' },
        { text: '工作性质：全职' },
        { text: '工作地点：上海' },
        { text: '期望行业：互联网/电子商务、计算机软件、网络游戏' },
        { text: '期望月薪：面议' }
      ],
      todob: [
        { text: 'HTML：良好' },
        { text: 'CSS：良好' },
        { text: 'CSS3：良好' },
        { text: 'JavaScript：一般' },
        { text: 'jQuery：一般' },
        { text: 'Vue：一般' },
        { text: 'Bootstrap：一般' },
        { text: 'Photoshop：一般' },
        { text: 'Gulp：良好' }
      ]
    }
  }
}
</script>

<style scoped>
.one{
  width: 800px;
  margin: 0 auto;
}
h1{
  width: 105px;
  margin: 0 auto;
}

ul{
  width: 800;
  padding: 3% 3%;
  border-radius: 20%;
  box-shadow: 9px 9px 9px #f00,
             -9px -9px 9px #000,
              0px 0px 12px 9px#3c0 inset;
}
li{
  margin-left: 50px;
}

.first{
  animation: first 2s ease-in-out backwards;
}
.first li {
  margin-right: 60px;
}
@keyframes first {
  0% {
    transform: translateX(-1350px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.last h4{
  text-indent: 130px;
}
.last li{
  text-align: right;
  margin-right: 100px;
}
.one .last li:nth-of-type(1) {
  transition-delay: 0.05s;
}
.one .last li:nth-of-type(2) {
  transition-delay: 0.1s;
}
.one .last li:nth-of-type(3) {
  transition-delay: 0.15s;
}
.one .last li:nth-of-type(4) {
  transition-delay: 0.2s;
}
.one .last li:nth-of-type(5) {
  transition-delay: 0.25s;
}
.one .last li:nth-of-type(6) {
  transition-delay: 0.25s;
}
.one .last li:nth-of-type(7) {
  transition-delay: 0.25s;
}
.one .last li:nth-of-type(8) {
  transition-delay: 0.25s;
}
.one .last li:nth-of-type(9) {
  transition-delay: 0.25s;
}
.one .last li {
  transform: translate(650px,0px);
  transition: all 0.5s;
  opacity: 0;
}
.one:hover .last li{
  transform: translate(0px,0px);
  opacity: 1;
}

.pic{
  width: 160px;
  height: 230px;
  float: left;
  margin: 80px 0 0 130px;
  transform: scale(1,1);
  opacity: 0.2;
  transition: all 2s;
}
.one:hover .pic {
  transform: scale(1.8,1.8);
  opacity: 1;
}
</style>
