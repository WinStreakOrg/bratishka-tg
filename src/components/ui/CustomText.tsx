import styled, { css } from 'styled-components';


interface IProps {
  children: string;
}

const Root = styled.span<IProps>`
  color: rgba(255, 237, 0, 1);
  width: fit-content;
`;

export const CustomText = (props: IProps) => {


  return <Root >{props.children}</Root>;
};
