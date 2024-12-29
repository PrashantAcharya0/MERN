'use client';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const ProductCard = () => {
  return (
    <Box
      sx={{
        mt: 2,
        width: '400px',
        boxShadow:
          ' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
      }}
    >
      <Image
        src="/hobbit.jpg"
        alt="Book image"
        height={400}
        width={400}
        priority
      />
      <Box
        sx={{
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h5">Book</Typography>
          <Chip label="Sajha" color="success" variant="outlined" />
          <Typography variant="h5">$400</Typography>
        </Stack>

        <Typography sx={{ textAlign: 'justify' }}>
          The Hobbit is set in Middle-earth and follows home-loving Bilbo
          Baggins, the hobbit of the title, who joins the wizard Gandalf and the
          thirteen dwarves of Thorin's Company, on a quest to reclaim the
          dwarves' home and treasure from the dragon Smaug...
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          <Button
            color="error"
            variant="contained"
            startIcon={<DeleteOutlineOutlinedIcon />}
          >
            Delete
          </Button>
          <Button
            color="success"
            variant="contained"
            startIcon={<VisibilityOutlinedIcon />}
          >
            View More
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductCard;
