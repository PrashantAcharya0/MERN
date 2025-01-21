'use client';
import CartAmount from '@/components/CartAmount';
import CartTable from '@/components/CartTable';
import CartEmpty from '@/components/EmptyCart';
import $axios from '@/lib/axios/axios.instance';
import { getCartList } from '@/lib/routes/cart.routes';
import { isBuyer } from '@/utlis/check.role';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import { Button, CircularProgress } from '@mui/material';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

const CartPage = () => {
  const [deleteSwitch, setDeleteSwitch] = useState(false);

  // get cart list
  const { data, isPending } = useQuery({
    queryKey: ['cart-list', deleteSwitch],
    queryFn: () => getCartList(),
    enabled: isBuyer(),
  });

  const cartData = data?.data?.cartData;
  const subTotal = data?.data?.subTotal;
  const queryClient = useQueryClient();
  // flush cart
  const { isPending: flushCartPending, mutate } = useMutation({
    mutationKey: ['flush-cart'],
    mutationFn: async () => {
      return await $axios.delete('/cart/flush');
    },
    onSuccess: () => {
      setDeleteSwitch(!deleteSwitch);
      queryClient.invalidateQueries(['cart-item-count']);
    },
  });
  if (isPending || flushCartPending) {
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
      <div className="flex justify-center  md:justify-around items-center  gap-4 md:p-8 w-full flex-wrap ">
        <CartTable data={cartData} />
        <CartAmount subTotal={subTotal} />
      </div>
    </>
  );
};

export default CartPage;
