import React from "react";
import { Box, TextField, Button } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useDispatch } from "react-redux";
import { newFacility } from "../../actions/facility";

const initialValues = {
  facility: "",
  icon: "",
};

const facilitySchema = yup.object().shape({
  facility: yup.string().required("required"),
  icon: yup.string().required("required"),
});

const AddFacility = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const dispatch = useDispatch();

  const handleFormSubmit = async (values) => {
    // values.preventDefault()
    dispatch(newFacility(values));
  };

  return (
    <Box m="20px">
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={facilitySchema}
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
                label="Facility Type"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.facility}
                name="facility"
                error={!!touched.facility && !!errors.facility}
                helperText={touched.facility && errors.facility}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Icon"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.icon}
                name="icon"
                error={!!touched.icon && !!errors.icon}
                helperText={touched.icon && errors.icon}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Add New Facility
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default AddFacility;
