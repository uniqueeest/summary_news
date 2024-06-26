export type StockType = {
  name: string;
  ticker: string;
  category: string;
  country: string;
  label: string;
  value: string;
};

export type MarketType = {
  category: string;
  datetime: number;
  headline: string;
  image: string;
  id: string;
  summary: string;
};

export type NewsListType = {
  translations: {
    detected_source_language: string;
    text: string;
  }[];
};
