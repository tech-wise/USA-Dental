import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Dasboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Form from './pages/Form';
import Notifications from './pages/Notifications';
import Buttons from './pages/Buttons';
import Text from './pages/Text';
import Cards from './pages/Cards';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>


      
        <Header/>
        
        <Switch>
      
          <Route exact path='/' component={Dasboard}/>
          <Route path path='/login' component={Login}/>
          <Route path path='/signup' component={Signup}/>
          <Route path path='/form' component={Form}/>
          <Route path path='/notifications' component={Notifications}/>
          <Route path path='/buttons' component={Buttons}/>
          <Route path path='/text' component={Text}/>
          <Route path path='/cards' component={Cards}/>
      
        </Switch>
        
        <Footer/>
      
      </Router>
      
    </div>
  );
}

export default App;
