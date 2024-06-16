import { format, subDays } from 'date-fns';

const FINNHUB_URL = process.env.NEXT_PUBLIC_FINNHUB_URL;
const FINNHUB_API_KEY = process.env.NEXT_PUBLIC_FINNHUB_API_KEY;

export const fetchNews = async (ticker: string) => {
  const today = format(new Date(), 'yyyy-MM-dd');
  const oneWeekAgo = format(subDays(new Date(), 7), 'yyyy-MM-dd');

  if (!FINNHUB_URL || !FINNHUB_API_KEY) {
    throw new Error('Check your URL or API KEY');
  }

  const response = await fetch(
    `${FINNHUB_URL}/company-news?symbol=${ticker}&from=${oneWeekAgo}&to=${today}&token=${FINNHUB_API_KEY}`,
    {
      method: 'GET',
    }
  );

  if (!response.ok) {
    throw new Error(String(response.status));
  }

  const data = await response.json();

  return data;
};
