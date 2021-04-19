import React from 'react';
import Cookies from 'js-cookie';
import './App.css';
import App from './App'
import Login from './User/login'
import {Redirect, Route, Switch } from "react-router-dom";

export default class User extends React.Component {
    
    settoken = (token) =>{
        Cookies.set('token', token, { expires: 1 });      
    }
    logout = () =>{
            Cookies.remove('token')
    }
    render() {
        return (<>
            <Switch>
                    <Route exact path ="/">
                        {Cookies.get('token') ? <Redirect to="/student" /> : <Login settoken = {this.settoken}/>}
                    </Route>
                    
                 
                    <Route exact path ="/student" component ={() => <App logout = {this.logout}/>}></Route>
                    <Route exact path ="/university" component = {() => <App logout = {this.logout}/>}></Route>
                    <Route path = "/groupbyuniversity" component = {() => <App logout = {this.logout}/>}/>
                    
            </Switch>    
                 
            </>)   
}

}