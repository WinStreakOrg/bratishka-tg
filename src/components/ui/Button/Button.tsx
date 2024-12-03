import React, { FC } from 'react';
import { Root } from './Elements';

interface IProps {
  width?: number;
  height?: number;
  background: '#FFFFFF' | '#006CBC' | '#FFED00';
  children: React.ReactNode | string;
  onClick?: () => void;
  margin?: string;
  isLink?:boolean
}

export const Button: FC<IProps> = (props) => {

  const {
    width,
    height,
    background,
    onClick,
    children,
    margin,
    isLink
  } = props;

  return (
    <Root height={height}
          background={background}
          isLink={isLink}
          margin={margin}
          onClick={onClick}
          width={width}>
      {children}
    </Root>
  );
};
