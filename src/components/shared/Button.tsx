import { ButtonHTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/utils';

export const ButtonVariants = cva(
  `
  flex justify-center items-center w-full h-10 rounded-button
  `,
  {
    variants: {
      variant: {
        solid:
          'bg-blue text-white cursor-pointer hover:brightness-90 transition duration-300 ease-in-out',
        outline: 'border-blue text-black',
        disabled: 'bg-gray200 text-black cursor-not-allowed',
      },
      size: {
        sm: 'h-8 font-normal',
        md: 'h-10 font-medium',
      },
    },
    defaultVariants: {
      variant: 'solid',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  children?: React.ReactNode;
  disabled?: boolean;
  isShadow?: boolean;
  onClick: (value?: any) => void;
}

export const Button = ({
  children,
  variant,
  size,
  disabled,
  isShadow,
  className,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        isShadow && 'shadow-button',
        ButtonVariants({ variant: disabled ? 'disabled' : variant, size }),
        className
      )}
      onClick={disabled ? () => {} : onClick}
      {...props}
    >
      {children}
    </button>
  );
};
