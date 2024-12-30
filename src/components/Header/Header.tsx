import React, { FC, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { CityContext } from '../../context/CityProvider/CityProvider';


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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
  text-align: center;

`;

export const Avatar = styled.div`
  width: 36px;
  cursor: pointer;
  height: 36px;
  border: solid rgba(155, 156, 159, 1) 1px;
  border-radius: 50%;

`;

export const Header: FC = () => {
  // const [city, setCity] = useState<string>('Самара');
  const [name, setName] = useState<string>('');


  const { handleOpen , city} = useContext<any>(CityContext);

  useEffect(() => {

    const savedCity = localStorage.getItem('city');
    const savedName = localStorage.getItem('name');

    // if (savedCity) setCity(savedCity);
    if (savedName) setName(savedName);


  }, []);


  const isAuthenticated = () => {
    const token = localStorage.getItem('token');

    if (token) {
      window.location.href = '/dashboard';
    }
  };


  return (
    <Root>

      <div onClick={handleOpen}
           style={{ display: 'flex', cursor: 'pointer', gap: '5px', alignItems: 'center', justifyContent: 'center' }}>
        <Text>{city}</Text>
        <img width={10} height={10} src="/images/Header/Vector-down.svg" alt="" />
      </div>

      <a href={'/'}>
        <div>
          <img src="/images/Header/header-logo.svg" alt="" />
        </div>
      </a>

      <div onClick={isAuthenticated}
           style={{ display: 'flex', gap: '5px', alignItems: 'center', justifyContent: 'center' }}>
        <Text>{name || 'Войти'}</Text>
        <Avatar />
      </div>


    </Root>
  );
};
