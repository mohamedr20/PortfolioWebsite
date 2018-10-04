import React, { Component } from 'react';
import LogoPic from './logo_size.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="nav_bar">
        <nav className="en">
          <a href="#" className="home-link">
            <i className='fas fa-home'></i>
          </a>
          <a href="#" className="home-link">
            <i className='fas fa-user'></i>
          </a>
          <a href="#" className="home-link">
            <i className='fas fa-signal'></i>
          </a>
          <a href="#" className="home-link">
            <i className='fas fa-briefcase'></i>
          </a>
          <a href="#" className="home-link">
            <i className='fas fa-envelope'></i>
          </a>
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
        <div id="page">
          <div className="container home-page">
            <div className="text-zone">
              <h1 className="home-text">
                Hello,
                <br></br>
                I'm Mohamed,
                <br></br>
                web developer.
              </h1>
              <h2>Front End Developer / React / Angular</h2>
              <a className="contact-button" href="#">Contact Me</a>
            </div>
            <div className="picture-zone">
              <i className="fab fa-react"></i>
              <i className="fab fa-angular"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
