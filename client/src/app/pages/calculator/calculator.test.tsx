import React from 'react';
import { render } from '@testing-library/react';
import { Calculator } from './calculator';

test('renders standard bonuses header', () => {
  const { getByText } = render(<Calculator />);
  const header = getByText(/standardowe bonusy/i);

  expect(header).toBeInTheDocument();
});

test('renders additional bonuses header', () => {
  const { getByText } = render(<Calculator />);
  const header = getByText(/dodatkowe bonusy/i);

  expect(header).toBeInTheDocument();
});
