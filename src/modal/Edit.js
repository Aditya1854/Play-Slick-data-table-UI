import React from 'react';
import './index.css';
import  'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';

export default class Edit extends React.Component {
    universityId = this.props.list[0].id
    constructor(props) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
      }
      onSelect(event) {
        const selectedIndex = event.target.options.selectedIndex;
            console.log(event.target.options[selectedIndex].getAttribute('id'));
           console.log(this.newDate)
            this.universityId = event.target.options[selectedIndex].getAttribute('id')

      }
       
        newDate =  String(new Date(this.props.rowdata.DOB).getFullYear()+ "-" + (new Date(this.props.rowdata.DOB).getMonth() + 1) + "-" + new Date(this.props.rowdata.DOB).getDate()) 
       
       
     
    render() {
        return (
            
           <>
                <div data-testid ="editform-students" className="modal3" >
                    <div className="cross">
                        <label  style = {{cursor : 'pointer'}}><span data-testid = "crossmodal-students" onClick={this.props.state} className="close" title="Close Modal"><h1 style={{color  : 'red', fontSize : 35}}>×</h1></span></label>
                    </div>
                    <form id="edit" action="#" noValidate>
                        <center><h3 >Edit Student</h3></center><br></br>
                        
                        <label style = {{marginLeft : '11%' }}>Name :</label><br></br>
                        <input data-testid = "input1" type="text" ref =  {(name) => this.name = name}  style = {{marginLeft : '11%' ,width : '76%'}}  defaultValue ={this.props.rowdata.name} required /><br></br>
                        <br></br> 
                        <label style = {{marginLeft : '11%'}} className='warning' id='name_error1'></label><br></br>
                        <label style = {{marginLeft : '11%'}}>Email :</label><br></br>
                        <input data-testid = "input2" type="text" ref =  {(email) => this.email = email}  style = {{marginLeft : '11%',width : '76%'}} yle={{width : 320}} defaultValue ={this.props.rowdata.email} required /><br></br>
                        <br></br>  
                        <label style = {{marginLeft : '11%'}} className='warning' id='email_error1'></label><br></br>
                        
                         <label style = {{marginLeft : '11%'}}>DOB :</label><br></br>
                        <input data-testid = "input3" type="date" ref={(DOB) => this.DOB = DOB} style = {{marginLeft : '11%' ,width : '76%'}} defaultValue ={this.newDate} required /><br></br>
                        <br></br> 
                        <label style = {{marginLeft : '11%' }} className='warning' id='DOB_error'></label><br></br>
                         <label style = {{marginLeft : '11%' }}>University Name :</label><br></br>
                         <select onChange = {this.onSelect} ref={(university) => this.university = university} style={{marginLeft : '11%' , width: '76%',height : 30 }}>
                         <option style={{ width: '76%',height : 25 }}  value={this.props.rowdata.universityName} key ="vv">{this.props.rowdata.universityName}</option>   
                                     
                             { this.props.list.map((option) => (
                               
                                 <option style={{ width: '76%',height : 25 }}  value={option.name} key ={option.id} id ={option.id}>{option.name}</option>
                               
                                 
                                 
                                 ))}


                            </select>
                         
                         <br></br>
                         <br></br>

                         <div className = 'd-flex justify-content-center' >
                         <input type="submit" data-testid = "editmodal-students" style={{width : 90, height :35, fontSize : 13, color : 'white'}} id="addNew" onClick = {() =>{ this.props.state() ; return this.props.click(this.props.index, this.props.rowdata.id, this.name.value,this.email.value,this.DOB.value,this.university.value,this.universityId)}} className="btn btn-success" value="Edit" /><label>&nbsp;&nbsp;&nbsp;&nbsp;</label>


                         <span data-testid = "closemodal-students" onClick={this.props.state}><label></label><button style={{width : 90, height : 35, fontSize : 13, color : 'white'}} className="btn btn-warning">Close</button></span>
                         </div>
                      
                    </form>
                </div>
            </>

        );
    }

}



