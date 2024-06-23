'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { fromUnixTime, format } from 'date-fns';

import { NewsType } from '@/models';
import { Header, PageLayout } from '@/components/layout';
import { Button, Spacing } from '@/components/shared';

export const DetailNewsPageComponent = ({
  title,
  translateSummary,
  summaryData,
}: {
  title: string;
  translateSummary: {
    translations: {
      detected_source_language: string;
      text: string;
    }[];
  };
  summaryData: NewsType;
}) => {
  const router = useRouter();
  const { image, datetime, url } = summaryData;
  const date = format(fromUnixTime(datetime), 'yyyy-MM-dd HH:mm:ss');

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
        title=""
      />
      <PageLayout>
        <h2 className="text-20 font-bold">{title}</h2>
        <p>{date}</p>
        <Spacing size={24} />
        {image ? (
          <img className="w-full rounded-basic" src={image} alt="뉴스 이미지" />
        ) : (
          <div className="flex justify-center items-center w-full h-[200px] rounded-basic bg-gray100">
            이미지 없음
          </div>
        )}
        <Spacing size={24} />
        <p>{translateSummary.translations[0].text}</p>
        <Spacing size={24} />
        <Button onClick={() => {}}>
          <Link href={url}>링크로 이동하기</Link>
        </Button>
      </PageLayout>
    </section>
  );
};
