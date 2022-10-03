/** @jsxImportSource @emotion/react */
import { PriceOfferList } from '@pages/PriceOffers/PriceOfferList';
import { PriceOffer } from '@models/PriceOffer';
import { useState } from 'react';
import tw from 'twin.macro';
import { PriceOffersFilter } from './PriceOffersFilter';

function PriceOffers() {
  const [filter, setFilter] = useState<Partial<PriceOffer>>({
    origin: '',
    destination: '',
  });
  return (
    <div css={tw`mt-10 mx-auto max-w-screen-xl px-4`}>
      <PriceOffersFilter setFilter={setFilter} />
      <PriceOfferList
        filterListItems={(li) =>
          (filter.origin === '' || li.origin === filter.origin) &&
          (filter.destination === '' || li.destination === filter.destination)
        }
        noFilteredListItems={
          <p css={tw`text-center`}>
            Looks like you've got some promotion offers with origin and
            destination. Please use other origin or destination
          </p>
        }
        noListItems={
          <p css={tw`text-center`}>
            Looks like you've got some promotion offers!
          </p>
        }
      ></PriceOfferList>
    </div>
  );
}

export { PriceOffers };
