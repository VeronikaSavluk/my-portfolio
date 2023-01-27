import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './components/App';

test('renders position', () => {
  render(<App />);
  const positionElement = screen.getByText(/Full Stack Developer/i);
  expect(positionElement).toBeInTheDocument();
});
