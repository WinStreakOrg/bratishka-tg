import React, { FC } from 'react';
import styled from 'styled-components';


export const Root = styled.header`

  display: flex;
  width: 358px;
  height: 48px;
  justify-content: space-between;
`;


export const Text = styled.p`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  line-height: 20px;
  text-align: center;

`;


export const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border: solid rgba(155, 156, 159, 1) 1px;
  border-radius: 50%;

`;


interface IProps {

}

export const Header: FC<IProps> = () => {


  return (
    <Root>

      <div style={{ display: 'flex', gap: '5px', alignItems: 'center', justifyContent: 'center' }}>
        <Text>Самара</Text>
        <img width={10} height={10} src="/images/Header/Vector-down.svg" alt="" />
      </div>

      <div>
        <img src="/images/Header/header-logo.svg" alt="" />
      </div>

      <div style={{ display: 'flex', gap: '5px', alignItems: 'center', justifyContent: 'center' }}>
        <Text>Войти</Text>
        <Avatar />
      </div>


    </Root>
  );
};
