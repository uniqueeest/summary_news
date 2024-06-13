'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Header, PageLayout } from '@/components/layout';
import { SearchBar } from './components';

const SearchPageComponent = () => {
  const router = useRouter();

  return (
    <section className="flex flex-col">
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
        title="search"
      />
      <PageLayout>
        <SearchBar value="" onChange={() => {}} onSearch={() => {}} />
      </PageLayout>
    </section>
  );
};

export default SearchPageComponent;
