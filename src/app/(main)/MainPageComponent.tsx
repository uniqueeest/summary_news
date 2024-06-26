'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Header } from '@/components/layout';
import { MarketType } from '@/models';

const MainPageComponent = ({
  marketNewsData,
}: {
  marketNewsData: MarketType[];
}) => {
  const router = useRouter();

  console.log(marketNewsData);

  return (
    <section className="flex flex-col">
      <Header
        title="stocks"
        rightSlot={
          <div className="flex items-center p-1 rounded-basic hover:bg-gray100">
            <Image
              src="/icons/search.svg"
              width={20}
              height={20}
              alt="search-icon"
              onClick={() => router.push('/search')}
            />
          </div>
        }
      />
      <div className="flex flex-col gap-3">
        {marketNewsData.map((news) => (
          <div key={news.id}>{news.headline}</div>
        ))}
      </div>
    </section>
  );
};

export default MainPageComponent;
