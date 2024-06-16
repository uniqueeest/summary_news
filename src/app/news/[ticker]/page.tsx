import { NewsPageComponent } from './NewsPageComponent';

interface NewsPageProps {
  params: { ticker: string };
}

export default function NewsPage({ params }: NewsPageProps) {
  return <NewsPageComponent ticker={params.ticker} />;
}
