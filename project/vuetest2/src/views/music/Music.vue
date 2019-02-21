<template>
<div>
  <aplayer v-if="isShow" autoplay :music="musiclist[0]" :list="musiclist" :showLrc="true"/>
</div>
   
</template>
<script>
import Aplayer from 'vue-aplayer'
import Axios from 'axios';
export default {
    components:{
        Aplayer
    },
    data() {
        return {
            musiclist:[],
            isShow:false

        }
    },
    created(){
        // 这是生命周期
        let obj={
            title:"音乐",
            classname:"music"
        }
        this.$emit("changenav",obj)
        this.getdata();
    },
    methods: {
        getdata(){
             Axios.get("./data/musicdata.json")
             .then((res)=>{
                //  console.log(res);
                 let arr = res.data.musicData;
                 arr.forEach((element,index) => {
                arr[index].lrc=location.origin+location.pathname+element.lrc
                 });
                 this.musiclist = arr;
                 this.isShow = true  
             })
        }
    },
}
</script>