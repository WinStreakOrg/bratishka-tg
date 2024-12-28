import React, { FC } from 'react';
import styled, { css } from 'styled-components';

interface IProps {
  fontSize: number;
  children: React.ReactNode | string;
  lineHeight?: number;
  isTitleLeft?: boolean;
  marginTop?: string;
}

const setTitleLeft = (props: IProps) => props.isTitleLeft ? 'left' : 'left';
const setMargintop = (props: IProps) => props.marginTop  ;

export const Root = styled.div<IProps>`


  font-family: IBM Plex Sans, sans-serif;
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: 700;
  line-height: ${({ lineHeight }) => lineHeight || 24}px;
  text-align: ${setTitleLeft};
  margin: ${setMargintop};
  color: rgba(255, 255, 255, 1);
  width: 358px;
  
  

`;


export const Title: FC<IProps> = (props) => {
  const {
    fontSize,
    children,
    lineHeight,
    marginTop,
    isTitleLeft,
  } = props;
  return (
    <Root marginTop={marginTop} isTitleLeft={isTitleLeft} lineHeight={lineHeight} fontSize={fontSize}>
      {children}
    </Root>
  );
};
