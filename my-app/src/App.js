import React, { Component } from 'react';
import './App.css';
import Class1 from './components/Class1.js'
import Class2 from './components/Class2.js'
import Class3 from './components/Class3.js'
import Class5 from './components/Class5.js'
import	{
    BrowserRouter as	Router,	
    Route,	
    Link,
    Switch,
  }	from	"react-router-dom";
// import {Provider} from 'react-redux'
// import store from './stroe'
  const Test = ({match})=>{
   console.log(match.params.id);
   
   return (
    <div>
      <h1>这是一个测试组件</h1>
    </div>
  )
  }
class App extends Component {
  render() {  
    return (
      <div className="App">
      {/* <Provider store={store}> */}
          <Router>
             <div> 
            <Link to='/'>Class1</Link>|
            <Link to='/test/101'>test</Link>|
            <Link to='/class2/110'>Class2</Link>|
            <Link to='/class3'>Class3</Link>
            <Link to='/class5'>Class5</Link>
            <Switch>
            <Route path={'/test/:id'} component={Test}/>
            <Route path={'/class2/:id'} component={Class2}/>         
            <Route exact path={'/class3'} component={Class3}/>
            <Route exact path={'/class5'} component={Class5}/>
            <Route path={'/'} component={Class1}/>
            </Switch>
            </div>
             </Router>
              
      {/* </Provider> */}
       
          

         
      </div>
    );
  }
}

export default App;
