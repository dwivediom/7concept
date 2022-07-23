import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  componentDidMount(){ 
    const elems = window.document.querySelectorAll('.sidenav');
    const options = {draggable:true};
    window.M.Sidenav.init(elems, options);
      
     
  }

  render() {
    return (
      <div>
      <nav>
    <div className="nav-wrapper">
    <Link to="#!" data-target="slide-out" className= "sidenav-trigger show-on-large"><i className= "material-icons">menu</i></Link>

      <Link to="/7concept" className= "brand-logo">Logo</Link>
      
		
      <ul id="nav-mobile" className= "right hide-on-med-and-down">
        <li><Link to="/reacthooks">React Hooks</Link></li>
        <li><Link to="/usereducer">useReducer</Link></li>
        <li><Link to="collapsible.html">JavaScript</Link></li>
      </ul>
    </div>
  </nav>
      
       {/* for mobile */}
       <ul id="slide-out" className= "sidenav">
    <li><div className= "user-view">
      <div className= "background">
        <img src="images/office.jpg"/>
      </div>
      <a href="#user"><img className= "circle" src="images/yuna.jpg"/></a>
      <a href="#name"><span className= "white-text name">John Doe</span></a>
      <a href="#email"><span className= "white-text email">jdandturk@gmail.com</span></a>
    </div></li>
    <li><a href="#!"><i className= "material-icons">cloud</i>First Link With Icon</a></li>
    <li><Link to="/reacthooks">React Hooks</Link></li>
    <li><div className= "divider"></div></li>
    <li><a className= "subheader">Subheader</a></li>
    <li><a className= "waves-effect" href="#!">Third Link With Waves</a></li>
  </ul>
  
      
      
      
      </div>
    )
  }
}

export default Navbar