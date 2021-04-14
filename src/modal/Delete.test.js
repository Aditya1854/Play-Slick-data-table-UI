import { fireEvent, queryByTestId, render, screen } from '@testing-library/react';
import Delete from './Delete'

        it('delete modal for student menu testing delete button', () => {
    
            const data = {
                id : 1,
                name : "aman",
                email : "aman@gmail.com",
                universityName : "Hcu"
            }
            const state = jest.fn();
            const click = jest.fn();
            
           const{queryByTestId} = render(<Delete rowdata ={data}  index = "1" state = {state} click = {click}/>)
          
            const deletebutton = queryByTestId('deletemodal-students');
            fireEvent.click(deletebutton);
           expect(state).toBeCalled();
           expect(click).toBeCalled();
           
          
        });



it('delete modal for student menu testing close button', () => {
    const data = {
        id : 1,
        name : "aman",
        email : "aman@gmail.com",
        universityName : "Hcu"
    }
    const state = jest.fn();
    const click = jest.fn();
    
   const{queryByTestId} = render(<Delete rowdata ={data}  index = "1" state = {state} click = {click}/>)
  
    const closebutton = queryByTestId('closemodal-students');
    fireEvent.click(closebutton);
   expect(state).toBeCalled();
 });
 
it('delete modal for student menu testing cross button', () => {
    const data = {
        id : 1,
        name : "aman",
        email : "aman@gmail.com",
        universityName : "Hcu"
    }
    const state = jest.fn();
    const click = jest.fn();
    
   const{queryByTestId} = render(<Delete rowdata ={data}  index = "1" state = {state} click = {click}/>)
  
    const crossbutton = queryByTestId('crossmodal-students');
    fireEvent.click(crossbutton);
   expect(state).toBeCalled();
 });

 it('delete modal for student menu testing paragraph message printing', () => {
    const data = {
        id : 1,
        name : "aman",
        email : "aman@gmail.com",
        universityName : "Hcu"
    }
    const state = jest.fn();
    const click = jest.fn();
    
   const{queryByTestId} = render(<Delete rowdata ={data}  index = "1" state = {state} click = {click}/>)
   
   const paragraph = queryByTestId("pmodal-students");
   expect(paragraph.innerHTML).toBe("Are you really want to delete aman record with id 1 ?")
    
 });
