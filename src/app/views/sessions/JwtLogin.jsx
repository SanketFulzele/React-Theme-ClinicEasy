import { LoadingButton } from '@mui/lab';
import { Card, Grid, TextField } from '@mui/material';
import { Box, styled, useTheme } from '@mui/system';
import { Paragraph } from 'app/components/Typography';
import useAuth from 'app/hooks/useAuth';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import "yup-phone";
import Typography from '@mui/material/Typography';
import axios from 'axios';

const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));

const ContentBox = styled(Box)(() => ({
  height: '100%',
  padding: '32px',
  position: 'relative',
  background: 'rgba(0, 0, 0, 0.01)',
}));

const JWTRoot = styled(JustifyBox)(() => ({
  background: '#1A2038',
  minHeight: '100% !important',
  '& .card': {
    maxWidth: 800,
    minHeight: 400,
    margin: '1rem',
    display: 'flex',
    borderRadius: 12,
    alignItems: 'center',
  },
}));

// inital login credentials
const initialValues = {
  email: 'sanket@gmail.com',
  password: 'dummyPass',
  number: "",
  remember: true,
};

////////////////////////

const DisplayNone = {
  display: "none",
}

let HideDiv = ""
let HideDiv1 = DisplayNone;

// form field validation schema
const validationSchema = Yup.object().shape({
  number: Yup.string().phone('IN', true, "Phone Number is Invalid")
    .required("Phone Number is Required"),
  password: Yup.string()
    .min(6, 'Password must be 6 character length')
    .required('Password is required!'),
  email: Yup.string().email('Invalid Email address').required('Email is required!'),
});

const JwtLogin = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [RespOTP, setRespOTP] = useState();
  const [RespMsg, setRespMsg] = useState();
  const [RespSuccess, setRespSuccess] = useState();

  const [inputOtp, setInputOtp] = useState();
  const [hideError, setHideError] = useState(false)

  const { login } = useAuth();

  const handleFormSubmit = async (values) => {

    // extra code
    setLoading(true);
    try {
      await login(values.email, values.password);
      navigate('/');
    } catch (e) {
      setLoading(false);
    }
    // extra code

    // const url = `https://trickysys.com/demo/olf/androidApi/Master/Client_Login`;
    // const url = `https://cliniceasy.in/restAPI/index.php/Login/login`;

    // let data = {
    //   // mobile: values.number,
    //   mobile: 7276070179,
    //   hospital_id: "1",
    // }

    var axios = require('axios');
    var data = JSON.stringify({
      "mobile": "7276070179",
      "hospital_id": "1",
    });

    var config = {
      method: 'post',
      url: 'https://cliniceasy.in/restAPI/index.php/Login/login',
      headers: {
        'Authorization': 'Basic bWVhdDoxMTAw',
        'Content-Type': 'application/json',
        'Cookie': 'ci_session=8ba603fb33cd95d50f0dc0a40595a414d5b14cb4'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });




    // let encoded = window.btoa('meat:1100');
    // let auth = { "Authorization": `Basic ${encoded}` };
    // bWVhdDoxMTAw = Basic64Encoded = meat:1100
    // let auth = { 'Authorization': 'Basic + bWVhdDoxMTAw' }

    // fetch(url, {
    //   method: "POST",
    //   mode: 'no-cors',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Authorization': 'basic bWVhdDoxMTAw',
    //   },
    //   body: JSON.stringify(data)
    // }).then((result) => {
    //   result.json().then(Data => console.log(Data, "POST DATA"))
    // })



    // fetch(url, {
    //   method: 'POST',
    //   mode: 'no-cors',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // }).then((result) => {
    //   result.json().then((resp) => {
    //     console.warn(resp, "Response from The Post API")
    //     setRespOTP(resp.otp)
    //     setRespMsg(resp.message)
    //     setRespSuccess(resp.success)

    //     if (resp.success == 1) {
    //       alert(resp.otp)
    //     } else {
    //       console.log("Phone number is not Registered")
    //     }
    //   })
    // })
    // 9850111244 wrong
    // 7276070179
  }

  // HideDiv = RespSuccess === 1 ? HideDiv = DisplayNone : "";
  // HideDiv1 = RespSuccess === 1 ? "" : HideDiv1 = DisplayNone;

  const handleInputOtp = () => {
    // if (inputOtp == RespOTP) {
    //   alert("Login Successfully")
    //   // navigate('/')
    // } else {
    //   setHideError(true);
    //   console.warn("the otp is wrong")
    // }
  }

  return (
    <JWTRoot>
      <Card className="card">
        <Grid container>
          <Grid item sm={6} xs={12}>
            <JustifyBox p={4} height="100%" sx={{ minWidth: 320 }}>
              <img src="/assets/images/illustrations/login-img.jpg" width="100%" alt="Login-Img" />
            </JustifyBox>
          </Grid>

          <Grid item sm={6} xs={12}>
            <ContentBox>
              <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
              >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>

                    {/* extra code */}

                    {/* <TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Email"
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
                      name="password"
                      type="password"
                      label="Password"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={handleChange}
                      helperText={touched.password && errors.password}
                      error={Boolean(errors.password && touched.password)}
                      sx={{ mb: 1.5 }}
                    /> */}
                    {/* extra code */}


                    <Box sx={HideDiv}>

                      <Typography variant="h6" gutterBottom>
                        Login With Mobile Number
                      </Typography>

                      {RespSuccess === 0 ?
                        <Typography variant='body1' sx={{ color: "red" }}> {RespMsg} </Typography>
                        : ""
                      }

                      <TextField
                        fullWidth
                        size="small"
                        name="number"
                        type="number"
                        label="Number"
                        variant="outlined"
                        onBlur={handleBlur}
                        value={values.number}
                        onChange={handleChange}
                        helperText={touched.number && errors.number}
                        error={Boolean(errors.number && touched.number)}
                        sx={{ marginTop: "13px" }}
                      />

                      <LoadingButton
                        type="submit"
                        color="primary"
                        loading={loading}
                        variant="contained"
                        sx={{ my: 2 }}
                      >
                        Login
                      </LoadingButton>

                    </Box>

                    <Box sx={HideDiv1}>

                      <Typography variant="h6" gutterBottom>
                        Verify With OTP
                      </Typography>

                      {hideError ?
                        <Typography variant='body1' sx={{ color: "red" }}> OTP Is Incorrect </Typography>
                        : ""
                      }

                      <TextField
                        fullWidth
                        size="small"
                        name="otp"
                        type="number"
                        label="Type Your OTP"
                        variant="outlined"
                        onBlur={handleBlur}
                        value={inputOtp}
                        onChange={(e) => setInputOtp(e.target.value)}
                        sx={{ marginTop: "13px" }}
                      />

                      <LoadingButton
                        type="button"
                        onClick={handleInputOtp}
                        color="primary"
                        variant="contained"
                        sx={{ my: 2 }}
                      >
                        Submit
                      </LoadingButton>

                    </Box>



                    {/* /////////////////////////////////////////////////////////////// */}

                    <Paragraph>
                      Don't have an account?
                      <NavLink
                        to="/session/signup"
                        style={{ color: theme.palette.primary.main, marginLeft: 5 }}
                      >
                        Register
                      </NavLink>
                    </Paragraph>
                  </form>
                )}
              </Formik>
            </ContentBox>
          </Grid>
        </Grid>
      </Card>
    </JWTRoot>
  );
};

export default JwtLogin;
