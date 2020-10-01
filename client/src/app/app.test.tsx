import React from 'react';
import { render } from '@testing-library/react';
import { App } from './app';

test('renders go to calculator button', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/Przejdź do kalkulatora/i);
  expect(buttonElement).toBeInTheDocument();
});
