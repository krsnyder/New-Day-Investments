import './App.css';
import {Route, Switch} from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Coins from './components/Coins'
import Details from './components/Details'
import React from 'react'
  
function App() {

  return (
    <div className="App">
      <Nav />
      <div className="content-wrapper">
        <Switch>
          <Route path="/coins">
            <Coins/>
          </Route>

          <Route path="/details">
            <Details/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>

        </Switch>
      </div>
    </div>
  );
}

export default App;
