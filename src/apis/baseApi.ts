import { request } from './utils';

const QUANTUS_URL = process.env.NEXT_PUBLIC_QUANTUS_URL;
const FINNHUB_URL = process.env.NEXT_PUBLIC_FINNHUB_URL;
const DEEPL_URL = process.env.NEXT_PUBLIC_DEEPL_URL;

if (!QUANTUS_URL || !FINNHUB_URL || !DEEPL_URL) {
  throw new Error('MISS URL');
}

export const baseApi = request.create({
  baseURL: QUANTUS_URL,
});

export const finnhubApi = request.create({
  baseURL: FINNHUB_URL,
});

export const deeplApi = request.create({
  baseURL: DEEPL_URL,
});
