'use client';

import {
  forwardRef,
  Ref,
  KeyboardEvent,
  useRef,
  ChangeEvent,
  HTMLAttributes,
  useImperativeHandle,
} from 'react';
import Image from 'next/image';

import { cn } from '@/utils';

type SearchBarProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  containerClassName?: string;
} & Omit<HTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

const SearchBar = forwardRef(
  (
    {
      value,
      onChange,
      containerClassName,
      className,
      ...props
    }: SearchBarProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const internalRef = useRef<HTMLInputElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useImperativeHandle(ref, () => internalRef.current as HTMLInputElement);

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        buttonRef.current?.click();
      }
    };

    return (
      <div
        role="search"
        className={cn(
          'flex gap-3 items-center bg-gray200 px-4 py-3 w-full shadow-out rounded-button',
          containerClassName
        )}
      >
        <Image src="/icons/search.svg" alt="search" width={20} height={20} />
        <input
          ref={internalRef}
          value={value}
          onChange={onChange}
          placeholder="Stocks, Crypto..."
          aria-label="Stocks, Crypto..."
          onKeyDown={handleKeyDown}
          className={cn(
            'flex-1 bg-transparent text-deep_blue outline-none',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

SearchBar.displayName = 'SearchBar';

export { SearchBar };
