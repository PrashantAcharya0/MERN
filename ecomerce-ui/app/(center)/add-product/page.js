'use client';
import { productCategories } from '@/constants/general.constant';
import { addProductValidationSchema } from '@/validation-schema/product.validation.schema';
import {
  Button,
  Checkbox,
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
import React from 'react';

const AddProduct = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        brand: '',
        price: '',
        quantity: 1,
        category: '',
        freeShipping: false,
        description: '',
      }}
      validationSchema={addProductValidationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => {
        return (
          <form
            onSubmit={formik.handleSubmit}
            className="auth-form  min-w-[450px]"
          >
            <Typography variant="h4">Add Product</Typography>

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
                <FormHelperText error>{formik.errors.quantity}</FormHelperText>
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
                <FormHelperText error>{formik.errors.category}</FormHelperText>
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
                control={<Checkbox {...formik.getFieldProps('freeShipping')} />}
                label="Free Shipping"
                labelPlacement="start"
              />
            </FormControl>
            <Button
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
  );
};

export default AddProduct;
