import React, { createContext, useContext, useState, FC } from 'react';

interface CityContextProps {
  cityModal: boolean;
  handleOpen: () => void;
  city: string;
  handleSaveCity: (city: string) => void;
}

export const CityContext = createContext<CityContextProps | undefined>(undefined);

const CityProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cityModal, setCityModal] = useState<boolean>(false);

  const [city, setCity] = useState<string>('Самара');

  const handleOpen = () => setCityModal(!cityModal);

  const handleSaveCity = (city: string) => {
    setCity(city);
    localStorage.setItem('city', city);
  };


  return (
    <CityContext.Provider value={{ cityModal, handleOpen, handleSaveCity, city }}>
      {children}
    </CityContext.Provider>
  );
};

export default CityProvider;
