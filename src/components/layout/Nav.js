import React,{Component} from 'react'
import {Link} from 'react-router-dom';
class Nav extends React.Component{
    render(){
        return(
    <div id="nav_bar">
        <nav className="en">
          <Link to='/' data-hover="Home" className="home-link">
            <i className='fas fa-home'></i>
          </Link>
          <Link to='/about' data-hover="About" className="home-link">
            <i className='fas fa-user'></i>
          </Link>
          <Link to='/skills' data-hover="Skills" className="home-link">
            <i className='fas fa-signal'></i>
          </Link>
          <Link to='/work' data-hover="Work" className="home-link">
            <i className='fas fa-briefcase'></i>
          </Link>
          <Link to='/contact' data-hover="Contact" className="home-link">
            <i className='fas fa-envelope'></i>
          </Link>
        </nav>
        <ul>
          <li>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
          </li>
          <li>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
          </li>
        </ul>
        </div>
        )
    }
}

export default Nav;