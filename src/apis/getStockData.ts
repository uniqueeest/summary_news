import { baseApi } from './baseApi';

export const getStockData = async () => {
  return await baseApi.post('/get_all_stocks', {
    alloc: true,
    countryType: null,
  });
};
