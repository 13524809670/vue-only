<template>
  <div class="two">
      <h1>{{ msg }}</h1>
      <ul class="two-a">
        <h4>工作经历</h4>
        <li v-for="todo in todoa">
          {{ todo.text }}
        </li>
      </ul>

      <ul class="two-b">
        <h4>教育经历</h4>
        <li v-for="todo in todob">
          {{ todo.text }}
        </li>
      </ul>
      <a v-link="{ path: '/three' }" class="two-c">Next</a>
  </div>
</template>

<script>

export default {
  data () {
    return {
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

<style scoped>
.two {
  width: 650px;
  margin: 0 auto;
  border-radius: 20%;
  box-shadow: 9px 9px 9px #f00,
             -9px -9px 9px #000,
              0px 0px 12px 9px#3c0 inset;
  border: 1px solid #fff;
}
h1{
  width: 50px;
  margin: 0 auto;
}
.two-a {
  animation: two-a 3s ease backwards;
}
@keyframes two-a {
  0% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.two-b {
  animation: two-b 3s ease-out backwards;
}
@keyframes two-b {
  0% {
    transform: translateX(300px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

ul {
  margin: 20px 0 50px 100px;
}

h4 {
  margin-left: -60px;
  margin-bottom: 10px;
}
.two-c {
    display: block;
    width: 90px;
    margin: 0 auto;
}
</style>
