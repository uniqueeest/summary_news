import { finnhubApi } from './baseApi';

const FINNHUB_API_KEY = process.env.NEXT_PUBLIC_FINNHUB_API_KEY;

export const getMarketData = async () => {
  return await finnhubApi.get(
    `/api/v1/news?category=genera&token=${FINNHUB_API_KEY}`
  );
};
