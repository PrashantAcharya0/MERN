"use client";
import registerUserValidationSchema from "@/validation-schema/register.user.validation.schema";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const register = () => {
  return (
    <Box>
      <Formik
        initialValues={{
          email: "",
          password: "",
          firstName: "",
          lastName: "",
          gender: "",
          role: "",
        }}
        validationSchema={registerUserValidationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          return (
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col justify-between items-center min-w-[400px] shadow-2xl
               shadow-slate-500 px-8 py-4 min-h-[600px]"
            >
              <Typography variant="h3">Register</Typography>

              {/* Email */}
              <FormControl fullWidth>
                <TextField label="Email" {...formik.getFieldProps("email")} />
                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText error>{formik.errors.email}</FormHelperText>
                ) : null}
              </FormControl>

              {/* Password */}
              <FormControl fullWidth>
                <TextField
                  label="Password"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <FormHelperText error>
                    {formik.errors.password}
                  </FormHelperText>
                ) : null}
              </FormControl>

              {/* FirstName */}
              <FormControl fullWidth>
                <TextField
                  label="FirstName"
                  {...formik.getFieldProps("firstName")}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <FormHelperText error>
                    {formik.errors.firstName}
                  </FormHelperText>
                ) : null}
              </FormControl>

              {/* lastName */}
              <FormControl fullWidth>
                <TextField
                  label="LastName"
                  {...formik.getFieldProps("lastName")}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <FormHelperText error>
                    {formik.errors.lastName}
                  </FormHelperText>
                ) : null}
              </FormControl>

              {/* Gender */}
              <FormControl fullWidth>
                <InputLabel>Gender</InputLabel>
                <Select {...formik.getFieldProps("gender")}>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
                {formik.touched.gender && formik.errors.gender && (
                  <FormHelperText error>{formik.errors.gender}</FormHelperText>
                )}
              </FormControl>

              {/* Role */}
              <FormControl fullWidth>
                <InputLabel>Role</InputLabel>
                <Select {...formik.getFieldProps("role")}>
                  <MenuItem value="buyer">Buyer</MenuItem>
                  <MenuItem value="seller">Seller</MenuItem>
                </Select>
                {formik.touched.role && formik.errors.role && (
                  <FormHelperText error>{formik.errors.role}</FormHelperText>
                )}
              </FormControl>

              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="secondary"
              >
                Register
              </Button>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default register;
