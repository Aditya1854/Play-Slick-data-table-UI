import { fireEvent, queryByTestId, render, screen } from '@testing-library/react';
import Add from './Add'
import Home from '../Navigation/Home'



it('add modal for student menu testing cross button', () => {
    
    const data = {
        id : 1,
        name : "aman",
        email : "aman@gmail.com",
        universityName : "Hcu"
    }
    const state = jest.fn();
    const click = jest.fn();
    const list =["hcu","bhu","Jntu","VIT"]
   const{queryByTestId} = render(<Add  list = {list}  state = {state} click = {click}/>)
    const crossbutton = queryByTestId("crossmodal-students")
    fireEvent.click(crossbutton)
   expect(state).toBeCalled();
   
  
});
it('add modal for student menu testing save button', () => {
   // render(<Add/>)
   render(<Home />);
    const edit = screen.getByTestId("add-students");
    fireEvent.click(edit)
    const addpage = screen.getByTestId("addpage-students");
    expect(addpage).toBeInTheDocument();
   const addbutton = screen.getByTestId('addmodal-students');
   fireEvent.click(addbutton);
   expect(addpage).not.toBeInTheDocument();
  
});
it('add modal for student menu testing close button', () => {
    // render(<Add/>)
    render(<Home />);
     const edit = screen.getByTestId("add-students");
     fireEvent.click(edit)
     const addpage = screen.getByTestId("addpage-students");
     expect(addpage).toBeInTheDocument();
    const closebutton = screen.getByTestId('closemodal-students');
    fireEvent.click(closebutton);
    expect(addpage).not.toBeInTheDocument();
   
 });
 

 describe("add modal for student menu testing all inputBox", () => {
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
       const{queryByTestId} = render(<Add  list = {list}  state = {state} click = {click}/>)
        const searchInput = queryByTestId("input1");
        fireEvent.change(searchInput,{target : {value : "test1"}})

        expect(searchInput.value).toBe("test1")
        const searchInput1 = queryByTestId("input2");
        fireEvent.change(searchInput1,{target : {value : "test2"}})

        expect(searchInput1.value).toBe("test2")
    })
})

