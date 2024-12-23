'use client';
import React from 'react';
import BuyerList from '@/components/BuyerList';
import SellerList from '@/components/SellerList';
const Home = () => {
  const userRole = localStorage.getItem('userRole');
  return (
    <div>
      <p className="text-5xl bold unnderline ">
        Welcome {localStorage.getItem('firstName')}
      </p>

      {userRole === 'buyer' ? <BuyerList /> : <SellerList />}
    </div>
  );
};

export default Home;
