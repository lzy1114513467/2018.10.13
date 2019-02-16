<template>        
  <div id="app">
    <div id="nav">
      <!-- 组件的表现形式就是一个标签  所以这儿用一个标签 -->
      <navgator :navval="activenav " />        
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
      <!-- <router-link to="@/components/Navgator">123</router-link> -->

      

    </div>
    <router-view @changenav="change"/>
  </div>
</template>
// 相当于一个容器     1.先引进来
<script>
import navgator from '@/components/Navgator.vue'
export default {
  data(){
    return{
      activenav:{
        title:"电影",
        classname:"movie"
      }
    }
  },
  methods:{
    change(obj){
      this.activenav.title = obj.title;
      this.activenav.classname = obj.classname;
    }
  },
  components:{
    navgator        /* 2.  组件声明   声明完之后就可以使用了*/
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  padding: 1rem 0; 
}
</style>
