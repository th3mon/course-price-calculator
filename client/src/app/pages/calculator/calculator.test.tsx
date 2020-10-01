import React from 'react';
import { render } from '@testing-library/react';
import { Calculator } from './calculator';

test('renders standard bonuses header', () => {
  const { getByText } = render(<Calculator />);
  const header = getByText(/standardowe bonusy/i);

  expect(header).toBeInTheDocument();
});

test('renders list of standard bonuses', () => {
  const { getByText } = render(<Calculator />);
  const bonus1 = getByText(/podręcznik do pobrania/i);
  const bonus2 = getByText(/ograniczona ilość uczestników/i);
  const bonus3 = getByText(/wywiady z ekspertami/i);
  const bonus4 = getByText(/transkrypcje wideo/i);

  expect(bonus1).toBeInTheDocument();
  expect(bonus2).toBeInTheDocument();
  expect(bonus3).toBeInTheDocument();
  expect(bonus4).toBeInTheDocument();
});
