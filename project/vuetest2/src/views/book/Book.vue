<template>
<div>
   <h1>
      书籍  
    </h1>
</div>
   
</template>
<script>
export default {
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