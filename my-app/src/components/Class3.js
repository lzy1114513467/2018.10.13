import React, { Component } from 'react'
import	{
  BrowserRouter as	Router,	
  Route,	
  Link,
  Switch,
}	from	"react-router-dom";

const Page1 =() =><div>这是页面一</div>
const Page2 =() =><div>这是页面二</div>
export default class Class3  extends Component {
  render() {
    return (
      <div>
        <Router>
         <div>
          <Link to="/Page1">页面一</Link>
          <Link to="/Page2">页面二</Link>
          <Route path="/Page1" component={Page1}/>
          <Route path="/Page2" component={Page2}/>
         </div>
          
        </Router>
      </div>
    )
  }
}
