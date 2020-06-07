import React from 'react';
import Signin from "./Signin";
import Login from "./Login";
import SigninDone from "./SigninDone";
import Main from "./Main";
import LoginDone from "./LoginDone";
import { Route, Link } from 'react-router-dom'

const App = () =>{
    return(
        <div>
            <Route path="/" component={Main} exact={true} />
            <Route path="/Signin" component={ Signin } />
            <Route path="/Login" component={ Login } />
            <Route path="/SigninDone/:ID" component={ SigninDone } />
            <Route path="/LoginDone/:ID" component={ LoginDone } />
        </div>
    )
}

export default App;
