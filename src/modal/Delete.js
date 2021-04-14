import React from 'react';
import './index.css';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';

export default class Delete extends React.Component {

    render() {
        return (<>

            <div data-testid = "deleteform-students" className="modal1">
                <div className="cross">
                    <label  style = {{cursor : 'pointer'}}><span data-testid = "crossmodal-students" onClick= {this.props.state} title="Close Modal"><h1 style= {{color : 'red'}}>×</h1></span></label>
                </div>
                <form action="#">
                <center>
                    	<h1>Confirm Delete</h1>
                        <p data-testid = "pmodal-students" id="dell">Are you really want to delete {this.props.rowdata.name} record with id {this.props.rowdata.id} ?</p>
                        <button type="button" data-testid = "closemodal-students" style={{width : 90, height :35, fontSize : 13, color : 'white'}} onClick= {this.props.state} className="cancelbtn btn btn-warning">Cancel</button>&nbsp;&nbsp;&nbsp;&nbsp;


                    <button type="button" style={{width : 90, height :35, fontSize : 13, color : 'white'}} data-testid = "deletemodal-students" onClick = {() =>{ this.props.state(); this.props.click(this.props.index,this.props.rowdata.id)} } className="deletebtn btn btn-danger">Delete</button>
	            </center>
                </form>
            </div >
       </> )
    }
}