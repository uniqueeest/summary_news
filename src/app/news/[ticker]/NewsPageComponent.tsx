'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { fromUnixTime, format } from 'date-fns';

import { Header, PageLayout } from '@/components/layout';
import { Spacing } from '@/components/shared';
import { NewsType } from '@/models';

type NewsList = {
  translations: {
    detected_source_language: string;
    text: string;
  }[];
};

export const NewsPageComponent = ({
  ticker,
  translateTitleList,
  newsList,
}: {
  ticker: string;
  translateTitleList: NewsList;
  newsList: NewsType[];
}) => {
  const router = useRouter();

  return (
    <section className="flex flex-col gap-3">
      <Header
        leftSlot={
          <Image
            src="/icons/go_back.svg"
            className="pt-1"
            width={18}
            height={18}
            alt="go-back"
            onClick={() => router.back()}
          />
        }
        title="news"
      />
      <PageLayout className="gap-3">
        {translateTitleList.translations.map((news, index) => {
          const { datetime, id } = newsList[index];
          return (
            <div
              className="flex flex-col gap-1 border-b border-b-gray100"
              key={news.text}
              onClick={() => router.push(`/news/${ticker}/${id}`)}
            >
              <h2>{news.text}</h2>
              <p className="mb-3 self-end text-12">
                {format(fromUnixTime(datetime), 'yyyy-MM-dd HH:mm:ss')}
              </p>
            </div>
          );
        })}
        <Spacing size={28} />
      </PageLayout>
    </section>
  );
};
