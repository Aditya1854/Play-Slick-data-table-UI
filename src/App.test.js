import { render, screen } from '@testing-library/react';
import App from './App';
import Sucess from './modal/Success'
import {NavLink,Route, Switch} from "react-router-dom";
import Add from './modal/Add'
import { useLocation } from "react-router-dom";
import  Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';

// test('App.js is rendring perfectly', () => {
//   render(<App />);
  
// });


configure({adapter: new Adapter()});
test('Student is Rendered Successfuly !', ()=> {
   const comp = (
       <App />
   );
   const wrapper = shallow(comp);
   expect(wrapper.find(NavLink).first().props().to).to.equal("/");
   

//     expect(wrapper.instance().props().to).to.equal("/university");
//    const temp = screen.getByTestId("nav1");
//    expect(wrapper.temp.childAt(1).props().to).to.equal('/university');
//    expect(wrapper.find(NavLink).childAt(2).props().to).to.equal("/join");
})




// describe("Navbar Student Option !", ()=>
// {
//     it(" Student Menu",()=>
//     {
//         render(<ClientRendering/>)
//         const linkElement= screen.findByText('/Student/');
//         // fireEvent.change(search, {target:{value:"test"}})
//         // expect(search.value).toBe("test");

//         // const linkElement = screen.findByTestId('my-table');
//         expect(linkElement).toBeInTheDocument;
//     })
// })

