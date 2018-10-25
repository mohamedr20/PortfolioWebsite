import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Skills extends React.Component{
    state  = {
        word:'Skills'
    }
    render(){
        return(
            <div className="container-fluid">
            <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="welcome-text">
              <h2 className="about-header">Skills</h2>
              <h4 className="skills-text">
                  My main area of expertise is in front-end development.
                  Creating static web pages with HTML,CSS & JS to building 
                  medium-large size SPA's with React/Angular are things I am
                  comfortable with.
                  <br></br>
                  <br></br>
                  I do have some experience with Node and have used it in the 
                  proffesional workspace and in personal projects to build 
                  RESTFUL endpoints for my client side applications.
                  <br></br>
                  <br></br>
                  Would you like to know more?
                  Please check my <a className="link" href="">LinkedIn</a> profile or just shoot me
                  an <Link to="/contact"><a className="link" href="#">email.</a></Link>
              </h4>
              </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="skills-container">
                  <i className="fab fa-react"></i>
                  <i className="fab fa-angular"></i>
                  <i className="fab fa-js"></i>
                  <i className="fab fa-sass"></i>
                  <i className="fab fa-node"></i>
                  <i className="fab fa-npm"></i>
                </div>
              </div>
              </div>
              </div>    
        )
    }
}

export default Skills;