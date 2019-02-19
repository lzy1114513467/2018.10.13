<template>
<div>
   <swipe class="my-swipe">
  <swipe-item class="slide1"><img src="../../assets/img/02.jpg" alt=""></swipe-item>
  <swipe-item class="slide2"><img src="../../assets/img/03.jpg" alt=""></swipe-item>
  <swipe-item class="slide3"><img src="../../assets/img/04.jpg" alt=""></swipe-item>
</swipe>
</div>
   
</template>
<script>
    require('vue-swipe/dist/vue-swipe.css');
    import { Swipe, SwipeItem } from 'vue-swipe';

export default {
     components: {
    'swipe': Swipe,
    'swipe-item': SwipeItem
  },
    created(){
        // 这是生命周期
        let obj={
            title:"书籍",
            classname:"book"
        }
        this.$emit("changenav",obj)
    }
}
</script>
<style scoped>
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  /* background-image: url('../../assets/img/02.jpg'); */
  /* background-color: #0089dc; */
  color: #fff;
}

.slide2 {
  /* background-color: #ffd705; */
  color: #000;
}

.slide3 {
  /* background-color: #ff2d4b; */
  color: #fff;
}
</style>
