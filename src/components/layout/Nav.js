import React,{Component} from 'react'
import {Link} from 'react-router-dom';

class Nav extends React.Component{
  state = {
    home:"Home",
    about:"About",
    skills:"Skills",
    work:"Work",
    contact:"Contact"
  }



    render(){
        return(
    <div id="nav_bar">
        <nav className="en">
          <Link to='/' data-hover="home" className="home-link">
            <i className='fas fa-home'></i>
            <span className="link-span hidden">{this.state.home}</span>
          </Link>
          <Link to='/about' data-hover="about" className="home-link">
            <i className='fas fa-user'></i>
            <span></span>
          </Link>
          <Link to='/skills' data-hover="skills" className="home-link">
            <i className='fas fa-signal'></i>
          </Link>
          <Link to='/work' data-hover="work" className="home-link">
            <i className='fas fa-briefcase'></i>
          </Link>
          <Link to='/contact' data-hover="contact" className="home-link">
            <i className='fas fa-envelope'></i>
          </Link>
        </nav>
        <ul>
          <li>
              <a href="https://www.linkedin.com/in/mohamed-isse/">
                <i className="fab fa-linkedin"></i>
              </a>
          </li>
          <li>
              <a href="https://github.com/mohamedr20">
                <i className="fab fa-github"></i>
              </a>
          </li>
        </ul>
        </div>
        )
    }
}

export default Nav;