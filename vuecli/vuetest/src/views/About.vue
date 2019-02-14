<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{msg}}</h2>
  </div>
</template>
<script>
export default {
  data(){
    return{
      msg:"hello  world"
    }
  },
  beforeRouteEnter (to, from, next) {
   next()
  },
  beforeRouteLeave (to, from, next) {
   next()
 }
}
</script>
