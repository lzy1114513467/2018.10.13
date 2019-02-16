<template>
<div class="head">
    <h1>
      <ul>
        <li class="item-list clearfix" v-for="(item,index) in movies" :key="index">
          <div class="list-left">
            <img :src="item.cover.url" alt="">
          </div>
          <div class="list-right">
            <p>{{item.title}}</p>
            <span v-for="{item,index} in item.actors" :key="index"></span>
            <span v-for="(item,index) in item.actors" :key="index">{{item}}/</span>
          </div>
          
          
        </li>
      </ul>
    </h1>
</div>
    
</template>
<script>
export default {
  data() {
    return {
      movies:[
       
      ]
    }
  },
  mounted() {   /*是生命周期里当dom元素挂在成功启动的*/
    window.onscroll = () =>{
      let clientheight =  document.documentElement.clientHeight;  //可视区域
    let scrolltTop = document.documentElement.scrollTop;  //滚动高度
    let scrollheight = document.documentElement.scrollHeight ; //滚动条的高度 
    console.log(clientheight,scrolltTop,scrollheight);
    }
    


  },
    created(){
        // 这是生命周期
        let obj={
            title:"电影",
            classname:"movie"
        }
        this.$emit("changenav",obj)
        this.getdata();
    },
    methods: {/*https://api.douban.com/v2/movie/in_theaters?city=广州&start=0&count=10*/
      getdata(){
      let proxy  = 'https://bird.ioliu.cn/v2?url='
      let url = 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?start=0&count=10'
      axios.get(proxy+url)
      .then((res)=>{
        console.log(res);
        console.log(res.data.subject_collection_items);
        this.movies=res.data.subject_collection_items;  
      })
      .catch((res)=>{
        console.log('失败')
      })
      }
    },
}
</script>
<style scoped>
  .item-list{
    border-bottom: 1px solid #333;
    padding: 20px 0;
  }
  .list-left{
    float: left;
    width: 40vw;
    height: 25vh;
  }
  .list-right{
    float: right;
    width: 40vw;
    height: 25vh;
    font-size: 16px;
    padding: 0 20px;
  }
  .list-left .list-right{
    height: 25vw;
  }
  ul{
    padding: 20px 0;
  }
  
</style>