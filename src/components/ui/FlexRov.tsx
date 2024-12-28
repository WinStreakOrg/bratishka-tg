import styled, { css } from 'styled-components';


interface IFlexRov {
	gap?: number;
	alignItems?: 'start' | 'end' | 'center';
	content?: string;
  isWrapped?: boolean;
}

const getFlexRovGap = (props: IFlexRov) => props.gap;
const getFlexAlignItems = (props: IFlexRov) => props.alignItems || '';
const getFlexJustifyContent = (props: IFlexRov) => props.content || 'start';


export const FlexRov = styled.div<IFlexRov>`
  display: flex;
  flex-direction: row;
  justify-content: ${getFlexJustifyContent};
  align-items: ${getFlexAlignItems};
  gap: ${getFlexRovGap}px;
  ${({isWrapped})=> isWrapped && css`
    flex-wrap: wrap;
  `}

`;




