import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  console.log('test');
  render(<App />);
  const linkElement = screen.getByText(/Hello From Dina, here is my Github account!/i);
  expect(linkElement).toBeInTheDocument();
});
