import React, { createContext, useContext, useState, FC } from 'react';

interface CityContextProps {
  city: string;
  setCity: (city: string) => void;
}

const CityContext = createContext<CityContextProps | undefined>(undefined);

const CityProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [city, setCity] = useState<string>(() => localStorage.getItem('city') || 'Самара');

  const updateCity = (newCity: string) => {
    localStorage.setItem('city', newCity);
    setCity(newCity);
  };

  return (
    <CityContext.Provider value={{ city, setCity: updateCity }}>
      {children}
    </CityContext.Provider>
  );
};

export default CityProvider

// export const useCity = () => {
//   const context = useContext(CityContext);
//   if (!context) {
//     throw new Error('useCity must be used within a CityProvider');
//   }
//   return context;
// };
