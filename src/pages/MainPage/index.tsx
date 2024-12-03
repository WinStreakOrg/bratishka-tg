import React, { FC } from 'react';
import { Header } from '../../components/Header/Header';
import styled from 'styled-components';
import { FlexRov } from '../../components/ui/FlexRov';
import { Button } from '../../components/ui/Button/Button';


export const Root = styled.main`

  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 16px;

`;

const MainPage: FC = () => {
  return (
    <Root>
      <Header />
      <div>
        <img src="/images/MainPage/5-years.png" alt="" />
      </div>
      <div>
        <img src="/images/MainPage/500-bonus.png" alt="" />
      </div>
      <FlexRov gap={8}>
        <Button width={175} height={36} background={'#FFED00'}>Пригласить друга</Button>
        <Button width={175} height={36} background={'#006CBC'}>Проверить бонусы</Button>
      </FlexRov>
      <div></div>

    </Root>
  );
};
export default MainPage;
