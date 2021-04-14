import React from 'react';
import './index.css';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';

export default class Add extends React.Component {

    render() {
        return (

            <>
                <div data-testid = "addpage-university" className="modal2">
                    <div className="cross">
                        <label style={{ cursor: 'pointer' }} ><span data-testid = "crossmodal-university" onClick={this.props.state} className="close" title="Close Modal"><h1 style={{ color: 'red', fontSize: 35 }}>×</h1></span></label>
                    </div>
                    <form id="add" action="#" noValidate>
                        <center><h3 >Add A New University</h3></center><br></br>
                        <label style = {{marginLeft : '11%' }}>University Id :</label><br></br>
                         <input type="text" style = {{marginLeft : '11%',width : '76%'}} data-testid = "input1" ref = {(universityId) => this.universityId = universityId}  required />
                        <br></br>
                         <br></br> 
                         <label className='warning' style = {{marginLeft : '11%' }} id='university_error'></label><br></br>
                        <label style = {{marginLeft : '11%' }}>University Name :</label><br></br>
                        <input type="text" data-testid = "input2" ref={(name) => this.name = name} style = {{marginLeft : '11%' ,width : '76%'}} required /><br></br>
                        <br></br> 
                        <label className='warning' style = {{marginLeft : '11%' }} id='name_error'></label><br></br>
                        <label style = {{marginLeft : '11%' }}>location :</label><br></br>
                        <input type="text" data-testid = "input2" ref={(location) => this.location = location} style = {{marginLeft : '11%' ,width : '76%'}} required /><br></br>
                        <br></br>  
                        <label style = {{marginLeft : '11%' }} className='warning' id='email_error'></label><br></br>
                         <div className='d-flex justify-content-center' >

                            <input data-testid = "addmodal-university" type="submit" style={{ width: 90, height: 35, fontSize: 13, color: 'white' }} id="addNew" className="btn btn-success" onClick={() => { this.props.state(); return this.props.click(this.universityId.value, this.name.value, this.location.value) }} value="Save" /><label>&nbsp;&nbsp;&nbsp;&nbsp;</label>

                            <span data-testid = "closemodal-university" onClick={this.props.state}><label></label><button style={{ width: 90, height: 35, fontSize: 13, color: 'white' }} className="btn btn-warning">Close</button></span>
                        </div>

                    </form>
                </div>
            </>

        );
    }

}
