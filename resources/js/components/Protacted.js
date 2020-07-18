import React from 'react';
import { Route,Redirect } from 'react-router-dom';
const Protacted = ({component:Cmp,...rest}) => (
	<Route 
	{...rest}
		render = {(props)=>
				localStorage.getItem('u')?(
						<Cmp {...props} />
				):
				<Redirect to='/login' />
		}
	/>
);

export default Protacted;