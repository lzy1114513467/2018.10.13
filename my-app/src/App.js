import React, { Component } from 'react';
import './App.css';
import Class1 from './components/Class1.js'
import Class2 from './components/Class2.js'
import Class3 from './components/Class3.js'
import	{
    BrowserRouter as	Router,	
    Route,	
    Link,

  }	from	"react-router-dom";

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
        <Router>
          <div>
            <Link to='/'>Class1</Link>|
            <Link to='/test/101'>test</Link>|
            <Link to='/class2'>Class2</Link>
            <Link to='/class3'>Class3</Link>
            
            <Route path={'/test/:id'} component={Test}/>
            <Route path={'/class2'} component={Class2}/>         
            <Route path={'/'} component={Class1}/>
            
          </div>
        </Router>
         
      </div>
    );
  }
}

export default App;
