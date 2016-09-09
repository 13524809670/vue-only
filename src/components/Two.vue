<template>
  <div class="two">
    <div class="wrap">
      <h2>{{ msg }}</h2>
      <ul>
        <h4>工作经历</h4>
        <li v-for="todo in todoa">
          {{ todo.text }}
        </li>
      </ul>

      <ul>
        <h4>教育经历</h4>
        <li v-for="todo in todob">
          {{ todo.text }}
        </li>
      </ul>
      <a v-link="{ path: '/three' }">Next</a>
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
        { text: '2016/3--2016/7' },
        { text: '企业：上海亮金信息科技' },
        { text: '职位：Web前端工程师' },
        { text: '行业类别：互联网/电子商务' },
        { text: '工作描述：负责编写项目分配的网站前端代码' },
        { text: '职位月薪：无' }
      ],
      todob: [
        { text: '时间：2005/09--2008/07' },
        { text: '毕业院校：罗田一中(高中)' },
        { text: '时间：2015/09--至今' },
        { text: '毕业院校：武汉工程大学(自读中...)' },
        { text: '专业科目：计算机软件' }
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
.two{
      background-image: url(../assets/32.png);
      width: 100%;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      padding-top: 120px;
}

.wrap{
  width: 550px;
  height: 800px;
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
  margin-left: 30px;
}

h4{
  font-size: 30px;
  margin-left: 0;
}

a{
  font-size: 25px;
  font-weight: 900;
  font-style: italic;
  margin-top: 50px;
  display: block;
}
a:hover{
  color: red;
}
</style>
