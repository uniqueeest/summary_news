import { cn } from '@/utils';

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  size?: 'md' | 'lg' | 'xl';
}

const SIZE = {
  md: 'text-18 font-bold',
  lg: 'text-24 font-bold',
  xl: 'text-28 font-bold',
};

export const SectionTitle = ({
  className,
  children,
  size = 'md',
  ...props
}: SectionTitleProps) => {
  return (
    <h2
      className={cn(
        'text-18 font-bold leading-normal p-0 m-0',
        SIZE[size],
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};
