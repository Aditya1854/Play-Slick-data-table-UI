import React from 'react';
import './index.css';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';

export default class Add extends React.Component {
    render() {
        console.log(this.props.rowdata)
        return (

            <>
                <div data-testid ="editform-university" className="modal3">
                    <div className="cross">
                        <label style={{ cursor: 'pointer' }} ><span data-testid = "crossmodal-university" onClick={this.props.state} className="close" title="Close Modal"><h1 style={{ color: 'red', fontSize: 35 }}>×</h1></span></label>
                    </div>
                    <form id="add" action="#" noValidate>
                        <center><h3 >Edit University</h3></center><br></br>
                        <label style = {{marginLeft : '11%' }}>UniversityId :</label><br></br>
                         <input type="number" data-testid = "input1" ref = {(universityId) => this.universityId = universityId} style = {{marginLeft : '11%' ,width : '76%'}} defaultValue ={this.props.rowdata.id} required />
                        <br></br>
                         <br></br> 
                         <label style = {{marginLeft : '11%' }} className='warning' id='universityId_error'></label><br></br>
                        <label style = {{marginLeft : '11%' }}>University Name :</label><br></br>
                        <input type="text" data-testid = "input2" ref={(name) => this.name = name} style = {{marginLeft : '11%',width : '76%'}} defaultValue ={this.props.rowdata.name} required /><br></br>
                        <br></br>
                        <label style = {{marginLeft : '11%' }} className='warning' id='name_error'></label><br></br>
                        <label style = {{marginLeft : '11%' }}>location :</label><br></br>
                        <input type="text" data-testid = "input3" ref={(location) => this.location = location} style = {{marginLeft :'11%',width : '76%'}} defaultValue ={this.props.rowdata.location} required /><br></br>
                        <br></br> 
                        <label style = {{marginLeft : '11%' }} className='warning' id='location_error'></label><br></br>
                         
                         <div className='d-flex justify-content-center' >

                            <input type="submit" style={{ width: 90, height: 35, fontSize: 13, color: 'white' }} id="addNew" className="btn btn-success" data-testid = "editmodal-university" onClick={() => { this.props.state(); return this.props.click(this.props.index,this.universityId.value,this.name.value, this.location.value, this.props.rowdata.counts) }} value="Edit" /><label>&nbsp;&nbsp;&nbsp;&nbsp;</label>

                            <span data-testid = "closemodal-university" onClick={this.props.state}><label></label><button style={{ width: 90, height: 35, fontSize: 13, color: 'white' }} className="btn btn-warning">Close</button></span>
                        </div>

                    </form>
                </div>
            </>

        );
    }

}
