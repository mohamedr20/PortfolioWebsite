import React,{Component} from 'react';

class Work extends React.Component{
    state  = {
        word:'Work'
    }
    render(){
        return(
            <h1>{this.state.word}</h1>
        )
    }
}

export default Work;