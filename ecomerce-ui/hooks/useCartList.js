'use client';
import { useQuery } from '@tanstack/react-query';
import { getCartList } from '../lib/routes/cart.routes';

const useCartList = () => {
  console.log('hi');
  const { data, isPending, error, isError } = useQuery({
    queryKey: ['cart-list'],
    queryFn: getCartList(),
  });

  console.log({ data });

  return { res: data, isPending, error, isError };
};

export default useCartList;
