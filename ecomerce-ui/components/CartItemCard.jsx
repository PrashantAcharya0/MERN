'use client';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {
  Button,
  Checkbox,
  Chip,
  IconButton,
  LinearProgress,
  Typography,
} from '@mui/material';
import { Box, Stack } from '@mui/system';
import Image from 'next/image';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import $axios from '../lib/axios/axios.instance';

const CartItemCard = (props) => {
  console.log(props);
  const [count, setCount] = useState(props.orderedQuantity);

  const increaseCount = () => setCount((prevCount) => prevCount + 1);
  const decreaseCount = () =>
    setCount((prevCount) => Math.max(prevCount - 1, 1));

  const cartItemId = props?._id;
  const queryClient = useQueryClient();
  // delete single cart item mutation
  const { ispending, mutate } = useMutation({
    mutationKey: ['delete-cart-item'],
    mutationFn: async () => {
      return await $axios.delete(`/cart/item/delete/${cartItemId}`);
    },
    onSuccess: () => {
      // queryClient.refetchQueries({ queryKey: "cart-list" });
      queryClient.invalidateQueries(['cart-list']);
    },
  });

  return (
    <Box>
      {ispending && <LinearProgress />}
      <div className="flex flex-col md:flex-row shadow-lg shadow-pink-300   mx-auto w-[700px] my-4 p-6 rounded-lg bg-white">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src={props?.productDetails?.image || '/hobbit.jpg'}
            alt={props?.productDetails?.name}
            width={350}
            height={350}
            className="object-contain max-h-full max-w-full rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-between items-start gap-6 w-full md:w-1/2 mt-4 md:mt-0 md:ml-8">
          <Typography
            variant="h4"
            fontWeight="bold"
            color="secondary"
            className="capitalize"
          >
            {props?.productDetails?.name}
          </Typography>
          <Chip label="Patagonia" color="secondary" className="text-sm" />
          <Typography
            variant="body1"
            color="text.secondary"
            className="capitalize"
          >
            Category: <strong>{props?.productDetails?.category}</strong>
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Price: <strong>${props?.productDetails?.price}</strong>
          </Typography>
          <Stack
            direction="row"
            justifyContent="start"
            alignItems="center"
            gap={2}
          >
            <Typography variant="body1" color="text.secondary">
              Free Shipping
            </Typography>
            <Checkbox
              color="success"
              checked={props?.productDetails?.freeShipping}
            />
          </Stack>
          <div className="flex justify-center items-center gap-4">
            <IconButton
              color="success"
              size="medium"
              onClick={increaseCount}
              aria-label="Increase quantity"
            >
              <AddIcon />
            </IconButton>
            <Typography variant="h6" className="font-bold text-gray-800">
              {count}
            </Typography>
            <IconButton
              color="error"
              size="medium"
              onClick={decreaseCount}
              aria-label="Decrease quantity"
              disabled={count === 1}
            >
              <RemoveIcon />
            </IconButton>
          </div>
          <Button
            variant="contained"
            color="error"
            className="mt-4"
            onClick={() => {
              mutate();
            }}
          >
            Remove item
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default CartItemCard;
