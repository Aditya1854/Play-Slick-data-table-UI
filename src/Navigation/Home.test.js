import { fireEvent ,render, screen } from '@testing-library/react';
import Home from './Home'


test('rendring student add modal after click add student button in student menu', () => {
    render(<Home />);
    const edit = screen.getByTestId("add-students");
    fireEvent.click(edit)
    const addpage = screen.getByTestId("addpage-students");
    expect(addpage).toBeInTheDocument();
});

