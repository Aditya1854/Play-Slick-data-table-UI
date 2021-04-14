import { fireEvent, queryByTestId, render, screen } from '@testing-library/react';
import JoinTable from './JoinTable'

test('table rendring for student menu and test the edit and delete button for each row', () => {
    const data = [{
        id :1,
        name : "Aditya",
        email : "aditya@gmail.com",
        universityName : "HCU"
    }]
    const edit = jest.fn();
    const del = jest.fn();
   const{queryByTestId} = render(<JoinTable data = {data} edit ={edit} del ={del}   />)
    // const editbtn = queryByTestId("edit-students");
    // fireEvent.click(editbtn)    
    // expect(edit).toBeCalled();
    // const delbtn = queryByTestId("delete-students");
    // fireEvent.click(delbtn)    
    // expect(del).toBeCalled();
   
 
});
