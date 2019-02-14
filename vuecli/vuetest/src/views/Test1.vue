<template>
<div>
    <h1>
       这是一个测试子路由1
      
    </h1>
    <br>
    姓名：{{$route.params.name}}
    <br>
    年龄:{{$route.params.age}}
</div>
    
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>