import styled, { css } from 'styled-components';


type ButtonTypes = {
  width?: string | number;
  height?: string | number;
  isLink?: boolean;
  margin?: string;
  background: string;
  isCentered?: boolean;
  type?: string
}

const isColorBlue = (props: ButtonTypes) => props.background === '#006CBC' ? 'white' : 'black';

export const Root = styled.button<ButtonTypes>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background: ${({ background }) => background};
  margin: ${({ margin }) => margin};
  border-radius: 8px;

  color: ${isColorBlue};

  font-family: IBM Plex Sans, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;


  ${({ isLink }) => isLink && css`
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 1);
    width: 36px;
    height: 36px;
  `}

  ${({ isCentered }) => isCentered && css`
    display: flex;
    justify-content: center;
    align-items: center;

  `}


`;
