<template>
  <div class="hello">
    <div class="wrap">
      <img src="../assets/39.png" alt="" class="pic">
      <h1>{{ msg }}</h1>
      <ul>
        <h2>王锐</h2>
        <li v-for="todo in todoa">{{ todo.text }}</li>
      </ul>
      <a v-link="{ path: '/one' }">Next</a>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.hello{
      
      background-image: url(../assets/16.png);
      width: 100%;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      padding-top: 180px;
}

.wrap{
  width: 1150px;
  height: 800px;
  margin:0 auto;
}

.pic{
  display: inline-block;
  float: left;
  height: 600px;
  width: 500px;
  margin-right: 50px;
}

h1{
  width: 60px;
  height: 350px;
  font-size: 45px;
  text-align: center;
  line-height: 90px;
  float: left;
  margin-top: 160px;
  margin-right: 50px;
  color: red;
}

h2{
  font-size: 40px;
}

ul{
  list-style: none;
  margin-top: 180px;
  display: inline-block;
}
li{
  font-size: 33px;
}

a{
  font-size: 30px;
  font-style: italic;
  display: block;
}
</style>
