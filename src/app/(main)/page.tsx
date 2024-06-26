import { getMarketData } from '@/apis';
import MainPageComponent from './MainPageComponent';

export default async function MainPage() {
  const data = await getMarketData();
  const sliceData = data.slice(0, 10);

  return <MainPageComponent marketNewsData={sliceData} />;
}
