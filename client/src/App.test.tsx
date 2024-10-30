import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// test that creating an expense works
test('create an expense', () => {
  render(<App />);

  // input data in submission fields and click the save button
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Pizza' } });
  fireEvent.change(screen.getByLabelText('Cost'), { target: { value: '123' } });
  fireEvent.click(screen.getByRole('button', { name: /Save/i }));

  // check that the expense is listed
  expect(screen.getByText('Pizza')).toBeInTheDocument();

  // check that the budget data is correct
  expect(screen.getByText('Budget: $999')).toBeInTheDocument();
  expect(screen.getByText('Remaining: $876')).toBeInTheDocument();
  expect(screen.getByText('Spent so far: $123')).toBeInTheDocument();
});

// test that removing an expense works
test('remove an expense', () => {
  render(<App />);

  // set up the inital state and ensure it is correct
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Doughnuts' } });
  fireEvent.change(screen.getByLabelText('Cost'), { target: { value: '701' } });
  fireEvent.click(screen.getByRole('button', { name: /Save/i }));
  expect(screen.getByText('Doughnuts')).toBeInTheDocument();
  expect(screen.getByText('Budget: $999')).toBeInTheDocument();
  expect(screen.getByText('Remaining: $298')).toBeInTheDocument();
  expect(screen.getByText('Spent so far: $701')).toBeInTheDocument();

  // click the remove button and check that the expense was removed
  fireEvent.click(screen.getByRole('button', { name: /x/i }));
  expect(screen.queryByText('Doughnuts')).not.toBeInTheDocument();

  // check that the budget data is correct
  expect(screen.getByText('Budget: $999')).toBeInTheDocument();
  expect(screen.getByText('Remaining: $999')).toBeInTheDocument();
  expect(screen.getByText('Spent so far: $0')).toBeInTheDocument();
});


// test that the budget equation holds
test('verify budget balance', () => {
  render(<App />);

  // check the default state
  expect(screen.getByText('Budget: $999')).toBeInTheDocument();
  expect(screen.getByText('Remaining: $999')).toBeInTheDocument();
  expect(screen.getByText('Spent so far: $0')).toBeInTheDocument();

  // add an expense
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Coffee' } });
  fireEvent.change(screen.getByLabelText('Cost'), { target: { value: '60' } });
  fireEvent.click(screen.getByRole('button', { name: /Save/i }));
  expect(screen.getByText('Budget: $999')).toBeInTheDocument();
  expect(screen.getByText('Remaining: $939')).toBeInTheDocument();
  expect(screen.getByText('Spent so far: $60')).toBeInTheDocument();

  // add another expense
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Tea' } });
  fireEvent.change(screen.getByLabelText('Cost'), { target: { value: '45' } });
  fireEvent.click(screen.getByRole('button', { name: /Save/i }));
  expect(screen.getByText('Budget: $999')).toBeInTheDocument();
  expect(screen.getByText('Remaining: $894')).toBeInTheDocument();
  expect(screen.getByText('Spent so far: $105')).toBeInTheDocument();

  // spend all the money
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Gold' } });
  fireEvent.change(screen.getByLabelText('Cost'), { target: { value: '894' } });
  fireEvent.click(screen.getByRole('button', { name: /Save/i }));
  expect(screen.getByText('Budget: $999')).toBeInTheDocument();
  expect(screen.getByText('Remaining: $0')).toBeInTheDocument();
  expect(screen.getByText('Spent so far: $999')).toBeInTheDocument();

  // remove all expenses
  fireEvent.click(screen.getAllByRole('button', { name: /x/i })[0]);
  fireEvent.click(screen.getAllByRole('button', { name: /x/i })[0]);
  fireEvent.click(screen.getByRole('button', { name: /x/i }));
  expect(screen.getByText('Budget: $999')).toBeInTheDocument();
  expect(screen.getByText('Remaining: $999')).toBeInTheDocument();
  expect(screen.getByText('Spent so far: $0')).toBeInTheDocument();
});