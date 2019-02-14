<template>
  <div id="app">
    <div id="nav">
      <button @click="back">返回首页</button>
      <button @click="goback">后退</button>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/mine">我的</router-link>|
      <router-link to="/test">测试</router-link>|
      <router-link :to="{name:'test1',params:{name:'zs',age:'20'}}">测试1</router-link>|    
      <router-link to="/test2/ls/30">测试2</router-link>|
      <router-link to="/niubi">别名</router-link>    
      <router-link to="/count">Vuex</router-link>    

    </div>
    <transition name="fade" mode="out-in">
    <router-view/>
    </transition>
    
  </div>
</template>
<script>
export default {
  methods: {
    back(){
      console.log("123");
      this.$router.push('/');
    },
    goback(){
      console.log("houtui");
      this.$router.go(-1);
    }
  },
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
 transition: all 1s ease;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  transition: all 1s ease;
}
.fade-leave-to{
  opacity: 0;
}
</style>
