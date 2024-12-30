import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import { Header } from '../../Header/Header';
import { Title } from '../Title';
import { Footer } from '../../Footer/Footer';
import { CityContext } from '../../../context/CityProvider/CityProvider';


interface IRoot {
  isOpen: boolean;
}

const Root = styled.div<IRoot>`
  position: fixed;
  top: ${({ isOpen }) => isOpen ? '0' : '-1000px'};
  left: 0;
  width: 100%;
  transition: top 0.7s ease;
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

interface IProps {
  isOpen: boolean;
  handleClose: ()=> void ;
}

export const SelectBarberShop: FC<IProps> = (props) => {

  const { isOpen, handleClose } = props;


  const { handleSaveCity } = useContext<any>(CityContext);

  return (
    <Root isOpen={isOpen}>
      <div className={'select_barber_shop'}>
        <Header />
        <Title marginTop={'20px 0 0 0 '} isTitleLeft lineHeight={24} fontSize={20}>{barberShops.title}</Title>
        <ListContainer>
          {barberShops.barbers.map((item, index) => {
            return (
              <ListItem onClick={() => {
                handleSaveCity(item);
                handleClose()
              }} key={index}>{item}</ListItem>
            );
          })}
        </ListContainer>
        <Footer isWinStreak={true} />
      </div>
    </Root>
  );
};
