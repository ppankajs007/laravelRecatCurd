import React from 'react';
//import { NavLink,Redirect } from "react-router-dom";
//import Navbar from './Navbar'
class Header extends React.Component {
	constructor(){
		super();
		this.state = {
			'afterLogin':false
		}
	}
	render() {
		return(
			<div>
				<header>
			       <div className="header-area">
			            <div className="main-header ">
			                <div className="header-top black-bg d-none d-md-block">
			                   <div className="container">
			                       <div className="col-xl-12">
			                            <div className="row d-flex justify-content-between align-items-center">
			                                <div className="header-info-left">
			                                    <ul>     
			                                        <li><img src={require('./img/icon/header_icon1.png')} />34ºc, Sunny </li>
			                                        <li><img src={ require('./img/icon/header_icon1.png')} />Tuesday, 18th June, 2019</li>
			                                    </ul>
			                                </div>
			                                <div className="header-info-right">
			                                    <ul className="header-social">    
			                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
			                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
			                                       <li> <a href="#"><i className="fab fa-pinterest-p"></i></a></li>
			                                    </ul>
			                                </div>
			                            </div>
			                       </div>
			                   </div>
			                </div>
			                <div className="header-mid d-none d-md-block">
			                   <div className="container">
			                        <div className="row d-flex align-items-center">
			                            <div className="col-xl-3 col-lg-3 col-md-3">
			                                <div className="logo">
			                                    <a href="/"><img src={ require('./img/logo/logo.png')} /></a>
			                                </div>
			                            </div>
			                            <div className="col-xl-9 col-lg-9 col-md-9">
			                                <div className="header-banner f-right ">
			                                    <img src={ require('./img/hero/header_card.jpg')} />
			                                </div>
			                            </div>
			                        </div>
			                   </div>
			                </div>
			            </div>
			       </div>
			    </header>
			</div>
		)
	}
}

export default Header;