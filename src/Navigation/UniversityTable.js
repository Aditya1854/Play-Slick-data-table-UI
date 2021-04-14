import React, { Fragment} from "react";
import MaterialTable, {MTableToolbar} from "material-table";
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
const theme = createMuiTheme({
    overrides: {
      MuiTableSortLabel: {
        root: {
          color: '#fff',
          '&:hover': {
            color: '#bbdefb',
          },
        },
        active: {
          color: '#bbdefb',
        },
      },
      MuiTableRow: {
        root: {
          "&:hover": {
            backgroundColor: "rgba(125, 145, 242, 0.2)"
          }
        }
      },
     
      
     
    },
  });
  //,defaultGroupOrder: 1


const Table = (props) =>{

    const tableColumns = [
        { title: "University Id", field: "id" },
        { title: "University Name", field: "name" },
        { title: "Location", field: "location" },
        { title: "#Students", field: "counts" },
        {
          title : "Edit",
          field : "internal_action",
          render : (rowData) => {
              return <label style = {{color : 'orange', cursor : 'pointer'}} className ="classes.edit"><span data-testid = "edit-university" onClick = {() => {props.edit(rowData)}}><i className ="material-icons" data-toggle="tooltip" title ="Edit">edit</i></span></label>
          }
      },
      {
          title : "Delete",
          field : "internal_action",
          render : (rowData) => {
              return <label style = {{color : 'Red', cursor : 'pointer'}}><span data-testid = "delete-university" onClick = { () =>{props.del(rowData)}} ><i className ="material-icons" data-toggle="tooltip" title ="Delete">delete</i></span></label>
          }
      }
       
    ];
   
    return (
        <Fragment>
            <MuiThemeProvider theme={theme}>
        <MaterialTable
            columns={tableColumns}
            data={props.data}
            components={{
              Toolbar: props => (
                <div style = {{height : 110}}> 
                  <MTableToolbar {...props} />
                  <div style={{padding: '0px 10px',textAlign : 'center' ,fontSize : 40, color : 'darkcyan'}}><label>University Data</label></div>
                  
                </div>
              ),
            }}
            
            options={{
                exportButton: true,
               // grouping : true,
                showTitle: false,
                paging:true,
                pageSize:6,       // make initial page size
                emptyRowsWhenPaging: true,   //to make page size fix in case of less data rows
                pageSizeOptions:[6,12,20,50],    // rows selection options  
                
                searchFieldStyle :{
                  fontSize : 15,
                  zIndex : 10000,
                  backgroundColor : 'white',
                  position : 'fixed',
                   top : 10,
                   right : 220,
                  
                  
                },
            headerStyle: {
                backgroundColor: 'darkcyan', 
                fontSize : 15,
                color: '#fff',
                cursor : 'pointer',
                
                '&:hover': {
                  color: '#bbdefb',
                  cursor : 'pointer',
                },
              } ,
              rowStyle :{

                fontSize :13,
                border :1, borderColor : 'green',
                '&hover': {
                    color: '#bbdefb',
                    cursor : 'pointer',
                  },
              } ,
              
         }}   
        /></MuiThemeProvider></Fragment>
    );
        }
export default Table 

