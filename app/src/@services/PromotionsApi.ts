import axios from 'axios';
import { PriceOffer } from '@models/PriceOffer';

export async function getPriceOffer() {
  const res = await axios.get<PriceOffer[]>(`/promotions.json`);
  return res.data;
}
