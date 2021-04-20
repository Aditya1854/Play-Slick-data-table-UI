import React from 'react';
import '../App.css';
import axios from 'axios';
import Add from '../modal/Add';
import Cookies from 'js-cookie';
import Edit from '../modal/Edit';
import Delete from '../modal/Delete';
import Success from '../modal/Success';
import Table from './table'

class Home extends React.Component {
     //for storing clicked row data and it's id
     rowdata = null;
     id =null;
    //state
    state = {
        student : [],
        university :[],
        add : 'false',
        edit : 'false',
        delete : 'false',
        success : 'false',
        msg : ''
    }
    //create axios 
    api = axios.create({
        baseURL : 'http://localhost:9000/student',
        headers : {
            Authorization : `Bearer ${Cookies.get('token')}`
        }
    })
    api1 = axios.create({
        baseURL : 'http://localhost:9000/university',
        headers : {
            Authorization : `Bearer ${Cookies.get('token')}`
        }
    })

   // adding data
    adding = (tname,temail,tDOB,tuniversity,tuniversityId) =>{
        let sdata ={
            id :0,
            name: tname,
            email : temail,
            DOB : tDOB,
            universityId : parseInt(tuniversityId)
        }
        
        this.api.post('/',sdata).then(res =>{    
        if(res.data > 0)  {
                sdata ={
                    id :res.data,
                    name: tname,
                    email : temail,
                    DOB : tDOB,
                    universityName : tuniversity
                }  
                let temp = [...this.state.student]
                this.setState({
                    student : [...temp,sdata],
                    success : 'true',
                    msg : 'Added Succesfully'
                })  
        }
    })
        
    }
// editing data
editing = (index,tid,tname,temail,tDOB,tuniversity,tuniversityId) =>{
    console.log("hmm : "+tDOB)
    let sdata ={
        id :tid,
        name: tname,
        email : temail,
        DOB : tDOB,
        universityId : parseInt(tuniversityId)
    }   
    this.api.put('/',sdata).then(res =>{    
        console.log("hello"+res.data)
        if(res.data === 1)
        {
            sdata ={
                id :tid,
                name: tname,
                email : temail,
                DOB : tDOB,
                universityName : tuniversity
            }  
            console.log(sdata) 

                let temp = [...this.state.student]
                temp[index] = sdata
                this.setState({
                    student : [...temp],
                    success:'true',
                    msg : 'Edited Succesfully'
                })   
        }
     })
        
}
//deleting
deleting = (index,tid) =>{
         
    this.api.delete('/'+ tid).then(res =>{ 
                   
        let temp = [...this.state.student]
        temp.splice(index,1);
        this.setState({
            student : [...temp],
            success:'true',
            msg : 'Deleted Succesfully'
        })
        
    })
}
//fetch all
    componentDidMount() {
        
       let output = ''
       this.api.get('/creator').then(res => {
           let ConvertedDate = res.data.map((element) => String(new Date(element.DOB).getFullYear())+ "-" + String(new Date(element.DOB).getMonth() + 1).padStart(2,'0') + "-" + String(new Date(element.DOB).getDate()).padStart(2,'0') )
           for(let i = 0; i < res.data.length; i++)
           {
               res.data[i].DOB = ConvertedDate[i]
           }
           output = res.data;
        this.setState({
            student : [...output]

        })
        })
        this.api1.get('/list').then(res => {
            output = res.data;
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
    const dt = {id : data.id, name : data.name, email : data.email,DOB:data.DOB, universityName : data.universityName};
    this.rowdata = dt;
    this.id = data.tableData.id;
    
}
deltrue =(data) =>{
    this.setState({ delete : 'true'})
    const dt = {id : data.id, name : data.name, email : data.email, universityName : data.universityName};
    this.rowdata = dt;
    this.id = data.tableData.id;
    
}
    render() {
        return (
            <div className="MainDiv" style ={{fontSize :13}}>
            <Table data = {this.state.student} edit ={this.edittrue} del ={this.deltrue} />
                
                <div className = 'd-flex justify-content-center' >
                <p><span data-testid = "add-students" onClick = {() => this.setState({ add : 'true'})}  ><button className="btn btn-success" style = {{width : 130, height :35, fontSize : 13, color : 'white'}}>Add New Student</button></span></p>
                </div>
                <div>
                    {
                        this.state.add === 'true' ? <Add list = {this.state.university} click = {this.adding} state = {this.close}/> : null
                    }
                </div>
                <div>
                    {
                        
                        this.state.edit === 'true' ? <Edit list = {this.state.university} index = {this.id} click = {this.editing} rowdata = {this.rowdata}  state = {this.close}/> : null
                        
                    }
                </div>
                <div>
                    {
                        
                        this.state.delete === 'true' ? <Delete index = {this.id} click = {this.deleting} rowdata = {this.rowdata}  state = {this.close}/> : null
                        
                    }
                </div>
                <div>
                    {
                        

                        
                        this.state.success === 'true' ? <Success calling = {this.clear()} mesg = {this.state.msg}  /> : null
                        // state = {this.close}
                        
                    }
                </div>                     
            </div>

        );
        
    }
}
export default Home;