import Mock from 'mockjs'
import data from './data.json'

Mock.mock("https://api.myjson.com/bins/9inum",{datalist:data})
Mock.mock(url:"",{
    //占位符
    "name|2":"  ",
    "age|5-10":4
 })
 Mock.mock(url:"",{
    //占位符
   "list|20":[
       {
        'id|+1':1,
       "name":"@first @last",
       "text":"@cword(10,15)",
       "time":"@time(hh-mm-dd)",
       "cname":"@cname",
       "img":"@img(100*100)"
       }
      
   ]
 })


 let Random = Mock.Random;

 let TestDataList = ()=>{
     let list=[]
     for(let i=0;i<100;i++){
         let obj = {
            name:Random.cname(),
         id:Random.integer(10000,99999),
         img:Random.dataImage("125x125","myId:"+Random.interger(  )) 
         }
         list.push(obj);
         

 }
 return list
 }
Mock.mock("https://api.myjson.com/bins/9inum",{datalist:TestDataList()})
 