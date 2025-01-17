'use client';

import BuyerList from '@/components/BuyerList';
import Loader from '@/components/loader';
import SellerList from '@/components/SellerList';
import { isSeller } from '@/utlis/check.role';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Home = () => {
  const router = useRouter();
  const [userRole, setUserRole] = useState(null);
  const [firstName, setFirstName] = useState('');

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    if (typeof window !== undefined) {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    setUserRole(window.localStorage.getItem('userRole'));
    setFirstName(window.localStorage.getItem('firstName'));
  }, []);

  if (!isMounted) {
    return <Loader />;
  }
  return (
    <div>
      <p className="text-5xl text-purple-500 bold underline mt-2 mb-4">
        Welcome {firstName}
      </p>

      {isSeller() && (
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          onClick={() => {
            router.push('/add-product');
          }}
        >
          add product
        </Button>
      )}

      {userRole === 'buyer' ? <BuyerList /> : <SellerList />}
    </div>
  );
};

export default Home;
