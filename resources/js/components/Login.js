import React from 'react';
import swal from 'sweetalert';
import jwt from 'jsonwebtoken';
import {useHistory,Redirect} from 'react-router-dom';
import Navbar from './Navbar';
//import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import {base_url,csrf_token} from '../Constant';
import axios from 'axios';
class Login extends React.Component {
	constructor(){
		super();
		this.state = {
			LoginActive: true,
			registerActive: false,
			heightChange:null,
			fields:{},
			error:{},
			lfields:{},
			lerror:{},
			loginUser:'',
		};
	} 
	
	showByClick(index){
		if ( index ) {
			this.setState({ LoginActive: true,registerActive: false,fields:{},error:{},lfields:{},lerror:{} })
		}else{
			this.setState({ LoginActive: false,registerActive: true,fields:{},error:{},lfields:{},lerror:{} })
		}
	}

	loginValidation(){
		let lfields = this.state.lfields;
		let lerror = {};
		let loginStatus = true;
		if ( ( !lfields['email'] || typeof lfields['email'] == "undefined") || (!lfields['password'] || typeof lfields['password'] == "undefined" ) ) {
			loginStatus = false;
			lerror['invalid'] = 'Invalied Email and password';
		}
		this.setState({lerror:lerror});
		return loginStatus;
	}

	loginHandle(lVal,e){
		let lfields = this.state.lfields;
		lfields[lVal] = e.target.value;
		this.setState({lfields});
	}

