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

test('renders additional bonuses header', () => {
  const { getByText } = render(<Calculator />);
  const header = getByText(/dodatkowe bonusy/i);

  expect(header).toBeInTheDocument();
});

test('renders list of additional bonuses', () => {
  const { getByText } = render(<Calculator />);
  const bonus5 = getByText(/zamknięta grupa/i);
  const bonus6 = getByText(/webinary online/i);
  const bonus7 = getByText(/cotygodniowe q&a/i);
  const bonus8 = getByText(/support online/i);

  expect(bonus5).toBeInTheDocument();
  expect(bonus6).toBeInTheDocument();
  expect(bonus7).toBeInTheDocument();
  expect(bonus8).toBeInTheDocument();
});
