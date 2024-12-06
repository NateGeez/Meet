import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents />', () => {
  test('renders a number input (spinbutton)', () => {
    render(<NumberOfEvents onChangeNumber={() => {}} />);
    const inputElement = screen.getByRole('spinbutton');
    expect(inputElement).toBeInTheDocument();
  });

  test('has default value of 32', () => {
    const mockOnChangeNumber = jest.fn();
    render(<NumberOfEvents onChangeNumber={mockOnChangeNumber} />);
    const inputElement = screen.getByRole('spinbutton');
    expect(inputElement).toHaveValue(32); // Default value
  });

  test('value changes when user types in the input', async () => {
    const mockOnChangeNumber = jest.fn();
    const user = userEvent.setup();
    render(<NumberOfEvents onChangeNumber={mockOnChangeNumber} />);
    const inputElement = screen.getByRole('spinbutton');

    // Ensure the input value is initially 32
    expect(inputElement).toHaveValue(32);

    // Clear and type a new value
    await user.clear(inputElement);
    await user.type(inputElement, '10');

    // Ensure the value is updated to 10
    expect(inputElement).toHaveValue(10);
  });

  test('calls onChangeNumber prop when value changes', async () => {
    const mockOnChangeNumber = jest.fn();
    const user = userEvent.setup();
    render(<NumberOfEvents onChangeNumber={mockOnChangeNumber} />);
    const inputElement = screen.getByRole('spinbutton');

    // Clear and type a new value
    await user.clear(inputElement);
    await user.type(inputElement, '20');

    // Ensure the callback is called with the correct value
    expect(mockOnChangeNumber).toHaveBeenCalledWith(20);
  });
});
