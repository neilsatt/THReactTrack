import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><NavLink exact to="/" activeStyle={{background: 'tomato'}}>Home</a></NavLink></li>
      <li><NavLink to="/about" activeClassName="actyMcActiveFace">About</a></NavLink></li>
      <li><NavLink to="/teachers">Teachers</a></NavLink></li>
      <li><NavLink to="/courses">Courses</a></NavLink></li>
    </ul>    
  </header>
);

export default Header;