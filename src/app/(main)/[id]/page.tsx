import { getMarketData, translateNews } from '@/apis';
import { DetailHeadlineNewsPageComponent } from './DetailHeadlineNewsPageComponent';
import { NewsType } from '@/models';

interface DetailNewsProps {
  params: { ticker: string; id: string };
  searchParams: { title: string };
}

export default async function DetailHeadlineNewsPage({
  params,
  searchParams,
}: DetailNewsProps) {
  const newsData = await getMarketData();
  const summaryData = newsData.find(
    (news: NewsType) => news.id === Number(params.id)
  );

  const translateSummary = await translateNews([summaryData.summary]);

  return (
    <DetailHeadlineNewsPageComponent
      title={searchParams.title}
      translateSummary={translateSummary}
      summaryData={summaryData}
    />
  );
}
