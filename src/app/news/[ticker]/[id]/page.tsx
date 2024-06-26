import { getNewsData, translateNews } from '@/apis';
import { DetailNewsPageComponent } from './DetailNewsPageComponent';
import { NewsType } from '@/models';

interface DetailNewsProps {
  params: { ticker: string; id: string };
  searchParams: { title: string };
}

export default async function DetailNewsPage({
  params,
  searchParams,
}: DetailNewsProps) {
  const newsData = await getNewsData(params.ticker);
  const summaryData = newsData.find(
    (news: NewsType) => news.id === Number(params.id)
  );

  const translateSummary = await translateNews([summaryData.summary]);

  return (
    <DetailNewsPageComponent
      title={searchParams.title}
      translateSummary={translateSummary}
      summaryData={summaryData}
    />
  );
}
