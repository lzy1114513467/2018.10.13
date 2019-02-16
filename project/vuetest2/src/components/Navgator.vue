<template>
    <div v-bind:class="activeclass">
        <!-- <h1>导航</h1> -->
        <header>
            <span @click="routerpush(btnlist[0])">首页</span>
            <h2>{{propsval}}</h2>
        </header>
        <nav>
            <ul>
                <li :class="{active:item.classname==activeclass}" v-for="(item,index) in btnlist" :key="index" @click="routerpush(item)">{{item.name}}</li>
                
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activetitle:'电影',
            activeclass:"movie", 
            btnlist:[
                {
                    name:"电影",
                    routerPath:"/",
                    classname:"movie"
                },
                {
                    name:"音乐",
                    routerPath:"/music",
                    classname:"music"

                },
                {
                    name:"书籍" ,
                    routerPath:"/book",
                    classname:"book"

                },
                {
                    name:"聊天",
                    routerPath:"/talk",
                    classname:"talk "


                }
            ]
        }
    },
    props:['navval'],
    methods: {
        routerpush(obj){
            this.$router.push(obj.routerPath);
            this.activetitle = obj.name;
            this.activeclass= obj.classname

        }
    },
    computed: {
        propsval(){
            return this.navval.title;
        }
    },
    watch: {
        propsval(){
             this.activeclass = this.navval.classname;
             this.activetitle = this.navval.title 
        }
       
    },
}
</script>

<style scoped>    /*仅在当前组件内生效*/
    header,nav{
        color: #fff;
        position:fixed;
        background-color: rgb(33, 150, 243);
        height: 1rem;
        width: 100%;

    }
     .movie header,.movie nav{
    background-color: rgb(33, 150, 243);
  }
  .music header,.music nav{
    background-color: rgb(0, 150, 136);
  }
  .book header,.book nav{
    background-color: rgb(121, 85, 72);
  }
  .talk header,.talk nav{
    background-color: rgb(63, 81, 181);
  }
    header{
        top: 0;
    }
    span{
        position: absolute;
        left: 10px;
        top:0.25rem;
    }
    nav{
        bottom: 0;
    }
    nav ul{
        width: 100%;
    }
    nav li{
        color: #ddd;
        float: left;
        width: 25vw;
        line-height: 1rem;
        text-align: center;
    }
    h2{
        text-align: center;
    }
    nav li.active{
        color: #fff;
        font-weight: bolder;
        font-size: 16px; 
    }
</style>
