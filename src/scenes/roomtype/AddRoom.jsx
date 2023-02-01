import React from "react";
import { Box, TextField, Button } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useDispatch } from "react-redux";
import { addRoomType } from "../../actions/roomtype";

const initialValues = {
  roomtype: "",
};

const roomtypeSchema = yup.object().shape({
  roomtype: yup.string().required("required"),
});

const AddRoom = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const dispatch = useDispatch();

  const handleFormSubmit = async (values) => {
    // values.preventDefault()
    dispatch(addRoomType(values));
  };
  return (
    <Box m="20px">
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={roomtypeSchema}
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
                label="Room Type"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.roomtype}
                name="roomtype"
                error={!!touched.roomtype && !!errors.roomtype}
                helperText={touched.roomtype && errors.roomtype}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Add New Room Type
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default AddRoom;
