import React from 'react';
import './App.css';
import Home from './Home.js';
import Signin from './Signin.js';
import Login from './Login.js';
import Chatbox from './Chatbox.js';
import Logout from './Logout.js';
import Eventpath from './Eventpath.js';
import CreateRoom from './CreateRoom.js';
import AuthLogin from './AuthLogin.js';
import {BrowserRouter as Router, Switch,Route}from 'react-router-dom';

function App() {
  return (
    <Router>
          <div className="App">
            
            <Switch>
            <Route path='/' exact component={Login}/>
            
            <Route path='/signin'  component={Signin}/>
            
            <Route path='/login' component={Login}/>
            
            <Route path='/createroom' component={CreateRoom}/>
            <AuthLogin>
            <Route path='/chatbox' component={Chatbox}/>
            <Route path='/event' component={Eventpath}/>
            </AuthLogin>
            <Route path='/logout' component={Logout}/>

           
            </Switch>
          </div>
    </Router>

  );
}

export default App;
