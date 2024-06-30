'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { format, fromUnixTime } from 'date-fns';

import { Header, PageLayout } from '@/components/layout';
import { MarketType, NewsListType } from '@/models';

const MainPageComponent = ({
  marketNewsData,
  translateTitleList,
}: {
  marketNewsData: MarketType[];
  translateTitleList: NewsListType;
}) => {
  const router = useRouter();

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
      <PageLayout>
        {marketNewsData.map((news, index) => (
          <div
            key={news.id}
            className="flex items-center gap-3 py-2 border-b border-b-gray200"
            onClick={() =>
              router.push(
                `${news.id}?title=${encodeURIComponent(
                  translateTitleList.translations[index].text
                )}`
              )
            }
          >
            <img
              className="w-6 h-6 object-cover"
              src={news.image}
              alt="thumbnail-image"
            />
            <div className="flex flex-col flex-1 gap-2">
              <h2 className="leading-5">
                {translateTitleList.translations[index].text}
              </h2>
              <p className="text-end text-12 text-deep_blue">
                {format(fromUnixTime(news.datetime), 'yyyy-MM-dd HH:mm:ss')}
              </p>
            </div>
          </div>
        ))}
      </PageLayout>
    </section>
  );
};

export default MainPageComponent;
