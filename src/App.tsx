import './App.css';
import React, { FC, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import tg from './telegramApi';
import Auth from './pages/auth';
import { Registration } from './components/Auth/components/Registration/Registration';
import MainPage from './pages/main-page';
import { SelectBarberShop } from './components/ui/SelectBarberShop/SelectBarberShop';
import { Bonuses } from './components/MainPage/Popups/Bonuses/Bonuses';
import BarberShops from './pages/barber-shops';


interface ProtectedRouteProps {
  element: React.ReactElement;
}

const App: FC = () => {

  useEffect(() => {
    tg.ready();
  }, []);

  const [selectBarberShop, setSelectBarberShop] = useState(false);
  const [bonuses, setBonuses] = useState(false);


  const isAuthenticated = (): boolean => {
    const token = localStorage.getItem('token');
    return Boolean(token);
  };


  const ProtectedRoute: FC<ProtectedRouteProps> = ({ element }) => {
    return isAuthenticated() ? element : <Navigate to="/auth" replace />;
  };


  const About = () => {
    return <h2>About</h2>;
  };


  const Dashboard = () => {
    return <h2>Dashboard - Protected Content</h2>;
  };




  return (
    <div className="App">

      <Router>
        <Routes>
          {/* Обычные маршруты */}
          <Route path="/about" element={<ProtectedRoute element={<About />} />} />

          <Route path="/" element={<MainPage />} />
          <Route path="/barber-shops" element={<BarberShops />} />
          {/*<Route path="/contact" component={Contact} />*/}

          {/* Защищенный маршрут */}
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />

          {/* Страница логина */}
          <Route path="/auth" element={<Auth />} />

          <Route path="/auth/registration" element={<Registration />} />

        </Routes>
      </Router>
      {selectBarberShop && <SelectBarberShop/>}
      {bonuses && <Bonuses/>}
    </div>
  );
};

export default App;
