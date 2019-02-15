<template>
<div>
     <h1>
      音乐
    </h1>
</div>
   
</template>
<script>
export default {
    created(){
        // 这是生命周期
        let obj={
            title:"音乐",
            classname:"music"
        }
        this.$emit("changenav",obj)
    }
}
</script>