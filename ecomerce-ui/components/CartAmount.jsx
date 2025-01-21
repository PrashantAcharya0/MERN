import { Box, Button, Stack, Typography } from '@mui/material';
import AmountColumn from './AmountColumn';
const CartAmount = (props) => {
  return (
    <Box className="w-full md:w-[400px] p-4 flex flex-col gap-4 md:shadow-2xl ">
      <Typography variant="h5">Order summary</Typography>

      <Box className="flex flex-col gap-4">
        <AmountColumn label="Sub total" amount={props.subTotal} />
        <AmountColumn label="Shipping charge" amount={0} />
        <AmountColumn label="Total" amount={props.subTotal} />

        <Button variant="contained" color="warning" fullWidth>
          Proceed to checkout
        </Button>
      </Box>
    </Box>
  );
};

export default CartAmount;
