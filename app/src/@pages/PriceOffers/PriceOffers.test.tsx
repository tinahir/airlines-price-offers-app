import { render, screen } from '@testing-library/react';
import { PriceOffers } from './PriceOffers';
import { createWrapper } from '@mocks/utils';

describe('PriceOffers', () => {
  it('should allow a user to view PriceOffers page', async () => {
    render(<PriceOffers />, { wrapper: createWrapper() });
    expect(
      await screen.findByText(/origin and destination filter:/i)
    ).toBeInTheDocument();
  });
});
