import React,{Component} from 'react';

class Home extends React.Component{
    render(){
        return(
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
        )
    }
}

export default Home;