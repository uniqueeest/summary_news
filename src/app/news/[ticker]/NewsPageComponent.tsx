'use client';

import { useState, useEffect } from 'react';
import { fetchNews } from './utils';
import { NewsType } from '@/models';

export const NewsPageComponent = ({ ticker }: { ticker: string }) => {
  const [newsList, setNewsList] = useState<NewsType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetchNews(ticker);
        setNewsList(response.slice(0, 12));
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [ticker]);

  if (isLoading) {
    <div>loading...</div>;
  }

  return (
    <section className="flex flex-col gap-3">
      {newsList.map((news) => (
        <div key={news.id}>
          <h2>{news.headline}</h2>
        </div>
      ))}
    </section>
  );
};
