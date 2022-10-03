import App from './App';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createWrapper, renderWithRouter } from '@mocks/utils';

it('should render full app rendering/navigating', async () => {
  render(<App />, { wrapper: createWrapper() });
  const user = userEvent.setup();
  expect(screen.getByText(/home/i)).toBeInTheDocument();
  await user.click(screen.getByText(/browse price offers/i));
  expect(
    screen.getByText(/origin and destination filter:/i)
  ).toBeInTheDocument();
});

it('should render the home page', () => {
  renderWithRouter(<App />, { route: '/home' });
  expect(screen.getByText(/home/i)).toBeInTheDocument();
});

it('should render the price offers', () => {
  renderWithRouter(<App />, { route: '/PriceOffers' });
  expect(
    screen.getByText(/origin and destination filter:/i)
  ).toBeInTheDocument();
});
