import React, { createContext, useContext, useState, FC } from 'react';

interface CityContextProps {
  bonusModal: boolean;
  handleOpen: () => void;
}

export const BonusContext = createContext<CityContextProps | undefined>(undefined);

const BonusProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bonusModal, setBonusModal] = useState<boolean>(false);

  const handleOpen = () => {
    setBonusModal(!bonusModal);
  };

  return (
    <BonusContext.Provider value={{ bonusModal, handleOpen }}>
      {children}
    </BonusContext.Provider>
  );
};

export default BonusProvider;

// export const useCity = () => {
//   const context = useContext(CityContext);
//   if (!context) {
//     throw new Error('useCity must be used within a CityProvider');
//   }
//   return context;
// };
