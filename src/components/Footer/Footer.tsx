import React from 'react';
import styled from 'styled-components';

export const Root = styled.footer`

  width: 100%;
  height: 98px;
  gap: 20px;
  padding: 8px 16px;
  border-radius: 8px 8px 0 0;
  background: rgba(33, 35, 40, 1);

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

export const Footer = () => {
  return (
    <Root>
      <Title>Контакты</Title>
      <HotLineText>Номер горячей линии:
        <span style={{ color: 'rgba(0, 108, 188, 1)' }}> 8 800 707 0768</span>
      </HotLineText>
    </Root>
  );
};
