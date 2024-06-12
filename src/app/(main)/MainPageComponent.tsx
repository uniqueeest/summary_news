'use client';

import Image from 'next/image';

import { Header } from '@/components/layout';

const MainPageComponent = () => {
  return (
    <div className="flex flex-col">
      <Header
        title="stocks"
        rightSlot={
          <div className="flex items-center">
            <Image
              src="/icons/search.svg"
              width={18}
              height={18}
              alt="search-icon"
            />
          </div>
        }
      />
    </div>
  );
};

export default MainPageComponent;
