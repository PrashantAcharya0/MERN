import * as Yup from 'yup';

export const registerUserValidationSchema = Yup.object({
  email: Yup.string()
    .email('Must be a valid email.')
    .required('Email is required.')
    .trim()
    .lowercase()
    .max(55, 'Email must be at max 55 characters.'),
  password: Yup.string().required('Password is required.').trim(),
  firstName: Yup.string()
    .required('First name is required.')
    .trim()
    .max(30, 'First name must be at max 30 characters.'),
  lastName: Yup.string()
    .required('Last name is required.')
    .trim()
    .max(30, 'Last name must be at max 30 characters.'),
  gender: Yup.string()
    .trim()
    .required('Gender is required.')
    .oneOf(['male', 'female', 'other']),
  role: Yup.string()
    .trim()
    .required('Role is required.')
    .oneOf(['buyer', 'seller']),
});
