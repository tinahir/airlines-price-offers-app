/** @jsxImportSource @emotion/react */
import { useGetDestination, useGetOrigin } from '@hooks/useGetPriceOffers';
import { PriceOffer } from '@models/PriceOffer';
import { Center } from '@palette';
import { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';
import tw from 'twin.macro';
import { OriginOrDestinationFilter } from './OriginOrDestinationFilter';

type Props = {
  setFilter: Dispatch<SetStateAction<Partial<PriceOffer>>>;
};
const PriceOffersFilter: FC<PropsWithChildren<Props>> = ({ setFilter }) => {
  const originQueryResult = useGetOrigin();
  const destinationQueryResult = useGetDestination();
  return (
    <>
      <h2 css={tw`font-bold text-gray-900 mb-2`}>
        Origin and Destination filter:
      </h2>

      <Center css={tw`gap-x-2 justify-evenly`}>
        <OriginOrDestinationFilter
          useQueryResult={originQueryResult}
          onChange={(e) => {
            const { value = '' } = e.target as any;
            setFilter((state) => {
              return { ...state, origin: value };
            });
          }}
        />
        <OriginOrDestinationFilter
          useQueryResult={destinationQueryResult}
          onChange={(e) => {
            const { value = '' } = e.target as any;
            setFilter((state) => {
              return { ...state, destination: value };
            });
          }}
        />
      </Center>
    </>
  );
};

export { PriceOffersFilter };
