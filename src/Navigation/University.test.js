import { fireEvent ,render, screen } from '@testing-library/react';
import University from './University'


test('rendring university add modal after click add university button in university menu', () => {
    render(<University />);
    const edit = screen.getByTestId("add-university");
    fireEvent.click(edit)
    const addpage = screen.getByTestId("addpage-university");
    expect(addpage).toBeInTheDocument();
});