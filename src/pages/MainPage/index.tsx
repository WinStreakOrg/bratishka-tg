import React, { FC } from 'react';
import { Header } from '../../components/Header/Header';
import styled from 'styled-components';
import { FlexRov } from '../../components/ui/FlexRov';
import { Button } from '../../components/ui/Button/Button';
import { Title } from '../../components/ui/Title';
import { Text } from '../../components/ui/Text';


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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Title fontSize={20}>
          Лучший сотрудник сети
        </Title>

        <div style={{ display: 'flex', gap: '8px' }}>
          <img src="/images/MainPage/barber.svg" alt="" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div>
              <Text fontSize={16}>Максим Фамильный</Text>
              <Text isColorBlue fontSize={14}>г. Самара, ул. Авроры 114а</Text>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Text isColorGrey fontSize={16}>Возраст:</Text>
                <Text fontSize={16}>26 лет </Text>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Text isColorGrey fontSize={14}>Стаж:</Text>
                <Text fontSize={14}>8 лет</Text>
              </div>
            </div>

          </div>


        </div>

        <div>
          <Text fontSize={16}>
            Небольшой рассказ о себе. Небольшой рассказ о себе. Небольшой рассказ о себе. Небольшой рассказ о себе.
          </Text>
        </div>
      </div>

    </Root>
  );
};
export default MainPage;
