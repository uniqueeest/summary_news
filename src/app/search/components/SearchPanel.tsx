'use client';

import { HTMLProps } from 'react';

interface SearchPanelProps extends HTMLProps<HTMLDivElement> {
  searchValue: string;
}

export const SearchPanel = ({ searchValue, ...props }: SearchPanelProps) => {
  return <div></div>;
};
