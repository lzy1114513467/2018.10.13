import React, { Component } from 'react'
import axios from 'axios'

export default class Class5 extends Component {
  constructor(props){
    super(props);
    this.state={
      datalist:[]
    }
  }
  render() {
    let url = 'https://api.myjson.com/bins/9inum';
    let url1 ="";
    axios.get(url)
    .then(function(res){
      dataList:res,datd,data
    })
    // let com = this.state.dataList.map((item,index)=>)
    return (
      
      <div>
        
      </div>
    )
  }
}
