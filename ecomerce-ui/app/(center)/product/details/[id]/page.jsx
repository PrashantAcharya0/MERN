import { Typography, Box } from '@mui/material';
import React from 'react';

const ProductDetails = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <img src="/hobbit.jpg" alt="Book image" width={600}  />
      </Box>

      <Box display="flex" flexDirection="column" maxWidth="400px" ml={2}>
        <Typography variant="h5" gutterBottom>
          Name: Mouse
        </Typography>
        <Typography variant="h5" gutterBottom>
          Brand: Fantech
        </Typography>
        <Typography variant="h5" gutterBottom>
          Price: $1200
        </Typography>
        <Typography variant="h5" gutterBottom>
          Description
        </Typography>
        <Typography>
          Description The Fantech mouse is a high-performance gaming accessory
          designed for precision and comfort. It features an ergonomic design,
          customizable RGB lighting, and programmable buttons for enhanced
          gameplay. Equipped with a high-DPI sensor, it ensures accurate
          tracking and responsiveness. Built with durable materials, it provides
          a long lifespan for intense gaming sessions. Perfect for casual and
          competitive gamers.
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductDetails;
