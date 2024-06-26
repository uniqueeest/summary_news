import { getMarketData, translateNews } from '@/apis';
import MainPageComponent from './MainPageComponent';
import { MarketType } from '@/models';

export default async function MainPage() {
  const data = await getMarketData();
  const sliceData = data.slice(0, 10);
  const titleList = sliceData.map((news: MarketType) => news.headline);
  const translateTitleList = await translateNews(titleList);

  return (
    <MainPageComponent
      marketNewsData={sliceData}
      translateTitleList={translateTitleList}
    />
  );
}
