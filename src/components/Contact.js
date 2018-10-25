import React,{Component} from 'react';
import Particles from 'react-particles-js';

const particleOptions = {
    particles:{
        number:{
            value:150,
            density:{enable:true,value_area:800}
        }
    }
}
class Contact extends React.Component{
    state  = {
        email:'',
        message:'',
        name:''
    }


    render(){
        return(
    <div className="container-fluid">
        <div class="form-container">
            <form id="contact" action="https://formspree.io/mohamedr201@gmail.com" method="POST">
              <h3>Contact Me</h3>
              <fieldset>
                <input name="name" placeholder="Your name" type="text" tabindex="1" required autofocus/>
              </fieldset>
              <fieldset>
                <input name="email" placeholder="Your Email Address" type="email" tabindex="2" required/>
              </fieldset>
              <fieldset>
                <textarea name="message" placeholder="Type your message here...." tabindex="5" required></textarea>
              </fieldset>
              <fieldset>
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
              </fieldset>
            </form>
          </div>
    </div>

        )
    }
}

export default Contact;

