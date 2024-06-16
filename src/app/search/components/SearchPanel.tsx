'use client';

import { CSSProperties } from 'react';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';

import { Button, Spacing } from '@/components/shared';
import { POPULAR_ETF, TREND_STOCK } from '@/constants/listData';
import { StockType } from '@/models';

interface SearchPanelProps {
  searchList: StockType[];
  navigateToTicker: (ticker: string) => void;
}

interface RowProps {
  index: number;
  style: CSSProperties;
  data: {
    items: StockType[];
    navigateToTicker: (ticker: string) => void;
  };
}

export const SearchPanel = ({
  searchList,
  navigateToTicker,
}: SearchPanelProps) => {
  if (searchList.length === 0) {
    return (
      <article className="flex flex-col gap-5">
        <div>
          <h2 className="text-18 font-bold">Trending Stocks</h2>
          <Spacing size={12} />
          <div className="flex gap-3 items-center flex-wrap">
            {TREND_STOCK.map((stock) => (
              <Button
                className="w-fit px-4 py-2 text-14 bg-gray200"
                key={stock}
                onClick={() => navigateToTicker(stock)}
              >
                {stock}
              </Button>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-18 font-bold">Popular ETFs</h2>
          <Spacing size={12} />
          <div className="flex gap-3 items-center flex-wrap">
            {POPULAR_ETF.map((stock) => (
              <Button
                className="w-fit px-4 py-2 text-14 bg-gray200"
                key={stock}
                onClick={() => navigateToTicker(stock)}
              >
                {stock}
              </Button>
            ))}
          </div>
        </div>
      </article>
    );
  }

  return (
    <List
      itemSize={50}
      height={500}
      width="100%"
      itemCount={searchList.length !== 0 ? searchList.length : 0}
      itemData={{ items: searchList, navigateToTicker }}
    >
      {Row}
    </List>
  );
};

const Row = ({ index, style, data }: RowProps) => {
  const { items, navigateToTicker } = data;
  const ticker = items[index].ticker.split('-')[0];

  return (
    <div
      className="flex flex-col"
      style={style}
      onClick={() => navigateToTicker(ticker)}
    >
      <p className="text-14">{ticker}</p>
      <p className="text-10 text-deep_blue">{items[index].name}</p>
    </div>
  );
};
