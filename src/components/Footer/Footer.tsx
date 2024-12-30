import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';

export const Root = styled.footer<{ isWinStreak: boolean, height?: number }>`

  width: 100%;
  height: ${({ height }) => height || 98}px;
  gap: 20px;
  padding: 8px 16px;
  border-radius: 8px 8px 0 0;
  background: rgba(33, 35, 40, 1);

  ${({ isWinStreak }) => isWinStreak && css`
    background: rgba(44, 46, 53, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  `}
`;

export const Title = styled.div`

  font-family: IBM Plex Sans, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: white;

`;

export const HotLineText = styled.div`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  margin-top: 10px;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: rgba(255, 255, 255, 0.5);
`;

interface IProps {
  isWinStreak: boolean;
  height?: number;
}

export const Footer: FC<IProps> = ({ isWinStreak = false, height }) => {


  return (
    <Root height={height} isWinStreak={isWinStreak}>
      {isWinStreak
        ?
        (<img src="/images/MainPage/winStreak.svg" alt="" />)
        : (
          <>
            <Title>Контакты</Title>
            <HotLineText>Номер горячей линии:
              <span style={{ color: 'rgba(0, 108, 188, 1)' }}> 8 800 707 0768</span>
            </HotLineText>
          </>
        )}
    </Root>
  );
};
