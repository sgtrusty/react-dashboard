import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

test('renders KYC Application Reports heading', () => {
  render(<Dashboard />);
  const headingElement = screen.getByText(/KYC Application Reports/i);
  expect(headingElement).toBeInTheDocument();
});