import React from 'react';
import styled from 'styled-components';
import { Header } from '../../Header/Header';
import { Title } from '../Title';
import { Footer } from '../../Footer/Footer';


const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  display: flex;
  justify-content: center;
  height: 100%;
  background: #2C2E35;

  .select_barber_shop {
    width: 390px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
;
`;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 358px;
  margin: 20px 0 0 0;
`;
const ListItem = styled.li`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
  color: rgba(255, 255, 255, 1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  height: 36px;
  text-align: left;
`;

const barberShops = {
  title: 'Выбери барбершоп',
  barbers: [
    '1-й квартал 48 (Новая Самара)',
    'Аврора 114а',
    'Алабина 44 (Южный город 2)',
    'Антонова-Овсеенко 101',
    'Арцыбушевская 175',
    'Дыбенко 20',
    'Ерошевского 19',
    'Кирова 80',
    'Кирова 130',
    'Крутые ключи 33',
    'Мира 15',
    'Некрасовская 63',
  ],
};


export const SelectBarberShop = () => {


  const saveCityToLocaleStorage = (city: string) => localStorage.setItem('city', city);


  return (
    <Root>
      <div className={'select_barber_shop'}>
        <Header />
        <Title marginTop={'20px 0 0 0 '} isTitleLeft lineHeight={24} fontSize={20}>{barberShops.title}</Title>
        <ListContainer>
          {barberShops.barbers.map((item, index) => {
            return (
              <ListItem onClick={() => saveCityToLocaleStorage(item)} key={index}>{item}</ListItem>
            );
          })}
        </ListContainer>
        <Footer isWinStreak={true} />
      </div>
    </Root>
  );
};
