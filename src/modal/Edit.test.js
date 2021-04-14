import { fireEvent, queryByTestId, render, screen } from '@testing-library/react';
import Edit from './Edit'

        it('edit modal for student menu testing close button', () => {
    
            const data = {
                id : 1,
                name : "aman",
                email : "aman@gmail.com",
                universityName : "Hcu"
            }
            const state = jest.fn();
            const click = jest.fn();
            const list =["hcu","bhu","Jntu","VIT"]
           const{queryByTestId} = render(<Edit rowdata ={data} list = {list} index = "1" state = {state} click = {click}/>)
          
            const closebutton = queryByTestId('closemodal-students');
            fireEvent.click(closebutton);
           expect(state).toBeCalled();
           
          
        });



it('edit modal for student menu testing edit button', () => {
    const data = {
        id : 1,
        name : "aman",
        email : "aman@gmail.com",
        universityName : "Hcu"
    }
    const state = jest.fn();
    const click = jest.fn();
    const list =["hcu","bhu","Jntu","VIT"]
   const{queryByTestId} = render(<Edit rowdata ={data} list = {list} index = "1" state = {state} click = {click}/>)
  
    const editbutton = queryByTestId('editmodal-students');
    fireEvent.click(editbutton);
   expect(state).toBeCalled();
   expect(click).toBeCalled();
   
  
   
 });
 it('edit modal for student menu testing cross button', () => {
    
    const data = {
        id : 1,
        name : "aman",
        email : "aman@gmail.com",
        universityName : "Hcu"
    }
    const state = jest.fn();
    const click = jest.fn();
    const list =["hcu","bhu","Jntu","VIT"]
   const{queryByTestId} = render(<Edit rowdata ={data} list = {list} index = "1" state = {state} click = {click}/>)
  
    const crossbutton = queryByTestId('crossmodal-students');
    fireEvent.click(crossbutton);
   expect(state).toBeCalled();
   
  
});
 describe("edit modal for student menu testing all inputbox", () => {
    it("updates on change", () => {
        const data = {
            id : 1,
            name : "aman",
            email : "aman@gmail.com",
            universityName : "Hcu"
        }
        const state = jest.fn();
        const click = jest.fn();
        const list =["hcu","bhu","Jntu","VIT"]
       const{queryByTestId} = render(<Edit rowdata ={data} list = {list} index = "1" state = {state} click = {click}/>)
        const searchInput = queryByTestId("input1");
        fireEvent.change(searchInput,{target : {value : "test1"}})

        expect(searchInput.value).toBe("test1")
        const searchInput1 = queryByTestId("input2");
        fireEvent.change(searchInput1,{target : {value : "test2"}})

        expect(searchInput1.value).toBe("test2")
    })
})


