import styled from 'styled-components';


type ButtonTypes = {
  width?: string | number;
  height?: string | number;
  margin?: string;
  background: string;
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
`;