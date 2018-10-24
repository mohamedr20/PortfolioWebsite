import React,{Component} from 'react';
import Particles from 'react-particles-js';
class Home extends React.Component{
    render(){
        return(
        <div className="container-fluid">
          <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="welcome-text">
            <h1 className="home-text">
                Hello,
                <br></br>
                I'm Mohamed,
                <br></br>
                web developer.
              </h1>
              <h2 className="welcome-header">Front End Developer / React / Angular</h2>
              <button type="button" className="btn contact-btn btn-outline-dark">Contact Me</button>
            </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="logo-container">
                <i className="App-logo fab fa-react"></i>
                <i className="fab fa-angular"></i>
              </div>
            </div>
            </div>
            </div>

        )
    }
}

export default Home;