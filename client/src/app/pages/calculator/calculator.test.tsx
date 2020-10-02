import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { cleanup, render } from '@testing-library/react';
import { Calculator } from './calculator';

const server = setupServer(
  rest.get('/api/bonuses', (req, res, ctx) => {
    return res(ctx.json({ greeting: 'hello there' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

afterEach(cleanup);

test('renders standard bonuses header', async () => {
  const { getByText } = render(<Calculator />);
  getByText(/standardowe bonusy/i);
});

test('renders additional bonuses header', () => {
  const { getByText } = render(<Calculator />);
  getByText(/dodatkowe bonusy/i);
});

// test('renders target group', async () => {
//   const { getByText } = render(<Calculator />);
//   const nextButton = getByText(/dalej/i);

//   fireEvent.click(nextButton);
//   // https://github.com/testing-library/react-testing-library/issues/610
//   await waitFor(() => getByText(/Target Group/i));
// });
