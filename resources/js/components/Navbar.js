import React from 'react';
import { Route,Link,NavLink,Redirect,useHistory  } from "react-router-dom";
class Navbar extends React.Component {
	constructor(){
		super();
		this.state = {
			'afterLogout':false
		}
	}
	render() {	
		return(
			<div>
				<header>
			<div className="header-area">
			            <div className="main-header ">
					  <div className="header-bottom header-sticky">
			                    <div className="container">
			                        <div className="row align-items-center">
			                            <div className="col-xl-10 col-lg-10 col-md-12 header-flex">
			                                    <div className="sticky-logo">
			                                        <a href="/"><img src={ require('./img/logo/logo.png')} /></a>
			                                    </div>
			                                    <div  >
			                                    
			                                    </div>
			                                <div className="main-menu d-none d-md-block">
			                                    <nav>                  
			                                        <ul id="navigation">    
			                                        <nav>
			                                            <li><NavLink to="">Home</NavLink></li>
			                                            <li><a href="categori.html">Category</a></li>
			                                            <li><a href="about.html">About</a></li>
			                                            <li><a href="latest_news.html">Latest News</a></li>
			                                            <li><NavLink to="/contact">Contact</NavLink></li>
			                                            { localStorage.getItem('u') !== null ?
			                                            			<li><NavLink to="/dashboard">Dashboard</NavLink></li>
			                                         			:
			                                         			null
			                                         			 
			                                            }
			                                            <li>{ localStorage.getItem('u') !== null ?
			                                            			<NavLink to="/logout">Logout</NavLink>
			                                         			:
			                                         				<NavLink to="/login">Login</NavLink>
			                                         			 
			                                            	}
			                                            </li>
			                                          </nav>
			                                        </ul>
			                                    </nav>
			                                </div>
			                            </div>             
			                            <div className="col-xl-2 col-lg-2 col-md-4">
			                                <div className="header-right-btn f-right d-none d-lg-block">
			                                    <i className="fas fa-search special-tag"></i>
			                                    <div className="search-box">
			                                        
			                                    </div>
			                                </div>
			                            </div>
			                            <div className="col-12">
			                                <div className="mobile_menu d-block d-md-none"></div>
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

export default Navbar;