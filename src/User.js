import React from 'react';
import './App.css';
import App from './App'
import Login from './User/login'
import { Route, Switch } from "react-router-dom";

export default class User extends React.Component {
    name = ''
    getname = (userName) =>{
            
            this.name = userName
            console.log(this.name)
    }
    
    render() {
        return (<>
            <Switch>
                    <Route exact path ="/" component = {() => <Login getname = {this.getname}/>}></Route>
                    <Route exact path ="/student" component ={() => <App name = {this.name}/>}></Route>
                    <Route exact path ="/university" component = {() => <App name = {this.name}/>}></Route>
                    <Route path = "/groupbyuniversity" component = {() => <App name = {this.name}/>}/>
                    
            </Switch>    
                 
            </>)   
}

}