import React, { FC, useState } from 'react';
import { Title } from '../../ui/Title';
import { Popup } from '../../ui/Popup';
import styled from 'styled-components';

import {
  bratishkaServices,
  artDirector,
  topMaster,
} from './content';

const TitlePopup = styled.div`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: rgba(255, 255, 255, 1);

`;
const Text = styled.div`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: rgba(255, 255, 255, 1);
  max-width: 207px;
`;

interface IProps {
  handleServicesPopupOpen?: () => void;
}

export const ServicesPrices: FC<IProps> = () => {

  const [servicesPopup, setServicesPopup] = useState(false);
  const [artDirectorPopup, setArtDirectorPopup] = useState(false);
  const [topMasterPopup, setTopMasterPopup] = useState(false);


  return (
    <>
      <Title fontSize={16}>
        Услуги и цены
      </Title>
      <div style={{ display: 'flex', gap: '8px' }}>
        <img style={{ cursor: 'pointer' }}
             onClick={() => setServicesPopup(true)}
             src="/images/MainPage/bratishka.png"
             alt="" />
        <img style={{ cursor: 'pointer' }}
             onClick={() => setTopMasterPopup(true)}
             src="/images/MainPage/top-master.png"
             alt="" />
      </div>
      <div>
        <img style={{ cursor: 'pointer' }}
             onClick={() => setArtDirectorPopup(true)}
             src="/images/MainPage/art-director.png"
             alt="" />
      </div>

      {servicesPopup && (
        <Popup display={servicesPopup} onClick={() => setServicesPopup((false))}>
          <TitlePopup>
            {bratishkaServices.title}
          </TitlePopup>
          {bratishkaServices.content.map((item, index) => {
            return (
              <div key={item.name} style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                <Text>
                  {item.name}
                </Text>
                <Text>
                  {item.price}
                </Text>
              </div>
            );
          })}
        </Popup>
      )}

      {artDirectorPopup && (
        <Popup display={artDirectorPopup} onClick={() => setArtDirectorPopup((false))}>
          <TitlePopup>
            {artDirector.title}
          </TitlePopup>
          {artDirector.content.map((item, index) => {
            return (
              <div key={item.name} style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                <Text>
                  {item.name}
                </Text>
                <Text>
                  {item.price}
                </Text>
              </div>
            );
          })}
        </Popup>
      )}

      {topMasterPopup && (
        <Popup display={topMasterPopup} onClick={() => setTopMasterPopup((false))}>
          <TitlePopup>
            {topMaster.title}
          </TitlePopup>
          {topMaster.content.map((item, index) => {
            return (
              <div key={item.name} style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                <Text>
                  {item.name}
                </Text>
                <Text>
                  {item.price}
                </Text>
              </div>
            );
          })}
        </Popup>
      )}
    </>
  );
};
