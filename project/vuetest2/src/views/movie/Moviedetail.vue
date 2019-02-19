<template>
    <div>
        <h1>详情页面</h1>
        {{movieInfo.title}}
    </div>
</template>
<script>
import axios from 'axios'  //????
export default {
    data(){
        return{
            movieInfo:{}
        }
    },
    created() {
        this.getdata()
    },
    methods: {
        getdata(){
            let proxy = 'https://bird.ioliu.cn/v2?url='
      let url = `https://api.douban.com/v2/movie/subject/${this.$route.params.movieId}`
      axios.get(proxy+url)
      .then((res)=>{
        this.movieInfo = res.data;
      })

        }
    },
}
    
</script>
<style scoped>

</style>
