import { Box, TextField, Button } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialValues = {
  facility: "",
  icon: "",
};

const facilitySchema = yup.object().shape({
  facility: yup.string().required("required"),
  icon: yup.string().required("required"),
});

const Facilities = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = async (values) => {
    console.log(values);
    try {
      axios
        .post("http://localhost:5000/admin/addFacilities", { ...values })
        .then((response) => {});
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box m="20px">
      <Header title="Facilities" subtitle=" Add and Manage Facilities" />
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
          <form onSubmit={handleSubmit}>
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
                label="Facility"
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
                label="icon"
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

export default Facilities;
