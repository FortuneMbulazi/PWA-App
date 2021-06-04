import './App.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch, Router } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Users from './Components/Users';
import Help from './Components/Help';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      {/* This is the nav bar start*/}
      <header className="text-gray-600 body-font bg-blue-400">
        <Router>
          <span className="ml-3 text-xl text-white">PWA'S</span>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-white justify-center">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/users">Users</Link>
            <Link to="/help">Help</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          {/*Adding the switch for the navigation bar*/}
          <Switch>
            <Route path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/users" component={Users}></Route>
            <Route path="/help" component={Help}></Route>
            <Route path="/contact" component={Contact}></Route>
          </Switch>
          </Router>
      </header>
    </>
  )
}

export default App;