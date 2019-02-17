<template>
<div>
  <h1>
      聊天 
    </h1>
    <div class="talk-form">
        <input type="text">
        <button @click="send">发送</button>
    </div>
</div>
    
</template>
<script>
export default {
    
    data() {
    return {
        msg:""
    }
    },
    created(){
        // 这是生命周期
        let obj={
            title:"聊天",
            classname:"talk"
        }
        this.$emit("changenav",obj)
    },
    methods: {
        gettimestamp(){
            let datastr = ""
        },
        getnoncestr(){
            let str = Math.random().toString(32).substr(2);
            return str;
        },
        send(){
            let proxy = 'https://bird.ioliu.cn/v2?url='
            let url = 'https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat'
            let params = {
                app_id:"2111983021",
                time_stamp:"",  //时间戳
                nonce_str:this.getnoncestr(),//随机字符串
                sign:"",
                session:"",     
                question:""

            }
            axios({
                url:proxy+url,
                methods:"post",
                data:{...params}
            }).then((res)=>{

            })
        },
        getdata(){
            let proxy = 'https://bird.ioliu.cn/v2?url='
            let url = 'https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat'
            axios.get(proxy+url)
            .then((res)=>{
                console.log(res);

            })
            .catch((res)=>{

            })

            
        }
    },
}
</script>