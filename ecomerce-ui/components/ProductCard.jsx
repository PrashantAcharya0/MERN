'use client';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useRouter } from 'next/navigation';
import { currency } from '@/constants/general.constant';

const ProductCard = (props) => {
  const productId = props._id;
  const router = useRouter();

  return (
    <Box className="w-[400px] shadow-2xl flex flex-col justify-between">
      {/* TODO: manage overflow */}
      <Image
        src={props.image || '/hobbit.jpg'}
        height={400}
        width={400}
        alt="Book image"
      />
      <Box className="flex flex-col gap-8 p-4">
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h5">{props.name}</Typography>
          <Chip label={props.brand} color="success" variant="outlined" />
          <Typography variant="h5">
            {currency}
            {props.price}
          </Typography>
        </Stack>

        <Typography
          sx={{
            textAlign: 'justify',
            display: '-webkit-box', // handle multi-line truncation.
            WebkitBoxOrient: 'vertical', // Defines the direction in which the text content flows inside the box
            WebkitLineClamp: 5, // Limits the number of visible lines to 6
            overflow: 'hidden', // Hide overflow
            height: '120px',
          }}
        >
          {props.description}
        </Typography>

        <Stack direction="row" justifyContent="space-between">
          <Button
            fullWidth
            color="success"
            variant="contained"
            startIcon={<VisibilityOutlinedIcon />}
            onClick={() => {
              router.push(`/product/details/${productId}`);
            }}
          >
            View More
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductCard;
