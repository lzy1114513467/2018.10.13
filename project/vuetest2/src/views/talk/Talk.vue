<template>
<div>
    <div class="talk-bar">
        <ul>
            <li v-for="(item,index) in talkList" :key="index">
                <div class="right">
                    <span>{{item.question}}</span>
                </div>
                <div class="left">
                    <span>{{item.answer}}</span>
                </div>

            </li>
        </ul>
    </div>
    <div class="talk-form">
        <input type="text" v-model="msg">
        <button @click="send">发送</button>
    </div>
</div>
    
</template>
<style scoped>
    .talk-form{
    width: 100%;
    padding-top:.3rem;
    height: 1rem;
    background-color: #ddd;
    text-align: center;
    position: fixed;
    bottom: 1rem;
    }
    .talk-bar span{
        padding: 5px 10px;
        background-color: rgb(123, 255, 0)
    }
    .talk-bar .left{
        text-align: left;
    }
    .talk-bar .right{
        text-align: right;
    }
</style>

<script>
import md5 from 'js-md5';
export default {
    
    data() {
    return {
        msg:"",
        talkList:[
            
        ]
    }
    },
    created(){
        // 这是生命周期
        let obj={
            title:"聊天",
            classname:"talk"
        }
        this.$emit("changenav",obj);
    },
    methods: {
        gettimestamp(){
            let datastr = Date.parse(new Date());
            datastr = datastr.toString().substr(0,10 );
            return datastr;
        },
        //获取随机字符串
        getnoncestr(){
            let str = Math.random().toString(36).substr(2);  
            return str;
        //获得签名
       
        },
        getreqsigh(params,appkey){
            let arr = [] ;
            let obj = {};
            let str = "";
            //1.对象排序
            arr = Object.keys(params).sort();
            arr.forEach((item,index,arr)=>{
                    obj[item] = params[item]
            })
            //2.参数按URL键值对个格式拼接字符串
            for(let item in obj){
                if(obj[item]!=""){
                    str+=item+"="+encodeURI(obj[item])+"&";  
                }
                
            }
            //3.讲应用密钥一app key为键民，组成URL键值拼接到字符串末尾
            str += "app_key="+appkey;
             //4.对字符串进行MD5加密  并转换成大写
            str = md5(str).toUpperCase();     
             return str
         },
        
        send(){
            let proxy = 'https://bird.ioliu.cn/v2?url='
            let url = 'https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat'
            let params = {
                app_id:"2111983021",
                time_stamp:this.gettimestamp(),  //时间戳
                nonce_str:this.getnoncestr(),//随机字符串
                session:"10000",     
                question:this.msg,
                sign:""
            }
            
            let appkey = "2D2bdu1rs97DiCcy";
            params.sign = this.getreqsigh(params,appkey);
            //  sign = this.getreqsigh(params,appkey);
            
            axios({
                url:proxy+url,
                method:"post",
                data:{...params}
            }).then((res)=>{
                let obj= {
                    
                    question:this.msg,
                    answer:res.data.data.answer
                }
                // .console.log(this);
                
                this.talkList.push(obj);
            }).catch((res)=>{

            })
        },
        // getdata(){
        //     let proxy = 'https://bird.ioliu.cn/v2?url='
        //     let url = 'https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat'
        //     axios.get(proxy+url)
        //     .then((res)=>{
        //         console.log(res);

        //     })
        //     .catch((res)=>{

        //     })

            
        // }
    }
}
</script>