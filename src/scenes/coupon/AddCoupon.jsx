import React from "react";
import { Box, TextField, Button } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { createCoupon } from "../../actions/coupon";

const initialValues = {
  couponName: "",
  couponCode: "",
  amount: "",
};

const couponSchema = yup.object().shape({
  couponName: yup.string().required("required"),
  couponCode: yup.string().required("required"),
  amount: yup.string().required("required"),
});

const AddCoupon = () => {
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const dispatch = useDispatch()

  const handleFormSubmit = async (values) => {
    // values.preventDefault()
    dispatch(createCoupon(values))
  };

  const clear = () => {};
  return (
    <Box m="20px">
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={couponSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form autoComplete="off" onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4,minmax(0,1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Coupon Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.couponName}
                name="couponName"
                error={!!touched.couponName && !!errors.couponName}
                helperText={touched.couponName && errors.couponName}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Coupon Code"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.couponCode}
                name="couponCode"
                error={!!touched.couponCode && !!errors.couponCode}
                helperText={touched.couponCode && errors.couponCode}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Discount Percentage"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.amount}
                name="amount"
                error={!!touched.amount && !!errors.amount}
                helperText={touched.amount && errors.amount}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Add New Coupon
              </Button>
              <Button color="primary" onClick={clear} variant="contained">
                Clear
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default AddCoupon;
