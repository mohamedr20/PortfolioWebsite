import React,{Component} from 'react';
import LogoPic from '../images/logo.svg';
import ProfilePic from '../images/profile.png'


class About extends React.Component{
    state  = {
        word:'About'
    }
    render(){
        return(
            <div className="container-fluid">
            <div className="row">
            <div className="col-lg-6">
            <div className="welcome-text">
            <h2 className="about-header">About Me</h2>
            <h4 className="home-text">
                Got my intro to development through working with a friend at
                his startup. By combing through online tutorials and asking a lot of 
                questions I taught myself HTML,CSS and Javascript. 
                <br></br>
                <br></br>
                From there I've worked with Inveniam Capital Partners as a Javascript
                Engineer. I learned a lot from my senior devs about how to contribute 
                on a team and give feedback during the development lifecycle.
                <br></br>
                <br></br>
                In my spare time when I'm not coding I'm either trying to keep myself active
                playing sports or doing something outdoors. 
            </h4>
            </div>
              </div>
              <div className="col-lg-6">
                <div className="img-container">
                <img className="img-fluid" src={ProfilePic} alt=""/>
                </div>
              </div>
              </div>
              </div>
        )
    }
}

export default About;