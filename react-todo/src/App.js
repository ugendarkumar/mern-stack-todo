import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";


import logo from './logo.svg'

import ListTodo from './components/list-todo';
import CreateTodo from './components/create-todo';
import EditTodo from './components/edit-todo';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
       
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <a className="navbar-brand" href="www.google.com" target="_blank"> 
        <img src={logo} height="30px" width="30px" alt="logo"/>
       </a>


   <Link to="/" className="navbar-brand">MERN stack todo app</Link>
   <div className="collapse nav-collapse">
   <ul className="navbar-nav mr-auto">
   <li className="navbar-item">
   <Link to="/" className="nav-link">Todos</Link>
   </li>
   <li className="navbar-item">
   <Link to="/create" className="nav-link">Create Todos</Link>
     </li>
   </ul>
   </div>
   </nav>
       <Route path="/" exact component={ListTodo}></Route>
      <Route path="/edit/:id" component={EditTodo}></Route>
      <Route path="/create" component={CreateTodo}></Route>     
      </div>
      </Router>
    );
  }
}

export default App;
