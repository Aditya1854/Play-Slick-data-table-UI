import { fireEvent, queryByTestId, render, screen } from '@testing-library/react';
import EditUniversity from './EditUniversity'

        it('edit modal for university menu testing close button', () => {  
            const data = {
                name : "HCU",
                location : "hyderabad",
                website : "www.hcu.com",
                contact : "4448555",
                counts : 5
            }
            const state = jest.fn();
            const click = jest.fn();
           const{queryByTestId} = render(<EditUniversity rowdata ={data} index = "1" state = {state} click = {click}/>)
          
            const closebutton = queryByTestId('closemodal-university');
            fireEvent.click(closebutton);
            expect(state).toBeCalled();
           
          
        });


        it('edit modal for university menu testing edit button', () => {
    
            const data = {
                name : "HCU",
                location : "hyderabad",
                website : "www.hcu.com",
                contact : "4448555",
                counts : 5
            }
            const state = jest.fn();
            const click = jest.fn();
           const{queryByTestId} = render(<EditUniversity rowdata ={data} index = "1" state = {state} click = {click}/>)
          
            const editbutton = queryByTestId('editmodal-university');
            fireEvent.click(editbutton);
            expect(state).toBeCalled();
            expect(click).toBeCalled();
           
          
        });
        it('edit modal for university menu testing cross button', () => {
    
            const data = {
                name : "HCU",
                location : "hyderabad",
                website : "www.hcu.com",
                contact : "4448555",
                counts : 5
            }
            const state = jest.fn();
            const click = jest.fn();
           const{queryByTestId} = render(<EditUniversity rowdata ={data} index = "1" state = {state} click = {click}/>)
          
            const crossbutton = queryByTestId('crossmodal-university');
            fireEvent.click(crossbutton);
            expect(state).toBeCalled();
           
          
        });

        it('edit modal for university menu testing all inputbox', () => {
            const data = {
                name : "HCU",
                location : "hyderabad",
                website : "www.hcu.com",
                contact : "4448555",
                counts : 5
            }
            const state = jest.fn();
            const click = jest.fn();
            const list =["hcu","bhu","Jntu","VIT"]
            const{queryByTestId} = render(<EditUniversity  rowdata ={data} index = "1" state = {state} click = {click}/>)
        
            const Input1 = queryByTestId("input1");
            expect(Input1.value).toBe("HCU")
            fireEvent.change(Input1,{target : {value : "test1"}})
            expect(Input1.value).toBe("test1")
             
            const Input2 = queryByTestId("input2");
            expect(Input2.value).toBe("hyderabad")
            fireEvent.change(Input2,{target : {value : "test2"}})
            expect(Input2.value).toBe("test2")
             
            const Input3 = queryByTestId("input3");
            expect(Input3.value).toBe("www.hcu.com")
            fireEvent.change(Input3,{target : {value : "test3"}})
            expect(Input3.value).toBe("test3")
             
            const Input4 = queryByTestId("input4");
            expect(Input4.value).toBe("4448555")
            fireEvent.change(Input4,{target : {value : "4555"}})
            expect(Input4.value).toBe("4555")
        
        });