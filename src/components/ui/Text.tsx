import React, { FC } from 'react';
import styled, { css } from 'styled-components';


interface IProps {
  fontSize: number;
  children: React.ReactNode | string;
  isColorBlue?: boolean;
  isColorGrey?: boolean;
  fontWeight?: number;
}

export const Root = styled.div<IProps>`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  font-size: ${({ fontSize }) => fontSize}px;
  color: rgba(255, 255, 255, 1);


  ${({ isColorBlue }) => isColorBlue && css`color: rgba(0, 108, 188, 1);`}
  ${({ isColorGrey }) => isColorGrey && css`color: rgba(255, 255, 255, 0.5);`}
`;
export const Text: FC<IProps> = (props) => {
  const {
    fontSize, children, isColorBlue, isColorGrey, fontWeight,
  } = props;
  return (
    <Root isColorGrey={isColorGrey} fontWeight={fontWeight} isColorBlue={isColorBlue} fontSize={fontSize}>
      {children}
    </Root>
  );
};

