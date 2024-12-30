import React from 'react';
import styled from 'styled-components';
import { Header } from '../../components/Header/Header';
import { Text } from '../../components/ui/Text';
import { Input } from '../../components/ui/Input/Input';
import { Title } from '../../components/ui/Title';
import { CustomText } from '../../components/ui/CustomText';
import { Button } from '../../components/ui/Button/Button';
import { Footer } from '../../components/Footer/Footer';


export const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 16px;
`;


export const InputContainer = styled.div`
  position: relative;
  display: flex;
  margin: 20px 0 0 0;
  flex-direction: column;
  gap: 4px;

  .pencil {
    position: absolute;
    top: 40px;
    right: 22px;
  }
`;

export const Referral = styled.div`
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;


const Dashboard = () => {
  return (
    <Root>
      <Header />
      <main>
        <img width={114} height={114} alt={''} src={'/images/dashboard/avatar.png'} />

        <InputContainer>
          <Text fontWeight={500} fontSize={16}>
            Имя
          </Text>
          <Input placeholder={'Имя'} type={'text'} />

          <img className={'pencil'} width={10} height={10} src="/images/dashboard/pencil.svg" alt="" />
        </InputContainer>

        <InputContainer>
          <Text fontWeight={500} fontSize={16}>
            Номер телефона
          </Text>
          <Input placeholder={'Номер'} type={'text'} />
          <img className={'pencil'} width={10} height={10} src="/images/dashboard/pencil.svg" alt="" />

        </InputContainer>
        <Referral>
          <Title fontSize={24} lineHeight={24}>Реферальная программа</Title>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Text isColorGrey fontSize={16}>Баланс: <CustomText>500 бонусов</CustomText></Text>
            <Button height={36} width={358} background={'#FFED00'}>Забрать бонусы</Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Text fontSize={16}>
              Пригласи друга на ссылку с помощью стрижки и получи бонусы от его походов в
              братишку!
            </Text>
            <Button height={36} width={358} background={'#006CBC'}>Отправить ссылку</Button>
          </div>
        </Referral>
      </main>

      <Footer isWinStreak={true} />
    </Root>
  );
};
export default Dashboard;
