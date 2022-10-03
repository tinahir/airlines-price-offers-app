/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import * as React from 'react';
import MessageBox from '@components/MessageBox';
import { useGetPriceOffers } from '@hooks/useGetPriceOffers';
import { PriceOffer } from '@models/PriceOffer';
import Moment from 'moment';

type Props = {
  filterListItems: Parameters<Array<PriceOffer>['filter']>[0];
  noListItems: React.ReactNode;
  noFilteredListItems: React.ReactNode;
};

function PriceOfferList({
  filterListItems,
  noListItems,
  noFilteredListItems,
}: React.PropsWithChildren<Props>) {
  const { data, isLoading, error } = useGetPriceOffers<PriceOffer[]>();

  if (isLoading) {
    return <MessageBox>Loading...</MessageBox>;
  }

  if (error) {
    return (
      <MessageBox>There is some problem while featching the data.</MessageBox>
    );
  }

  if (!data) {
    return <MessageBox>{noListItems}</MessageBox>;
  }

  const filteredListItems = data.filter(filterListItems);

  if (!filteredListItems.length) {
    return <MessageBox>{noFilteredListItems}</MessageBox>;
  }

  return (
    <>
      <article css={tw`mt-4 grid grid-cols-1 lg:grid-cols-2 gap-2`} data-test="price-offers">
        {filteredListItems.map((priceOffer) => (
          <div
            key={priceOffer.uuid}
            css={tw`hover:outline-black hover:border-pink-300 bg-white rounded-lg shadow-md`}
          >
            <article css={tw`md:flex flex-col`} data-test="price-offer">
              <div css={tw`flex-auto p-4`}>
                <div css={tw`flex flex-wrap`}>
                  <h1 css={tw`flex-auto font-medium text-gray-900`}>
                    <span data-test="price-offer-origin">
                      {priceOffer.origin}
                    </span>
                    <span>-</span>
                    <span data-test="price-offer-destination">
                      {priceOffer.destination}
                    </span>
                  </h1>
                  <div
                    data-test="price-offer-price"
                    css={tw`w-full flex-none mt-2 order-1 text-3xl font-bold text-pink-600`}
                  >
                    {new Intl.NumberFormat('de-DE', {
                      style: 'currency',
                      currency: priceOffer.price.currency,
                    }).format(priceOffer.price.amount)}
                  </div>
                  <div
                    data-test="price-offer-seat"
                    css={tw`text-sm font-medium text-gray-400`}
                  >
                    <span css={tw` text-pink-600 mr-2 font-bold`}>
                      {priceOffer.seatAvailability}
                    </span>
                    Seat available
                  </div>
                </div>
              </div>
              <div css={tw`w-full h-px bg-gray-200 mb-4`}></div>
              <div css={tw`flex space-x-4 mb-5 text-sm font-medium px-4`}>
                <div css={tw`flex-auto flex items-center justify-between		`}>
                  <button
                    data-test="price-offer-departuredate"
                    css={tw`h-10 flex-none px-6 font-semibold border border-gray-200 text-gray-900 rounded-l-full`}
                  >
                    {Moment(priceOffer.departureDate).format('YYYY-MM-DD')}
                  </button>
                  <div css={tw`w-full h-px bg-gray-200 bg-pink-900`}></div>
                  <button
                    data-test="price-offer-returndate"
                    css={tw`h-10 flex-none px-6 font-semibold border border-gray-200 text-gray-900 rounded-r-full`}
                  >
                    {Moment(priceOffer.returnDate).format('YYYY-MM-DD')}
                  </button>
                </div>
              </div>
            </article>
          </div>
        ))}
      </article>
    </>
  );
}

export { PriceOfferList };
