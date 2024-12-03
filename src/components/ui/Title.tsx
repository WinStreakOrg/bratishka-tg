import React, { FC } from 'react';
import styled from 'styled-components';

interface IProps {
  fontSize: number;
  children: React.ReactNode | string;
  lineHeight?: number;
}

export const Root = styled.div<IProps>`

  font-family: IBM Plex Sans, sans-serif;
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: 700;
  line-height: ${({ lineHeight }) => lineHeight || 24}px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
`;


export const Title: FC<IProps> = (props) => {
  const {
    fontSize,
    children,
    lineHeight,
  } = props;
  return (
    <Root lineHeight={lineHeight} fontSize={fontSize}>
      {children}
    </Root>
  );
};
