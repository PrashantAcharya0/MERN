'use client';

import $axios from '@/lib/axios/axios.instance';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
// import Loader from './Loader';
import { CircularProgress, Pagination } from '@mui/material';
import ProductCard from './ProductCard';
import { isBuyer } from '@/utlis/check.role';

const BuyerList = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ['buyer-product-list'],
    queryFn: async () => {
      return await $axios.post('/product/buyer/list', {
        page: 1,
        limit: 10,
      });
    },

    onError: (error) => {
      console.log(error);
    },

    enabled: isBuyer(),
  });

  const productList = data?.data?.productList;

  if (isPending) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="flex flex-col justify-between items-center gap-8 mt-8">
      <div className="flex justify-center items-center gap-8 flex-wrap">
        {productList.map((item) => {
          return <ProductCard key={item._id} {...item} />;
        })}
      </div>
      <Pagination count={5} color="secondary" className="my-12" />
    </div>
  );
};

export default BuyerList;
