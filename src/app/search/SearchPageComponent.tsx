'use client';

import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Spacing } from '@/components/shared';
import { Header, PageLayout } from '@/components/layout';
import { SearchBar, SearchPanel } from './components';
import { debounce } from '@/utils';
import { StockType } from '@/models';

const DEBOUNCE_TIME = 300;

const SearchPageComponent = ({ stockList }: { stockList: StockType[] }) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');
  const [debounceValue, setDebounceValue] = useState('');
  const [searchStockList, setSearchStockList] = useState<StockType[]>([]);

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

  const navigateToTicker = (ticker: string) => {
    router.push(`/news/${ticker}`);
  };

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  useEffect(() => {
    setSearchStockList(
      stockList.filter((stock) => {
        if (debounceValue === '') {
          return false;
        }

        return (
          stock.ticker
            .toLocaleLowerCase()
            .includes(debounceValue.toLocaleLowerCase()) ||
          stock.name
            .toLocaleLowerCase()
            .includes(debounceValue.toLocaleLowerCase())
        );
      })
    );
  }, [debounceValue]);

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
        <Spacing size={18} />
        <SearchPanel
          searchList={searchStockList}
          navigateToTicker={navigateToTicker}
        />
      </PageLayout>
    </section>
  );
};

export default SearchPageComponent;
