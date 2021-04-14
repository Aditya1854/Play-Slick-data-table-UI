import { fireEvent ,render, screen } from '@testing-library/react';
import JoinState from './JoinState'


test('rendring student add modal after click add student button from student By University menu ', () => {
    render(<JoinState />);
    const edit = screen.getByTestId("addjoin-students");
    fireEvent.click(edit)
    const addpage = screen.getByTestId("addpage-students");
    expect(addpage).toBeInTheDocument();
});
 