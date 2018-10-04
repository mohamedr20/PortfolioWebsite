import React,{Component} from 'react';

class Skills extends React.Component{
    state  = {
        word:'Skills'
    }
    render(){
        return(
            <h1>{this.state.word}</h1>
        )
    }
}

export default Skills;