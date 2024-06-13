'use client';

import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Header, PageLayout } from '@/components/layout';
import { SearchBar } from './components';
import { debounce } from '@/utils';

const DEBOUNCE_TIME = 300;

const SearchPageComponent = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');
  const [debounceValue, setDebounceValue] = useState('');

  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        setDebounceValue(value);
      }, DEBOUNCE_TIME),
    []
  );

  const handleChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    debouncedSearch(value);
  };

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

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
        <SearchBar value={searchValue} onChange={handleChangeSearchValue} />
      </PageLayout>
    </section>
  );
};

export default SearchPageComponent;
