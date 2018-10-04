import React,{Component} from 'react';

class About extends React.Component{
    state  = {
        word:'About'
    }
    render(){
        return(
            <h1>{this.state.word}</h1>
        )
    }
}

export default About;