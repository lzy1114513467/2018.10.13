import React, { Component } from 'react'

import	{
  BrowserRouter as	Router,	
  Route,	
  Link,
  Switch,
  withRouter,
  Prompt,
  NavLink,
}	from	"react-router-dom";

const Page1 =() =><div>这是页面一</div>
const Page2 =() =><div>这是页面二</div>
const MenuLink = ({to,label})=>{
  return(
    <Route
    path={to}
    children = {
      ({match})=>{ 
        console.log(match);
        return(
          <div>
            <Link to={to} >{label}</Link>
          </div>
        )
      }
    }
    />
  )
}
const RouterChange = withRouter(({history})=>{
  return(
    <div>
      <button onClick={()=>{history.push("./class2")}}>导航向Page2</button>
    </div>
  )
})
export default class Class3  extends Component {
  constructor(props) {
    super(props);
    this.state={
      prompt:true
    }
  }
  render() {
    return (
      <div>
        <Router>
         <div>
           <MenuLink to="/Page3" label="自定义链接1"/>
           <MenuLink to="/Page4" label="自定义链接2"/>
          <NavLink activeClassName="aa" activeStyle={{color:"red"}} to="/Page2">页面一</NavLink>
          <Link to="/Page1">页面一</Link>
          <Link to="/Page2">页面二</Link>
          <RouterChange/>
          <Prompt
          when={this.state.prompt} message="确定离开？"/>
          <Route path="/Page1" component={Page1}/>
          <Route path="/Page2" component={Page2}/>
         </div>
          
        </Router>
      </div>
    )
  }
}
