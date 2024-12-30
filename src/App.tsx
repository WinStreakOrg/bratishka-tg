import './App.css';
import React, { FC, useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import tg from './telegramApi';
import Auth from './pages/auth';
import { Registration } from './components/Auth/components/Registration/Registration';
import MainPage from './pages/main-page';
import { SelectBarberShop } from './components/ui/SelectBarberShop/SelectBarberShop';
import { Bonuses } from './components/MainPage/Popups/Bonuses/Bonuses';
import BarberShops from './pages/barber-shops';
import Dashboard from './pages/dashboard';
import { BonusContext } from './context/BonusProvider/BonusProvider';
import { CityContext } from './context/CityProvider/CityProvider';


interface ProtectedRouteProps {
  element: React.ReactElement;
}

const App: FC = () => {

  useEffect(() => {
    tg.ready();
  }, []);

  // const [selectBarberShop, setSelectBarberShop] = useState(false);
  // const [bonuses, setBonuses] = useState(false);

  const { bonusModal } = useContext<any>(BonusContext);
  const { cityModal, handleOpen  } = useContext<any>(CityContext);
  console.log(cityModal);
  const isAuthenticated = (): boolean => {
    const token = localStorage.getItem('token');
    return Boolean(token);
  };


  const ProtectedRoute: FC<ProtectedRouteProps> = ({ element }) => {
    return isAuthenticated() ? element : <Navigate to="/auth" replace />;
  };


  return (
    <div className="App">

      <Router>
        <Routes>
          {/* Обычные маршруты */}
          <Route path="/" element={<ProtectedRoute element={<MainPage />} />} />

          {/*<Route path="/" element={<MainPage />} />*/}

          <Route path="/barber-shops" element={<ProtectedRoute element={<BarberShops />} />} />

          {/*<Route path="/contact" component={Contact} />*/}

          {/* Защищенный маршрут */}
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />

          {/* Страница логина */}
          <Route path="/auth" element={<Auth />} />

          <Route path="/auth/registration" element={<Registration />} />
        </Routes>
      </Router>
      <SelectBarberShop handleClose={handleOpen} isOpen={cityModal} />
      {bonusModal && <Bonuses />}
    </div>
  );
};

export default App;
