import React from 'react';
import './App.css';
import Jwt from "jwt-decode";
import {Redirect ,NavLink, Route, Switch } from "react-router-dom";
import University from './Navigation/University'
import Home from './Navigation/Home'
import JoinState from '../src/Navigation/JoinState'
import Cookies from 'js-cookie';


class App extends React.Component {
    
    render() {
        
        return (
            
                <><div className = "bar">
                     <NavLink exact className ="nav" activeClassName = "active_class" to = "/student" style ={{color : 'white',marginRight :30,marginLeft :30,textDecoration : 'none'}}>Students</NavLink>
                    <NavLink data-testid = "nav1" exact className ="nav" activeClassName = "active_class" to = "/university" style ={{color : 'white',marginRight :30,marginLeft :30,textDecoration : 'none'}}>University</NavLink>
                    <NavLink exact className ="nav" activeClassName = "active_class" to = "/groupbyuniversity" style ={{color : 'white',marginRight :30,marginLeft :30,textDecoration : 'none'}}>Students By University</NavLink>
                    <label style ={{color:'orange',fontSize:'20',position:'absolute',right:100}}>{Jwt(Cookies.get('token')).firstName}</label>
                    <NavLink exact to = "/" style ={{color : 'white',marginRight :30,marginLeft :30,textDecoration : 'none'}}><label style = {{color : 'yellow', cursor : 'pointer',position:'absolute',right:50,top:5}}><span data-testid ="delete-students" ><i className ="material-icons" data-toggle="tooltip" title ="Log Out" onClick = {this.props.logout}>logout</i></span></label></NavLink>
                   
                    
                
                </div>
                
                <Switch>
                <Route exact path ="/student">
                        {Cookies.get('token') ? <Home/> : <Redirect to ="/" />}
                </Route>
                <Route exact path ="/university">
                        {Cookies.get('token') ? <University/> : <Redirect to ="/" />}
                </Route>
                <Route exact path ="/groupbyuniversity">
                        {Cookies.get('token') ? <JoinState/> : <Redirect to ="/" />}
                </Route>
                    {/* <Route exact path ="/student" component = {Home}></Route>
                    <Route exact path ="/university" component = {University}></Route>
                    <Route path = "/groupbyuniversity" component = {JoinState}/> */}
                </Switch>
          </>

        );
        
    }
}
export default App;