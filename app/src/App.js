import './App.css';
import {Route, Switch} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Coins from './components/Coins'
import Details from './components/Details'
import Loading from './components/Loading'
import React from 'react'
import {connect} from 'react-redux'
  
function App(props) {

  return (
    <div className="App">
      <Nav />
      <div className="content-wrapper">
        <Switch>
          <Route path="/coins">
            <Coins/>
          </Route>

          {props.loading
            ? <Route path="/details">
                < Loading />
              </Route>
            : <Route path="/details">
                <Details/>
              </Route>
          }

          <Route path="/">
            <Home/>
          </Route>

        </Switch>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return ({
    loading: state.loading
  })
}

export default connect(mapStateToProps)(App);
