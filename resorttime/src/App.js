import React from 'react';
 import './App.css';
import Error from './pages/Error';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import {BrowserRouter as  Router, Route,Switch,Link} from 'react-router-dom';


import Navbar from './components/Navbar';


function App(){

    return (
      <>
       <Navbar />
      <Switch>
      <Route  exact path="/" component={Home} />
      <Route exact path="/Rooms/"component={Rooms} />
      <Route exact path ="/Rooms/:Room" component={SingleRoom} />
      <Route component = {Error} />
      </Switch>
      </>
      
      
    )
}


export default App