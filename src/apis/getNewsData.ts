import { format, subDays } from 'date-fns';

import { finnhubApi } from './baseApi';

const FINNHUB_API_KEY = process.env.NEXT_PUBLIC_FINNHUB_API_KEY;

export const getNewsData = async (ticker: string) => {
  const today = format(new Date(), 'yyyy-MM-dd');
  const oneWeekAgo = format(subDays(new Date(), 7), 'yyyy-MM-dd');

  return await finnhubApi.get(
    `/api/v1/company-news?symbol=${ticker}&from=${oneWeekAgo}&to=${today}&token=${FINNHUB_API_KEY}`
  );
};
