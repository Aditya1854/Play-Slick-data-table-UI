import { fireEvent, queryByTestId, render, screen } from '@testing-library/react';
import Success from './Success'


it('Sucess modal for all menu testing sucess message', () => {
  
   const{queryByTestId} = render(<Success mesg = "hello success"/>)
   
   const paragraph = queryByTestId("sucessmsg-all");
   expect(paragraph.innerHTML).toBe("hello success")
    
 });
