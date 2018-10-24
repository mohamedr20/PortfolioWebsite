import React,{Component} from 'react';
import {Col,Form,FormGroup,Label,Input,Button} from 'reactstrap'
class Contact extends React.Component{
    state  = {
        word:'Contact'
    }
    render(){
        return(
        <div className="container-fluid">
            <div className="wrap-contact100">
                <form className="contact100-form validate-form">

                <span class="contact100-form-title">
					Contact Us
				</span>
				<div class="wrap-input100 validate-input" data-validate="Name is required">
					<input class="input100" type="text" name="name" placeholder="Full Name"/>
					<span class="focus-input100-1"></span>
					<span class="focus-input100-2"></span>
				</div>

				<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input class="input100" type="text" name="email" placeholder="Email"/>
					<span class="focus-input100-1"></span>
					<span class="focus-input100-2"></span>
				</div>

				<div class="wrap-input100 validate-input" data-validate = "Message is required">
					<textarea class="input100" name="message" placeholder="Your Message"></textarea>
					<span class="focus-input100-1"></span>
					<span class="focus-input100-2"></span>
				</div>

                <div class="contact100-form-checkbox">
					<input class="input-checkbox100" id="ckb1" type="checkbox" name="copy-mail"/>
					<label class="label-checkbox100" for="ckb1">
						Send copy to my-email
					</label>
				</div>

				<div class="container-contact100-form-btn">
					<button class="contact100-form-btn">
						Send Email
					</button>
				</div>
                
                </form>
            </div>
        </div>

        )
    }
}

export default Contact;