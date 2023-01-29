import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import Nav from './Nav';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";


function App() {
  const user = null
  return (
    <div className="App">
      <Nav /> 
      <Router>
        <Switch>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
