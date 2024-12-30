import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Header } from '../../components/Header/Header';
import { Title } from '../../components/ui/Title';
import { Text } from '../../components/ui/Text';
import { FlexRov } from '../../components/ui/FlexRov';
import { Button } from '../../components/ui/Button/Button';
import { Footer } from '../../components/Footer/Footer';
import { Popup } from '../../components/ui/Popup';


export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 16px;
`;

export const Barber = styled.div<{ image: string }>`
  position: relative;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  width: 114px;
  cursor: pointer;
  height: 114px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: end;
  padding: 4px 8px;
  justify-content: space-between;


  p {
    z-index: 2;
  }

  img {
    margin: 0 0 2px 0;
    z-index: 2;
  }

  #blur {
    width: 103px;
    filter: blur(2px);
    position: absolute;
    bottom: 0;
    z-index: 1;
    height: 28px;
    background: rgba(0, 0, 0, 0.55);
  }
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const barbers = [
  {
    name: 'Максим',
    image: '/images/BarberShops/barber-vip.png',
    star: '/images/BarberShops/star.svg',
    age: '26 лет',
    experience: '8 лет',
    employee: 'Сотрудник месяца',
    about: 'Небольшой рассказ о себе. Небольшой рассказ о себе. Небольшой рассказ о себе. Небольшой рассказ о себе.',
  },
  {
    name: 'Эрнис',
    image: '/images/BarberShops/barber-default.png',
    age: '25 лет',
    experience: '3 лет',
    about: 'Небольшой рассказ о себе. Небольшой рассказ о себе. Небольшой рассказ о себе. Небольшой рассказ о себе.',
  },
  {
    name: 'Эрнис',
    image: '/images/BarberShops/barber-default.png',
    age: '25 лет',
    experience: '3 лет',
    about: 'Небольшой рассказ о себе. Небольшой рассказ о себе. Небольшой рассказ о себе. Небольшой рассказ о себе.',
  },
];

const masters = [
  {
    name: 'Максим',
    image: '/images/BarberShops/barber-vip.png',
    star: '/images/BarberShops/star.svg',
    age: '26 лет',
    experience: '8 лет',
    employee: 'Сотрудник месяца',
    about: 'Небольшой рассказ о себе. Небольшой рассказ о себе. Небольшой рассказ о себе. Небольшой рассказ о себе.',
  },
  {
    name: 'Эрнис',
    image: '/images/BarberShops/barber-default.png',
    age: '25 лет',
    experience: '3 лет',
    about: 'Небольшой рассказ о себе. Небольшой рассказ о себе. Небольшой рассказ о себе. Небольшой рассказ о себе.',
  },
  {
    name: 'Эрнис',
    image: '/images/BarberShops/barber-default.png',
    age: '25 лет',
    experience: '3 лет',
    about: 'Небольшой рассказ о себе. Небольшой рассказ о себе. Небольшой рассказ о себе. Небольшой рассказ о себе.',
  },
  {
    name: 'Эрнис',
    image: '/images/BarberShops/barber-default.png',
    age: '25 лет',
    experience: '3 лет',
    about: 'Небольшой рассказ о себе. Небольшой рассказ о себе. Небольшой рассказ о себе. Небольшой рассказ о себе.',
  },
];


const BarberShops = () => {


  const [barberPopup, setBarberPopup] = useState(false);
  const [barberData, setBarberData] = useState({});


  return (
    <>
      <Root>
        <Header />
        <main>
          <div>
            <Title fontSize={20} lineHeight={24} marginTop={'0 0 8px 0'}>
              Аврора 114а
            </Title>
            <img src="/images/BarberShops/avrora.png" alt="" />
          </div>

          <div>
            <Title fontSize={16} lineHeight={20} marginTop={'20px 0 15px 0'}>
              Кто сегодня на смене
            </Title>
            <FlexRov gap={8}>
              {barbers.map((item, index) => {
                return (
                  <Barber onClick={() => {
                    setBarberData(item);
                    setBarberPopup(true);
                  }} key={index} image={item.image}>
                    <p> {item.name} </p>
                    {item.star && <img alt={''} src={item.star} />}
                    <div id={'blur'} />
                  </Barber>
                );
              })}
            </FlexRov>
          </div>
          <div>
            <Title fontSize={16} lineHeight={20} marginTop={'20px 0 15px 0'}>
              Наши мастера
            </Title>
            <FlexRov isWrapped gap={8}>
              {masters.map((item, index) => {
                return (
                  <Barber onClick={() => {
                    setBarberData(item);
                    setBarberPopup(true);
                  }} key={index} image={item.image}>
                    <p> {item.name} </p>
                    {item.star && <img alt={''} src={item.star} />}
                    <div id={'blur'} />
                  </Barber>
                );
              })}
            </FlexRov>
          </div>
        </main>
        <Contacts>
          <Title fontSize={16} lineHeight={20} marginTop={'20px 0 5px 0'}>
            Контакты
          </Title>
          <Text fontSize={16}>+7 800 707 0768 </Text>
          <Text fontSize={16}>г. Самара, ул. Антонова-Овсеенко 101</Text>

          <Button height={36} width={358} background={'#FFFFFF'}>Показать на карте</Button>
          <FlexRov gap={8}>
            <Button height={36} width={314} background={'#006CBC'}>Оставить отзыв</Button>
            <Button isCentered height={36} width={36} background={'#FFFFFF'}>
              <img src="/images/BarberShops/telegram.svg" alt="" />
            </Button>
          </FlexRov>
        </Contacts>

        <Footer isWinStreak={true} />
      </Root>

      {barberPopup && <BarberPopup content={barberData} barberPopup={barberPopup} onClose={setBarberPopup} />}
    </>
  );
};

const BarberPopup = (props: any) => {
  const { barberPopup, onClose, content } = props;
  const {
    name,
    image,
    age,
    experience,
    employee,
    about,
  } = content;


  return (

    <Popup onClick={() => onClose(false)} display={barberPopup}>
      <FlexRov gap={5}>
        <img src={image} alt="" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div>
            <Title fontSize={16} lineHeight={20}>{name}</Title>
            {employee && <Text isColorBlue fontSize={16}>{employee}</Text>}
          </div>
          <FlexRov gap={5}>
            <Text isColorGrey fontSize={16}>Возраст:</Text>
            <Text fontSize={16}>{age}</Text>
          </FlexRov>
          <FlexRov gap={5}>
            <Text isColorGrey fontSize={16}>Стаж:</Text>
            <Text fontSize={16}>{experience}</Text>
          </FlexRov>
        </div>
      </FlexRov>
      <Text fontSize={16}>{about}</Text>
    </Popup>
  );
};


export default BarberShops;
