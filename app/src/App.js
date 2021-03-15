import './App.css';
import {Route, Switch} from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Coins from './components/Coins'
// import React, {useState} from 'react'
  
function App() {

  return (
    <div className="App">
      <Nav />

      <Switch>
        <Route path="/coins">
          <Coins/>
        </Route>

        <Route path="/">
          <Home/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
