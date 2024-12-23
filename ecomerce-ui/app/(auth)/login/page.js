'use client';
import loginUserValidationSchema from '@/validation-schema/login.user.validation.schema';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { Formik } from 'formik';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  return (
    <Box>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginUserValidationSchema}
        onSubmit={async (values) => {
          try {
            const reponse = await axios({
              method: 'POST',
              url: 'http://localhost:8080/user/login',
              data: values,
            });

            localStorage.setItem('token', reponse?.data?.accessToken);
            localStorage.setItem('userRole', reponse?.data?.userDetails?.role);
            localStorage.setItem(
              'firstName',
              reponse?.data?.userDetails?.firstName
            );
            router.push('/');
          } catch (err) {
            console.log(err);
          }
        }}
      >
        {(formik) => {
          return (
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col justify-between items-center min-w-[400px] shadow-2xl
               shadow-slate-500 px-8 py-4 min-h-[400px]"
            >
              <Typography variant="h3">Sign in</Typography>

              <FormControl fullWidth>
                <TextField label="Email" {...formik.getFieldProps('email')} />
                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText error>{formik.errors.email}</FormHelperText>
                ) : null}
              </FormControl>

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
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="secondary"
              >
                Login
              </Button>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default Login;
