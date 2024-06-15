import { request } from './utils';

const QUANTUS_URL = process.env.NEXT_PUBLIC_QUANTUS_URL;

if (!QUANTUS_URL) {
  throw new Error('MISS URL');
}

export const baseApi = request.create({
  baseURL: QUANTUS_URL,
});
