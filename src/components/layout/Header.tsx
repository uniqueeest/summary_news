import { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/utils';

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  leftSlot?: ReactNode;
  title: string;
  rightSlot?: ReactNode;
}

export const Header = ({
  leftSlot,
  title,
  rightSlot,
  className,
  ...props
}: HeaderProps) => {
  return (
    <div
      className={cn(
        'sticky top-0 z-10 flex justify-center items-center p-4 w-full font-bold text-18 bg-[#f7fafc]',
        className
      )}
      {...props}
    >
      {leftSlot && <div className="absolute top-4 left-4">{leftSlot}</div>}
      {title}
      {rightSlot && <div className="absolute top-4 right-4">{rightSlot}</div>}
    </div>
  );
};
