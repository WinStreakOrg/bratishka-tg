import React, { FC } from 'react';
import { Root } from './Elements';

interface IProps {
  width?: number;
  height?: number;
  background: '#FFFFFF' | '#006CBC' | '#FFED00';
  children: React.ReactNode | string;
  onClick?: () => void;
  margin?: string;
  isLink?: boolean;
  isCentered?: boolean;
  type?: 'text' | 'submit';

}

export const Button: FC<IProps> = (props) => {

  const {
    width,
    height,
    background,
    onClick,
    children,
    margin,
    isLink,
    type,
    isCentered,
  } = props;

  return (
    <Root height={height}
          background={background}
          isLink={isLink}
          type={type}
          margin={margin}
          isCentered={isCentered}
          onClick={onClick}
          width={width}>
      {children}
    </Root>
  );
};
