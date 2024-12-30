import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Popup } from '../../../ui/Popup';
import { CustomText } from '../../../ui/CustomText';
import { Button } from '../../../ui/Button/Button';
import { BonusContext } from '../../../../context/BonusProvider/BonusProvider';


const Title = styled.div`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: rgba(255, 237, 0, 1);
`;

const SubTitle = styled.div`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
  max-width: 255px;
`;

const Text = styled.div`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
`;

export const Bonuses = () => {
  const { handleOpen } = useContext<any>(BonusContext);

  const [state, setState] = useState(true);


  const isAuthenticated = () => {
    const token = localStorage.getItem('token');

    if (token) {
      window.location.href = '/dashboard';
    } else {
      window.location.href = '/auth';
    }
  };

  return (
    <Popup display={state} onClick={() => handleOpen()}>
      <SubTitle>
        Приглашай друзей и получай <CustomText>500 бонусов </CustomText>за каждого друга!
      </SubTitle>
      <Title>БРАТИШКА,</Title>
      <Text>
        Уже более 5 лет мы делаем крутейшие стрижки для наших братишек и хотим,
        чтобы наш сервис становился еще проще и
        доступнее.
        А потому мы дарим 500 бонусов тебе и твоим друзьям!
      </Text>
      <Text>
        Всего 3 шага и бонусы на твоем счету
      </Text>

      <div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'start' }}>
          <img src="/images/MainPage/bonuses/1.svg" alt="" />
          <Text>
            Поделись с другом приглашением прямо в Telegram.
          </Text>
        </div>
        <Button margin={'8px 0 0 0 '}
                height={36}
                width={326}
                background={'#006CBC'}>
          Поделиться
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'start' }}>
        <img src="/images/MainPage/bonuses/2.svg" alt="" />
        <Text>
          Когда Братишка придет на стрижку - пусть скажет твой номер
        </Text>
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'start' }}>
        <img src="/images/MainPage/bonuses/3.svg" alt="" />
        <Text>
          Наша система автоматически начислит 500 бонусов тебе и другу
        </Text>
      </div>
      <Text>
        Отследить свой бонусный счет можно в личном кабинете
      </Text>
      <Button margin={'8px 0 0 0 '}
              height={36}
              width={326}
              onClick={isAuthenticated}
              background={'#FFFFFF'}>
        Личный кабинет
      </Button>

    </Popup>
  );
};
