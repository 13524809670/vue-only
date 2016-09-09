<template>
  <div class="three">
    <div class="wrap">
      <h2>{{ msg }}</h2>
      <ul>
        <h3>自我评价</h3>
        <li v-for="todo in todoa">
          {{ todo.text }}
        </li>
      </ul>
      <a v-link="{ path: '/hello' }">Return</a>
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
        { text: '工作认真踏实,具有敬业精神,能吃苦耐劳' },
        { text: '团队意识强,对工作认真负责' },
        { text: '能够承担一定工作压力 ' },
        { text: '具有挑战能力,有求知欲' },
        { text: '有解决问题、钻研新技术的兴趣和能力' },
        { text: '乐于研究Web前端效果的技巧与实现' },
        { text: '并且能很快接受和学习新的知识' }
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
.three{
      background-image: url(../assets/12.png);
      width: 100%;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      padding-top: 1px;
      color:#222;
      text-align: center;
}
.wrap{
  width: 1100px;
  margin:120px auto 0 auto;
  height: 820px;
}

h2{
  font-size: 66px;
  margin-right: 80px;
  width: 80px;
  display: block;
  float: left;
}

ul{
  list-style: none;
  padding-top: 50px;
}
li{
  width: 40px;
  float: left;
  font-size: 30px;
  margin-right: 50px;
  font-weight: 900;
}
h3{
  width: 70px;
  float: left;
  margin-right: 100px;
  font-size: 50px;
}
a{
  font-size: 35px;
  font-weight: 900;
  font-style: italic;
  display: block;
}
a:active{
  color: red;
}
</style>
