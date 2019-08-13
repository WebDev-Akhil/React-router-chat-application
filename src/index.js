import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import LoginComponent from './login/login';
import SignupComponent from './signup/signup';
import DashboardComponent from './dashboard/dashboard';

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyCwcNgZcPGUuMdPetDjQzIrgOgZsw6yrE4",
    authDomain: "chat-application-af267.firebaseapp.com",
    databaseURL: "https://chat-application-af267.firebaseio.com",
    projectId: "chat-application-af267",
    storageBucket: "chat-application-af267.appspot.com",
    messagingSenderId: "756596779838",
    appId: "1:756596779838:web:364fad108901a5b1"
});


const routing = (

    <Router>
        <div id='routing-container'>
            <Route path='/login' component={LoginComponent}></Route>
            <Route path='/signup' component={SignupComponent}></Route>
            <Route path='/dashboard' component={DashboardComponent}></Route>
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
