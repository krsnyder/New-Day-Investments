import './App.css';
import {Router, Switch} from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Coins from './components/Coins'

function App() {
  return (
    <div className="App">
      <Nav />

      <Switch>
        <Router path="/">
          <Home/>
        </Router>

        <Router path="coins">
          <Coins/>
        </Router>
      </Switch>
    </div>
  );
}

export default App;
