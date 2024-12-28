import React, { FC } from 'react';
import styled from 'styled-components';

export const Root = styled.div<{ display: boolean }>`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.50);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999999;
  display: ${({ display }) => display ? 'flex' : 'none '};
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div<any>`
  width: 358px;
  height: auto;
  padding: 16px ;
  background: rgba(44, 46, 53, 1);
  //gap: 10px;
  border-radius: 8px;
  border: 1px rgba(155, 156, 159, 1) solid;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;


interface IProps {
  display: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export const Popup: FC<IProps> = (props) => {

  const { display, onClick, children } = props;
  return (
    <Root onClick={onClick} display={display}>
      <Container onClick={(event: React.MouseEvent<HTMLFormElement>) => event.stopPropagation()}>
        {children}
      </Container>
    </Root>
  );
};
