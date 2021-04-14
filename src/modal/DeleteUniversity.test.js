import { fireEvent, queryByTestId, render, screen } from '@testing-library/react';
import DeleteUniversity from './DeleteUniversity'

        it('delete modal for university menu testing close button', () => {  
            const data = {
                name : "HCU",
                location : "hyderabad",
                website : "www.hcu.com",
                contact : "4448555",
                counts : 5
            }
            const state = jest.fn();
            const click = jest.fn();
           const{queryByTestId} = render(<DeleteUniversity rowdata ={data} index = "1" state = {state} click = {click}/>)
          
            const closebutton = queryByTestId('closemodal-university');
            fireEvent.click(closebutton);
            expect(state).toBeCalled();
           
          
        });


        it('delete modal for university menu testing delete button', () => {
    
            const data = {
                name : "HCU",
                location : "hyderabad",
                website : "www.hcu.com",
                contact : "4448555",
                counts : 5
            }
            const state = jest.fn();
            const click = jest.fn();
           const{queryByTestId} = render(<DeleteUniversity rowdata ={data} index = "1" state = {state} click = {click}/>)
          
            const deletebutton = queryByTestId('deletemodal-university');
            fireEvent.click(deletebutton);
            expect(state).toBeCalled();
            expect(click).toBeCalled();
           
          
        });
        it('delete modal for university menu testing cross button', () => {
    
            const data = {
                name : "HCU",
                location : "hyderabad",
                website : "www.hcu.com",
                contact : "4448555",
                counts : 5
            }
            const state = jest.fn();
            const click = jest.fn();
           const{queryByTestId} = render(<DeleteUniversity rowdata ={data} index = "1" state = {state} click = {click}/>)
          
            const crossbutton = queryByTestId('crossmodal-university');
            fireEvent.click(crossbutton);
            expect(state).toBeCalled();
           
          
        });

        it('delete modal for university menu testing paragraph message printing', () => {
    
            const data = {
                name : "HCU",
                location : "hyderabad",
                website : "www.hcu.com",
                contact : "4448555",
                counts : 5
            }
            const state = jest.fn();
            const click = jest.fn();
           const{queryByTestId} = render(<DeleteUniversity rowdata ={data} index = "1" state = {state} click = {click}/>)
          
           const paragraph = queryByTestId("pmodal-university");
           expect(paragraph.innerHTML).toBe("Are you really want to delete HCU record  ?")
           
          
        });
