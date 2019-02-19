<template>
<div>
  <aplayer v-if="isShow" :music="musiclist[0]" :list="musiclist"/>
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
                 let arr = res.data.musicData;
                 this.musicList = arr;
                 this.isShow = true  
             })
        }
    },
}
</script>