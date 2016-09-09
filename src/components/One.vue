<template>
  <div class="one">
    <div class="wrap">
      <h2>{{ msg }}</h2>
      <ul class="first">
        <h4>求职意向</h4>
        <li v-for="todo in todoa">{{ todo.text }}</li>
      </ul>
      
      <ul class="last">
        <h4>专业技能</h4>
        <li v-for="todo in todob">{{ todo.text }}</li>
      </ul>
      <a v-link="{ path: '/two' }">Next</a>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.one{
      background-image: url(../assets/12.png);
      width: 100%;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      padding-top: 70px;
}

.wrap{
  width: 999px;
  height: 840px;
  margin:0 auto;
}

h2{
  margin-top: 30px;
  font-size: 45px;
  margin-left: 30px;
}
ul{
  margin-top: 30px;
  list-style: none;
}
li{
  font-size: 26px;
}

h4{
  font-size: 30px;
  margin-left: -81px;
}

.first{
  margin-left:300px;
}
.last{
  margin-left: 600px;
}

a{
  font-size: 25px;
  font-weight: 900;
  font-style: italic;
}
a:hover{
  color: red;
}
</style>
