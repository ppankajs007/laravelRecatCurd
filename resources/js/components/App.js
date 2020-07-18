import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import Logout from './Logout';
import Protacted from './Protacted'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends React.Component {
    render(){
        return (
            <Router>
                <Header />
                      <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/logout" component={Logout} />
                        <Protacted path="/" component={Dashboard} />
                      </Switch>
            </Router>
        )
    }
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
