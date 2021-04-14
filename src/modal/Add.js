import React from 'react';
import './index.css';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';

export default class Add extends React.Component {
    universityId = this.props.list[0].id
    constructor(props) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
      }
      onSelect(event) {
        const selectedIndex = event.target.options.selectedIndex;
            console.log(event.target.options[selectedIndex].getAttribute('id'));
            this.universityId = event.target.options[selectedIndex].getAttribute('id')
      }
      print = () =>{
        console.log("hello")
    }

    render() {
        return (

            <>
                <div data-testid = "addpage-students"  className="modal2">
                    <div className="cross">
                    <label  style = {{cursor : 'pointer'}}><span data-testid = "crossmodal-students" onClick={this.props.state} className="close" title="Close Modal"><h1 style={{color  : 'red', fontSize : 35}}>×</h1></span></label>
                       
                    </div>
                    <form id="add" action="#" noValidate>
                        <center><h3 >Add A New Student</h3></center><br></br>
                        <label style = {{marginLeft : '11%' }}>Name :</label><br></br>
                        <input data-testid = "input1" type="text" ref={(name) => this.name = name} style = {{marginLeft : '11%' ,width : '76%'}} required /><br></br>
                        <br></br> 
                        <label style = {{marginLeft : '11%' }} className='warning' id='name_error'></label><br></br>
                        <label style = {{marginLeft : '11%'}}>Email :</label><br></br>
                        <input data-testid = "input2" type="text" ref={(email) => this.email = email} style = {{marginLeft : '11%',width : '76%'}} required /><br></br>
                        <br></br>
                        <label style = {{marginLeft : '11%' }} className='warning' id='email_error'></label><br></br>
                         <label style = {{marginLeft : '11%'}}>DOB :</label><br></br>
                        <input data-testid = "input3" type="date" ref={(DOB) => this.DOB = DOB} style = {{marginLeft : '11%' ,width : '76%'}} required /><br></br>
                        <br></br> 
                        <label style = {{marginLeft : '11%'}} className='warning' id='DOB_error'></label><br></br>
                         <label style = {{marginLeft : '11%' }}>University Name :</label><br></br>
                        
                        <select  onChange = {this.onSelect} ref={(university) => this.university = university} style={{marginLeft : '11%', width: '76%',height : 30 }}>
                           { this.props.list.map((option) => (<option style={{ width: '76%',height : 25 }} value={option.name}  key ={option.id}  id ={option.id}>{option.name}</option>)) }

                            </select>

                        <br></br>
                        <br></br>
                         <div className='d-flex justify-content-center' >

                            <input data-testid = "addmodal-students" type="submit" style={{ width: 90, height: 35, fontSize: 13, color: 'white' }} id="addNew" className="btn btn-success" onClick={() => {this.print(); this.props.state(); return this.props.click(this.name.value, this.email.value,this.DOB.value, this.university.value,this.universityId) }} value="Save" /><label>&nbsp;&nbsp;&nbsp;&nbsp;</label>

                            <span data-testid = "closemodal-students" onClick={this.props.state}><label></label><button style={{ width: 90, height: 35, fontSize: 13, color: 'white' }} className="btn btn-warning">Close</button></span>
                        </div>

                    </form>
                </div>
            </>

        );
    }

}



