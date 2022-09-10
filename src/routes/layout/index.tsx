import React from 'react';
import GNB from '../../components/GNB';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <GNB />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
