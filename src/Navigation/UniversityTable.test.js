import { fireEvent, queryByTestId, render, screen } from '@testing-library/react';
import UniversityTable from './UniversityTable'

test('table rendring for university menu and test the edit and delete button for each row', () => {
    const data = [{
        name : "HCU",
        location : "hyderabad",
        website : "www.hcu.com",
        contact : "873443",
        counts : "8"
    }]
    const edit = jest.fn();
    const del = jest.fn();
   const{queryByTestId} = render(<UniversityTable data = {data} edit ={edit} del ={del}   />)
    const editbtn = queryByTestId("edit-university");
    fireEvent.click(editbtn)    
    expect(edit).toBeCalled();
    const delbtn = queryByTestId("delete-university");
    fireEvent.click(delbtn)    
    expect(del).toBeCalled();
   
 
});
