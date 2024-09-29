import React, { useEffect } from 'react';
import Routes from './routes';
import { useLocation, useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/splash') {
      const timer = setTimeout(() => {
        navigate('/auth');
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [location.pathname, navigate]);
  return (
    <>
      <Routes />
    </>
  );
};

export default App;
