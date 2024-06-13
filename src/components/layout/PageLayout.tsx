import { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/utils';

interface PageLayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const PageLayout = ({
  children,
  className,
  ...props
}: PageLayoutProps) => {
  return (
    <div className={cn('flex flex-col px-4 py-3', className)} {...props}>
      {children}
    </div>
  );
};
