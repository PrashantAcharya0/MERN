import React from 'react';
import ProductCard from './ProductCard';
import { useQuery } from '@tanstack/react-query';
import { CircularProgress } from '@mui/material';
import $axios from '@/lib/axios/axios.instance';

const SellerList = () => {
  const { isPending, data, error } = useQuery({
    queryKey: ['seller-product-list'],
    queryFn: async () => {
      return await $axios.post('/product/seller/list', {
        page: 1,
        limit: 10,
        searchText: '',
      });
    },
  });

  const productList = data?.data.productList || [];

  if (isPending) {
    return <CircularProgress />;
  }

  return (
    <>
      <div className="card-center">
        {productList.length ? (
          productList?.map((item) => {
            return (
              <ProductCard
                key={item._id}
                // brand={item.brand}
                // name={item.name}
                // price={item.price}
                // description={item.description}
                // image={item.image}

                // OR  yo garda bhayo sab lekhna bhanda
                {...item} //Spread Operator
              />
            );
          })
        ) : (
          <p className="text-3xl bold text-red-500">No products</p>
        )}
      </div>
    </>
  );
};

export default SellerList;
