import { PriceOffer } from '@models/PriceOffer';
import { getPriceOffer } from '@services/PromotionsApi';
import { useQuery, UseQueryOptions } from 'react-query';

type Select<T> = UseQueryOptions<PriceOffer[], unknown, T>['select'];

export function useGetPriceOffers<T>(select?: Select<T>) {
  return useQuery(['priceoffers'], async () => await getPriceOffer(), {
    select,
  });
}

export function useGetOrigin() {
  return useGetPriceOffers((data) =>
    [
      ...data.reduce((acc, curr) => acc.add(curr.origin), new Set<string>()),
    ].sort()
  );
}

export function useGetDestination() {
  return useGetPriceOffers((data) =>
    [
      ...data.reduce((acc, curr) => acc.add(curr.destination), new Set<string>()),
    ].sort()
  );
}
