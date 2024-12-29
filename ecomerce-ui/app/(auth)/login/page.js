'use client';

import $axios from '@/lib/axios/axios.instance';
import { loginUserValidationSchema } from '@/validation-schema/login.user.validation.schema';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  LinearProgress,
  TextField,
} from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();

  const { isPending, error, mutate } = useMutation({
    mutationKey: ['login-user'],
    mutationFn: async (values) => {
      return await $axios.post('/user/login', values);
    },
    onSuccess: (response) => {
      console.log(response);
      window.localStorage.setItem('token', response?.data?.accessToken);
      window.localStorage.setItem(
        'firstName',
        response?.data?.userDetails?.firstName
      );

      window.localStorage.setItem(
        'userRole',
        response?.data?.userDetails?.role
      );

      router.push('/');
    },

    onError: (error) => {
      console.log(error.response.data.message);
    },
  });
  return (
    <Box>
      {isPending && <LinearProgress color="secondary" />}
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginUserValidationSchema}
        onSubmit={(values) => {
          mutate(values);
        }}
      >
        {(formik) => {
          return (
            <form onSubmit={formik.handleSubmit} className="auth-form ">
              <p className="text-3xl font-bold">Login</p>
              {/* email */}
              <FormControl fullWidth>
                <TextField label="Email" {...formik.getFieldProps('email')} />
                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText error>{formik.errors.email}</FormHelperText>
                ) : null}
              </FormControl>

              {/* password */}
              <FormControl fullWidth>
                <TextField
                  label="Password"
                  {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? (
                  <FormHelperText error>
                    {formik.errors.password}
                  </FormHelperText>
                ) : null}
              </FormControl>

              <div className="w-full flex flex-col justify-center items-center">
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="secondary"
                  disabled={isPending}
                >
                  sign in
                </Button>

                <Link
                  href="/register"
                  className="text-md underline text-blue-600 mt-2"
                >
                  New here? Register
                </Link>
              </div>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default Login;