	loginForm(e){
		e.preventDefault();
		if( this.loginValidation() ){
			/*let bodyFormData = new FormData();
			bodyFormData.set('email',this.state.lfields['email']);
			bodyFormData.set('password', this.state.lfields['password']);*/

			 axios.post(`${base_url}/api/login`,JSON.stringify(this.state.lfields),{
            		headers: {
              				'Content-Type': 'application/json',
              				'X-CSRF-TOKEN':csrf_token
          		}
	        })
	        .then((response) => {
	        	console.log(response.data.success['token']);
	            localStorage.setItem('u',response.data.success['token']);
				this.props.history.push('/dashboard');

	        })
	        .catch((error) => {
	        	console.log( error );
	            swal({ title:'Opps!',
	           		   text: 'Something whats wrong. PLease Try again',
	           		    icon: "error",
	           			button:true
	       		})
	       		this.setState({lfields:{}});
	        });
		}
	}
	handleValidate(){
		let fields = this.state.fields;
		let error = {};
		let formValid = true;
		if ( fields['name'] && typeof fields["name"] != "undefined" ) {
			if( fields['name'].length < 3 || fields['name'].length > 20 ){
				formValid = false;
				error['name'] = "Please Enter more then 3 charters and less then 20 charters";	
			}
		}else{
			formValid = false;
			error['name'] = "Please Enter Your Name";
		}
		if ( !fields['mobile'] || typeof fields["mobile"] == "undefined" ) {
			formValid = false;
			error['mobile'] = "Please Enter Your Mobile No";
		}
		if ( fields['email'] && typeof fields["email"] !== "undefined" ) {
			if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fields["email"]))){
   				formValid = false;
				error['email'] = "Please Enter Valid Email";
  			}
		}else{
			formValid = false;
			error['email'] = "Please Enter Your Email";
		}
		if ( fields['password'] && typeof fields["password"] !== "undefined" ) {
			if ( fields['password'].length < 7 ) { 
				formValid = false;
				error['password'] = "Your password is less then 8";	
			}
		}else{
			formValid = false;
			error['password'] = "Please Enter Your password";
		}
		if ( fields['c_password'] && typeof fields["c_password"] != "undefined" ) {
			if ( fields['c_password'] != fields['password'] ) {
				formValid = false;
				error['c_password'] = "Your password not match";		
			}
		}else{
			formValid = false;
			error['c_password'] = "Please Enter Your Confirm Password";	
		}
		this.setState({error: error});
       	return formValid;
	}
    handleChange(field, e){
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }
	userRegister(e){
		e.preventDefault();
		if(this.handleValidate()){
			axios.post(`${base_url}/api/register`,this.state.fields,{
				header:{
					"Accept": "application/json",
	           		"Contact-type":"application/json",
	           		"X-CSRF-TOKEN":csrf_token.content		
				}
			}).then((resp) => {
					if( resp.success['status'] == 1 ){
           				swal({
           					title:'Done!',
           					text: 'Add Successfully',
           					icon: "success",
           					button:true
           				});
						this.setState({ LoginActive: true,registerActive: false,fields:{},error:{}});
           			}else{
           				if( typeof resp.exist !== 'undefined' ){
           					this.setState({error:{'email':`${resp.exist} is already exist.Please try another`}});
           				}else{
           					swal({
	           					title:'Opps!',
	           					text: `${resp.message}`,
	           					icon: "error",
	           					button:true
           					});
           				}
           			}

			}).catch((error)=> {
				console.log( error );
			})
        }
	}

	render() {
		/*if ( localStorage.getItem('u') ) {
			return <Redirect to="/dashbaord" />
		}*/
		return(
			<div>
			<Navbar />
				<div className={ this.state.registerActive?'l-box-changeh login-box':'login-box' }>
				    <div className="lb-header">
				      <a href={void(0)} style={{cursor:"pointer"}} className="active" id="login-box-link" onClick={()=>this.showByClick(1)}>Login</a>
				      <a href={void(0)} style={{cursor:"pointer"}} id="signup-box-link" onClick={()=>this.showByClick(0)}>Sign Up</a>
				    </div>
				    <div className="social-login">
				      <a href="#">
				        <i className="fa fa-facebook fa-lg"></i>
				        Login in with facebook
				      </a>
				      <a href="#">
				        <i className="fa fa-google-plus fa-lg"></i>
				        log in with Google
				      </a>
				    </div>
				    <form className= { this.state.LoginActive?'email-login':'email-login loginShow'} onSubmit={this.loginForm.bind(this)} >
				      <span className="login-error">{this.state.lerror['invalid']}</span>
				      <div className="u-form-group">
				        <input type="email" placeholder="Email" name="email" value={this.state.lfields['email']||''}
				        		onChange={this.loginHandle.bind(this,'email')}	/>
				      </div>
				      <div className="u-form-group">
				        <input type="password" placeholder="Password" name="password" value={this.state.lfields['password']||''}
				        		onChange={this.loginHandle.bind(this,'password')}
				        />
				      </div>
				      <div className="u-form-group">
				        <button>Log in</button>
				      </div>
				      <div className="u-form-group">
				        <a href="#" className="forgot-password">Forgot password?</a>
				      </div>
				    </form>
				    <form className={ this.state.registerActive?'email-signup registerActive':'email-signup'} onSubmit={this.userRegister.bind(this)}>
				      <div className="u-form-group">
				        <input type="text"  placeholder="Name" name="name"  value={this.state.fields['name']||''} onChange={this.handleChange.bind(this,'name')}/>
				        <br /><span>{this.state.error['name']}</span>
				      </div>
				      <div className="u-form-group">
				        <input type="text" placeholder="Mobile" name="mobile"  value={this.state.fields['mobile']||''} onChange={this.handleChange.bind(this,'mobile')}/>
				        <br /><span>{this.state.error['mobile']}</span>
				      </div>
				      <div className="u-form-group">
				        <input type="email" placeholder="Email" name="email"  value={this.state.fields['email']||''} onChange={this.handleChange.bind(this,'email')}/>
				        <br /><span>{this.state.error['email']}</span>
				      </div>
				      <div className="u-form-group">
				        <input type="password" placeholder="Password" name="password"  value={this.state.fields['password']||''} onChange={this.handleChange.bind(this,'password')}/>
				        <br /><span>{this.state.error['password']}</span>
				      </div>
				      <div className="u-form-group">
				        <input type="text" placeholder="Confirm Password" name="c_password"  value={this.state.fields['c_password']||''} onChange={this.handleChange.bind(this,'c_password')}/>
				        <br /><span>{this.state.error['c_password']}</span>
				      </div>
				      <div className="u-form-group">
				        <button>Sign Up</button>
				      </div>
				    </form>
				  </div>
			</div>
		)
	}
}

export default Login;