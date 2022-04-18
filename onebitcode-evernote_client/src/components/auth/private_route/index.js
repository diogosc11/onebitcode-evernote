import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const privateRoute = () => {
  const auth = localStorage.getItem('user');
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default privateRoute;