import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Dasboard from './pages/Dashboard';
import Login from './pages/Login';
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
      {/* <Router basename={process.env.PUBLIC_URL}> */}


      
        <Header/>
        
        <Switch>
      
          <Route exact path='/' component={Dasboard}/>
          <Route path='/login' component={Login}/>
          <Route path='/form' component={Form}/>
          <Route path='/notifications' component={Notifications}/>
          <Route path='/buttons' component={Buttons}/>
          <Route path='/text' component={Text}/>
          <Route path='/cards' component={Cards}/>
      
        </Switch>
        
        <Footer/>
      
      </Router>
      
    </div>
  );
}

export default App;
