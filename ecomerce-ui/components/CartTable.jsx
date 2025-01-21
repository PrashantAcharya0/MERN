import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, LinearProgress } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import $axios from '../lib/axios/axios.instance';

const CartTable = (props) => {
  const cartDataArray = props.data;

  const queryClient = useQueryClient();
  // delete single cart item mutation
  const { isPending, mutate } = useMutation({
    mutationKey: ['delete-cart-item'],
    mutationFn: async (cartItemId) => {
      return await $axios.delete(`/cart/item/delete/${cartItemId}`);
    },
    onSuccess: () => {
      // queryClient.refetchQueries({ queryKey: "cart-list" });
      queryClient.invalidateQueries(['cart-list']);
    },
  });
  return (
    <Box className="p-4 md:w-2/3">
      {isPending && <LinearProgress color="secondary" className="mb-4" />}
      <TableContainer component={Paper} className="shadow-lg rounded-lg">
        <Table className="min-w-full bg-white">
          <TableHead>
            <TableRow className="bg-gray-50">
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                Image
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                Name
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                Price
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                Quantity
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartDataArray.map((item) => (
              <TableRow key={item._id} className="hover:bg-gray-100">
                <TableCell align="center">
                  <Image
                    alt={item?.productDetails?.name}
                    width={350}
                    height={350}
                    className="object-contain rounded-lg max-w-full max-h-full"
                    src={item?.productDetails?.image || '/hobbit.jpg'}
                  />
                </TableCell>
                <TableCell align="center" className="text-gray-700">
                  {item?.productDetails?.name}
                </TableCell>
                <TableCell align="center" className="text-gray-700">
                  {item.productDetails?.price}
                </TableCell>
                <TableCell align="center" className="text-gray-700">
                  {item?.orderedQuantity}
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    color="error"
                    onClick={() => {
                      mutate(item._id);
                    }}
                    className="hover:bg-red-100"
                  >
                    <CloseIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CartTable;
