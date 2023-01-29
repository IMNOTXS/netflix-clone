import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';


function App() {
  const user = null
  return (
    <div className="App">
       
      <Router>
        {!user ? (
          <LoginScreen />

        ): (
          <Switch>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
