'use client';

import { useEffect } from 'react';
import { fetchNews } from './utils';

export const NewsPageComponent = ({ ticker }: { ticker: string }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchNews(ticker);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [ticker]);

  return <div></div>;
};
