import React,{Component} from 'react';

class Contact extends React.Component{
    state  = {
        word:'Contact'
    }
    render(){
        return(
            <h1>{this.state.word}</h1>
        )
    }
}

export default Contact;