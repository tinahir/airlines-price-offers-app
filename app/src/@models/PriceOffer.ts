export type PriceOffer = {
  uuid: string;
  origin: string;
  destination: string;
  departureDate: Date;
  returnDate: Date;
  seatAvailability: number;
  price: {
    amount: number;
    currency: string;
  };

  offerType: string;
};
