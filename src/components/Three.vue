<template>
  <img src="../assets/3123_03.png" alt="">
  <div class="three">
    <!-- <img src="../assets/3123_03.png" alt=""> -->
    <h1>{{ msg }}</h1>
    <ul>
      <h4>自我评价</h4>
      <li v-for="todo in todoa">
        {{ todo.text }}
      </li>
    </ul>
    <a v-link="{ path: '/hello' }" class="three-a">Next</a>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: '简历',
      todoa: [
        { text: '工作认真踏实，具有敬业精神,能吃苦耐劳，团队意识强，对工作认真负责，'},
        { text: '能够承担一定工作压力，具有挑战能力,有求知欲' },
        { text: '有解决问题、钻研新技术的兴趣和能力' },
        { text: '乐于研究Web前端效果的技巧与实现并且能很快接受和学习新的知识' }
      ]
    }
  }
}
</script>

<style scoped>
.three{
  width: 900px;
  margin: -500px auto 0;
  text-shadow: 9px 9px 9px #ff0;
}

img{
  width: 400px;
  height: 600px;
}

ul { 
  margin: 20px 0 60px 50px; 
}

li {
  margin: 10px 0 0 50px;
  letter-spacing: 5px;
  font-weight: 900;
}

.three-a {
  display: block;
  margin: 0 auto;
  width: 80px;
}


.three ul {
  transform: translate(0px,-900px) rotate(0deg);
  transition: all 1s;
  opacity: 0;

}
.three:hover ul {
  transform: translate(0px,0px) rotate(720deg);
  opacity: 1;
}
</style>
