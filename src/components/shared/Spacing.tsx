interface SpacingProps {
  size: number;
  direction?: 'vertical' | 'horizontal';
  backgroundColor?: string;
}

export const Spacing: React.FC<SpacingProps> = ({
  size,
  direction = 'vertical',
  backgroundColor,
}) => {
  const style =
    direction === 'vertical' ? { height: `${size}px` } : { width: `${size}px` };

  return (
    <div
      style={style}
      className={backgroundColor ? `bg-${backgroundColor}` : ''}
    />
  );
};
