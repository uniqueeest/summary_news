import { getStockData } from '@/apis';
import SearchPageComponent from './SearchPageComponent';
import { StockType } from '@/models';

export default async function SearchPage() {
  const data = await getStockData();
  const stockList = data.stocks.filter(
    (stock: StockType) => stock.country === 'US'
  );

  return <SearchPageComponent stockList={stockList} />;
}
