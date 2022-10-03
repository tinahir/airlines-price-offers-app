import { PriceOffer } from '@models/PriceOffer';
import { rest } from 'msw';
import { faker } from '@faker-js/faker';

export const handlers = [
  rest.get('/promotions.json', (req, res, ctx) => {
    return res(ctx.json(mockPriceOfferData));
  }),
];

const generatePriceOffer = () => {
  return Array.from(Array(1000).keys()).map<PriceOffer>(() => {
    return {
      uuid: faker.datatype.uuid(),
      origin: faker.address.countryCode('alpha-3'),
      destination: faker.address.countryCode('alpha-3'),
      departureDate: faker.date.soon(),
      returnDate: faker.date.soon(),
      seatAvailability: faker.datatype.number(400),
      price: {
        amount: Number(faker.finance.amount(100, 1000, 2)),
        currency: 'EUR',
      },
      offerType: 'BestPrice',
    };
  });
};

const mockPriceOfferData = generatePriceOffer();
