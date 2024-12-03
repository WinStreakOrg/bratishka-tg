import styled, { css } from 'styled-components';


interface InputProps {
  isCode?: boolean;
}

export const Root = styled.input<InputProps>`
  width: 358px;
  height: 45px;
  padding: 12px 16px 12px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid #afadad;
  border-radius: 8px;
  color: white;
  text-align: start;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;

  ${({ isCode }) => isCode && css`
    width: 36px;
    height: 36px;
    border: 1px solid #afadad;
    border-radius: 8px;
    padding: 0;
  `}
`;