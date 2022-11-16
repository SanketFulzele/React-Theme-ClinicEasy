import { LoadingButton } from '@mui/lab';
import { Card, Grid, TextField, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import { NavLink, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import "yup-phone";

const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));

// const ContentBox = styled(JustifyBox)(() => ({
//   height: '100%',
//   padding: '32px',
//   background: 'rgba(0, 0, 0, 0.01)',
// }));

const JWTRegister = styled(JustifyBox)(() => ({
  background: '#1A2038',
  minHeight: '100vh !important',
  '& .card': {
    maxWidth: 600,
    minHeight: 400,
    margin: '1rem',
    display: 'flex',
    borderRadius: 12,
    alignItems: 'center',
  },
}));

// inital login credentials
const initialValues = {
  hospitalName: "",
  ownerName: "",
  number: "",
  email: "",
  address: "",
  pincode: "",
};

// form field validation schema
const validationSchema = Yup.object().shape({
  hospitalName: Yup.string().min(2).max(50).required("Hospital Name is Required !"),
  ownerName: Yup.string().min(2).max(25).required("Owner Name is Required !"),
  number: Yup.string().required("Mobile Number is Required").max(10, "Mobile Number is Too Long !")
    .phone('IN', true, "Phone Number is Invalid !"),
  email: Yup.string().email('Invalid Email address !').required('Email Id is required!'),
  address: Yup.string().min(3).required("Address is Required !"),
  pincode: Yup.string().required("Pincode is Required !").min(6, "Pincode is Short !").max(6, "Pincode is Too Long !")
});




const JwtRegister = () => {

  const navigate = useNavigate();


  const handleFormSubmit = (values) => {
    const { address, email, hospitalName, number, ownerName, pincode } = values;

    localStorage.setItem('RegAddress', address)
    localStorage.setItem('RegEmail', email)
    localStorage.setItem('RegHospitalName', hospitalName)
    localStorage.setItem('RegNumber', number)
    localStorage.setItem('RegOwnerName', ownerName)
    localStorage.setItem('RegPincode', pincode)

    navigate('/admin-registration')

  };

  return (
    <JWTRegister>
      <Card className="card">
        <Grid container>

          {/* <Grid item sm={6} xs={12}>
            <ContentBox>
              <img
                width="100%"
                alt="Register"
                src="/assets/images/illustrations/posting_photo.svg"
              />
            </ContentBox>
          </Grid> */}

          <Grid item sm={12} xs={12}>
            {/* <Grid item sm={6} xs={12}> */}
            <Box p={4} height="100%" sx={{ textAlign: "center", }}>

              <Typography variant="h6" mb={4} gutterBottom>
                Hospital Registration
              </Typography>

              <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
              >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      size="small"
                      type="text"
                      name="hospitalName"
                      label="Hospital Name"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.hospitalName}
                      onChange={handleChange}
                      helperText={touched.hospitalName && errors.hospitalName}
                      error={Boolean(errors.hospitalName && touched.hospitalName)}
                      sx={{ mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      size="small"
                      type="text"
                      name="ownerName"
                      label="Owner Name"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.ownerName}
                      onChange={handleChange}
                      helperText={touched.ownerName && errors.ownerName}
                      error={Boolean(errors.ownerName && touched.ownerName)}
                      sx={{ mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      size="small"
                      type="number"
                      name="number"
                      label="Mobile Number"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.number}
                      onChange={handleChange}
                      helperText={touched.number && errors.number}
                      error={Boolean(errors.number && touched.number)}
                      sx={{ mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Email Id"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      helperText={touched.email && errors.email}
                      error={Boolean(errors.email && touched.email)}
                      sx={{ mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      size="small"
                      type="text"
                      name="address"
                      label="Address"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.address}
                      onChange={handleChange}
                      helperText={touched.address && errors.address}
                      error={Boolean(errors.address && touched.address)}
                      sx={{ mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      size="small"
                      type="number"
                      name="pincode"
                      label="Pincode"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.pincode}
                      onChange={handleChange}
                      helperText={touched.pincode && errors.pincode}
                      error={Boolean(errors.pincode && touched.pincode)}
                    />


                    <LoadingButton
                      type="submit"
                      color="primary"
                      variant="contained"
                      sx={{ mb: 2, mt: 3, width: "80px", letterSpacing: "2px" }}
                    >
                      Next
                    </LoadingButton>

                    <Typography sx={{ fontSize: "15px", }}>
                      Already Have an Account ?
                      <NavLink
                        to="/signin"
                        style={{ color: "var(--blue-color)", fontWeight: "600", marginLeft: "7px" }}
                      >
                        Login
                      </NavLink>
                    </Typography>
                  </form>
                )}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </JWTRegister>
  );
};

export default JwtRegister;
