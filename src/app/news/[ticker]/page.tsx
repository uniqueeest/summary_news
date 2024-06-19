import { getNewsData, translateNews } from '@/apis';
import { NewsPageComponent } from './NewsPageComponent';
import { NewsType } from '@/models';

interface NewsPageProps {
  params: { ticker: string };
}

export default async function NewsPage({ params }: NewsPageProps) {
  const newsData = await getNewsData(params.ticker);

  const newsList = newsData.slice(0, 12);
  const titleList = newsData
    .map((news: NewsType) => news.headline)
    .slice(0, 12);
  const translateTitleList = await translateNews(titleList);

  return (
    <NewsPageComponent
      ticker={params.ticker}
      translateTitleList={translateTitleList}
      newsList={newsList}
    />
  );
}
