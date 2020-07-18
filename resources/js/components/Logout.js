import React from 'react';
import { Route,Link,NavLink,Redirect,useHistory  } from "react-router-dom";

class Logout extends React.Component{
	constructor(props){
		super(props);
		localStorage.clear();
		console.log( 'ooooo' );
	}

	render(){
		return(
			<Redirect to='/login' />
		)
	}

}

export default Logout;