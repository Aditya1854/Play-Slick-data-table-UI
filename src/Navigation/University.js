import React, { Component } from 'react'
import axios from 'axios';
import UniversityTable from './UniversityTable'
import Add from '../modal/AddUniversity';
import Edit from '../modal/EditUniversity';
import Cookies from 'js-cookie';
import Delete from '../modal/DeleteUniversity'
import Success from '../modal/Success';


export default class University extends Component{
      //for storing clicked row data and it's id
      rowdata = null;
      id =null;
     //state
     state = {
         university : [],
         add : 'false',
        edit : 'false',
        delete : 'false',
        success : 'false',
        msg : ''
     }
     //create axios 
     api = axios.create({
         baseURL : 'http://localhost:9000/university',
         headers : {
             Authorization : `Bearer ${Cookies.get('token')}`
         }
     })

     // adding data
    adding = (tid,tname,tlocation) =>{
        let sdata ={
            id : parseInt(tid),
            name : tname,
            location: tlocation,
            counts : 0
        }
        this.api.post('/',sdata).then(res =>{            
            let temp = [...this.state.university]
            this.setState({
                university : [...temp,res.data],
                success : 'true',
                msg : 'Added Succesfully'
            })  
        })
        
    }
// editing data
editing = (index,tid,tname,tlocation,tcount) =>{
    let sdata ={
        id : parseInt(tid),
        name : tname,
        location: tlocation,
        counts : tcount
    }
    this.api.put('/',sdata).then(res =>{          
        let temp = [...this.state.university]
        temp[index] = res.data
        this.setState({
            university : [...temp],
            success:'true',
            msg : 'Edited Succesfully'
        })   
    })
}
//deleting
deleting = (index,tid) =>{
         
    this.api.delete('/'+ parseInt(tid)).then(res =>{ if(res.data === 1) { 
                   
        let temp = [...this.state.university]
        temp.splice(index,1);
        this.setState({
            university : [...temp],
            success:'true',
            msg : 'Deleted Succesfully'
        })  }
        
    })
}
 
 //fetch all
     componentDidMount() {
         
        let output = ''
        this.api.get('/creator').then(res => {
            output = res.data;
            console.log(res.data)
         this.setState({
             university : [...output]
 
         })
         })
 }

 //form close
close = () =>{
    this.setState({add:'false',
                    edit : 'false', delete : 'false'})
}
clear = () =>{
    
    let temp = setInterval(() => {
        this.setState({success : 'false'})
        clearInterval(temp);
      }, 2000);    
}
edittrue = (data) =>{
    this.setState({ edit : 'true'})
    const dt = { id : data.id, name : data.name,location : data.location,counts : data.counts};
    this.rowdata = dt;
    this.id = data.tableData.id;
    
}
deltrue =(data) =>{
    this.setState({ delete : 'true'})
    const dt = {id :data.id, name : data.name};
    this.rowdata = dt;
    this.id = data.tableData.id;
}

     render() {
         return (
             <div className="MainDiv" style ={{fontSize :13}} >
             <UniversityTable data = {this.state.university} edit ={this.edittrue} del ={this.deltrue}/>    
             <div className = 'd-flex justify-content-center' >
                <p><span data-testid = "add-university" onClick = {() => this.setState({ add : 'true'})} ><button className="btn btn-success" style = {{width : 130, height :35, fontSize : 13, color : 'white'}}>Add New University</button></span></p>
                </div>        

                <div>
                    {
                        this.state.add === 'true' ? <Add click = {this.adding} state = {this.close}/> : null
                    }
                </div>
                <div>
                    {
                        
                        this.state.edit === 'true' ? <Edit index = {this.id} click = {this.editing} rowdata = {this.rowdata}  state = {this.close}/> : null
                        
                    }
                </div>
                <div>
                    {
                        
                        this.state.delete === 'true' ? <Delete index = {this.id} click = {this.deleting} rowdata = {this.rowdata}  state = {this.close}/> : null
                        
                    }
                </div>
                <div>
                    {
                        

                        
                        this.state.success === 'true' ? <Success calling = {this.clear()} mesg = {this.state.msg}  state = {this.close}/> : null
                        
                    }
                </div>                     
            </div>

           

             

 
         );
         
     }
    
}
