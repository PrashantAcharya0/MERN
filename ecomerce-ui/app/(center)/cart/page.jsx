'use client';
import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import CartItemCard from '@/components/CartItemCard';
import { getCartList } from '@/lib/routes/cart.routes';
import CartEmpty from '@/components/EmptyCart';
import { isBuyer } from '@/utlis/check.role';
import { Button, CircularProgress } from '@mui/material';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import $axios from '@/lib/axios/axios.instance';

const CartPage = () => {
  const [deleteSwitch, setDeleteSwitch] = useState(false);
  // get cart list
  const { data, ispending } = useQuery({
    queryKey: ['cart-list', deleteSwitch],
    queryFn: () => getCartList(),
    enabled: isBuyer(),
  });

  const cartData = data?.data?.cartData ?? [];

  // flush cart
  const { ispending: flushCartPending, mutate } = useMutation({
    mutationKey: ['flush-cart'],
    mutationFn: async () => {
      return await $axios.delete('/cart/flush');
    },
    onSuccess: () => {
      setDeleteSwitch(!deleteSwitch);
    },
  });
  if (ispending || flushCartPending) {
    return <CircularProgress />;
  }

  if (cartData.length < 1) {
    return <CartEmpty />;
  }
  return (
    <>
      <Button
        endIcon={<RemoveShoppingCartOutlinedIcon />}
        variant="outlined"
        color="error"
        onClick={() => {
          mutate();
        }}
      >
        flush cart
      </Button>
      <div className=" flex  justify-center items-center flex-wrap gap-4 m-8">
        {cartData.map((item) => {
          return <CartItemCard key={item._id} {...item} />;
        })}
      </div>
    </>
  );
};

export default CartPage;
