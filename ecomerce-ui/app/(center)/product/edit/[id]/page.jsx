'use client';
import { productCategories } from '@/constants/general.constant';
import $axios from '@/lib/axios/axios.instance';
import { addProductValidationSchema } from '@/validation-schema/product.validation.schema';
import {
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { Formik } from 'formik';
import { useParams } from 'next/navigation';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React from 'react';
import Loader from '@/components/loader';

const EditProductPage = () => {
  const params = useParams();
  const router = useRouter();

  const productId = params.id;

  // get product details
  const { isPending, data, isError, error } = useQuery({
    queryKey: ['get-product-detail'],
    queryFn: async () => {
      return await $axios.get(`/product/detail/${productId}`);
    },
  });

  // edit product
  const { isPending: editPending, mutate } = useMutation({
    mutationKey: ['edit-product'],
    mutationFn: async (values) => {
      return await $axios.put(`/product/edit/${productId}`, values);
    },
    onSuccess: () => {
      router.push(`/product/details/${productId}`);
    },
  });

  const productDetails = data?.data?.productDetail;

  if (isPending || editPending) {
    return <CircularProgress />;
  }

  if (isError) {
    return <div>Could not fetch data...</div>;
  }

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{
          name: productDetails?.name || '',
          brand: productDetails?.brand || '',
          price: productDetails?.price || 0,
          quantity: productDetails?.quantity || 1,
          category: productDetails?.category || '',
          freeShipping: productDetails?.freeShipping,
          description: productDetails?.description,
        }}
        validationSchema={addProductValidationSchema}
        onSubmit={(values) => {
          mutate(values);
        }}
      >
        {(formik) => {
          return (
            <form
              onSubmit={formik.handleSubmit}
              className="auth-form  min-w-[450px]"
            >
              <Typography variant="h4">Edit Product</Typography>

              <FormControl fullWidth>
                <TextField label="Name" {...formik.getFieldProps('name')} />
                {formik.touched.name && formik.errors.name ? (
                  <FormHelperText error>{formik.errors.name}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl fullWidth>
                <TextField label="Brand" {...formik.getFieldProps('brand')} />
                {formik.touched.brand && formik.errors.brand ? (
                  <FormHelperText error>{formik.errors.brand}</FormHelperText>
                ) : null}
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  label="Price"
                  {...formik.getFieldProps('price')}
                  type="number"
                />
                {formik.touched.price && formik.errors.price ? (
                  <FormHelperText error>{formik.errors.price}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  label="Quantity"
                  {...formik.getFieldProps('quantity')}
                  type="number"
                />

                {formik.touched.quantity && formik.errors.quantity ? (
                  <FormHelperText error>
                    {formik.errors.quantity}
                  </FormHelperText>
                ) : null}
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select {...formik.getFieldProps('category')} label="Category">
                  {productCategories.map((item, index) => {
                    return (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    );
                  })}
                </Select>
                {formik.touched.category && formik.errors.category ? (
                  <FormHelperText error>
                    {formik.errors.category}
                  </FormHelperText>
                ) : null}
              </FormControl>

              <FormControl fullWidth>
                <TextField
                  {...formik.getFieldProps('description')}
                  multiline
                  rows={6}
                  label="Description"
                />
                {formik.touched.description && formik.errors.description ? (
                  <FormHelperText error>
                    {formik.errors.description}
                  </FormHelperText>
                ) : null}
              </FormControl>

              <FormControl
                fullWidth
                sx={{ display: 'flex', alignItems: 'self-start' }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formik?.values?.freeShipping}
                      {...formik.getFieldProps('freeShipping')}
                    />
                  }
                  label="Free Shipping"
                  labelPlacement="start"
                />
              </FormControl>
              <Button
                // disabled={isPending}
                fullWidth
                variant="contained"
                color="secondary"
                type="submit"
              >
                submit
              </Button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default EditProductPage;
