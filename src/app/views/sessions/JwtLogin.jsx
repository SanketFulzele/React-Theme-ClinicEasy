import { LoadingButton } from '@mui/lab';
import { Button, Card, Grid, Stack, TextField } from '@mui/material';
import { Box, styled } from '@mui/system';
import { Formik } from 'formik';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import "yup-phone";
import Typography from '@mui/material/Typography';

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
    minHeight: 450,
    margin: '1rem',
    display: 'flex',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: "center"
  },
}));

// initial login credentials
const initialValues = {
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
  number: Yup.string().required("Mobile Number is Required").max(10, "Mobile Number is Too Long")
    .phone('IN', true, "Phone Number is Invalid"),
});

const JwtLogin = () => {
  const navigate = useNavigate();

  const [RespMsg, setRespMsg] = useState();
  const [RespSuccess, setRespSuccess] = useState();

  const [inputOtp, setInputOtp] = useState();
  const [hideError, setHideError] = useState(false)

  const [userNumber, setUserNumber] = useState();

  const [hospitalId, setHospitalId] = useState();

  const URL = `https://cliniceasy.in/restAPI/index.php/Login/getHospital`;
  const url = `https://cliniceasy.in/restAPI/index.php/Login/login`;

  const handleFormSubmit = (values) => {

    const DATA = {
      "mobile": values.number,
      "player_id": "1234"
    }

    fetch(URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(DATA)
    }).then(result => {
      result.json().then(resp => {

        if (resp.success === 1) {
          setUserNumber(values.number)
          setHospitalId(resp.data.id)
          localStorage.setItem("ReferralCode", resp.data.referral_code)
          localStorage.setItem("HospitalName", resp.data.name)

          let data = {
            "mobile": values.number,
            "hospital_id": resp.data.id,
          }

          fetch(url, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then(result => {
            result.json().then(resp => {
              setRespMsg(resp.message)
              setRespSuccess(resp.success)
              alert(resp.otp)
            })
          })
        } else {
          alert(resp.message)
        }

      })
    })

  }

  // 7276070179

  HideDiv = RespSuccess === 1 ? HideDiv = DisplayNone : "";
  HideDiv1 = RespSuccess === 1 ? "" : HideDiv1 = DisplayNone;

  const Url = `https://cliniceasy.in/restAPI/index.php/Login/verifyOTP`;

  const handleInputOtp = () => {

    const Data = {
      "mobile": userNumber,
      "hospital_id": hospitalId,
      "otp": inputOtp
    }

    fetch(Url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Data)
    }).then(result => {
      result.json().then(resp => {

        if (resp.success === 1) {
          localStorage.setItem('UserId', resp.user_id)
          localStorage.setItem('UserName', resp.name)
          localStorage.setItem('UserEmail', resp.email)
          localStorage.setItem('UserMobile', resp.mobile)
          localStorage.setItem('UserRole', resp.role)
          localStorage.setItem('HospitalId', resp.hospital_id)


          navigate('/dashboard')
        } else {
          setHideError(true);
        }

      })
    })

  }

  // ===== Resend OTP Code Start's Here ========

  const ResendOtp = () => {

    const reData = {
      "mobile": userNumber,
      "hospital_id": hospitalId
    }

    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reData)
    }).then(result => {
      result.json().then(resp => {
        setRespMsg(resp.message)
        setRespSuccess(resp.success)
        alert(resp.otp)
      })
    })

  }

  // ===== Resend OTP Code End's Here ==========


  // 7276070179 Admin Number

  return (
    <JWTRoot>
      <Card className="card">
        <Grid container>
          <Grid item sm={6} xs={12}>
            <JustifyBox p={4} height="100%" sx={{ minWidth: "320px" }}>
              <img src="/assets/images/illustrations/login-img.jpg" width="100%" alt="" />
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


                    <Box sx={HideDiv}>

                      <Typography variant="h6" align='center' gutterBottom>
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

                      <Box sx={{ textAlign: "center" }}>
                        <LoadingButton
                          type="submit"
                          color="primary"
                          variant="contained"
                          sx={{ my: 2 }}
                        >
                          Login
                        </LoadingButton>
                      </Box>

                    </Box>

                    <Box sx={HideDiv1}>

                      <Typography variant="h6" align="center" gutterBottom>
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
                        label="Enter Your OTP"
                        variant="outlined"
                        onBlur={handleBlur}
                        value={inputOtp}
                        onChange={(e) => setInputOtp(e.target.value)}
                        sx={{ marginTop: "13px" }}
                      />

                      <Stack direction='row' alignItems="center" justifyContent='space-around' sx={{ marginBottom: "10px" }}>
                        <Button
                          type="button"
                          onClick={handleInputOtp}
                          variant="contained"
                        >
                          Submit
                        </Button>

                        <Button onClick={ResendOtp} sx={{ marginY: "20px" }} >
                          Resend OTP
                        </Button>

                      </Stack>

                    </Box>

                    <Typography sx={{ fontSize: "15px", fontWeight: "600", textAlign: "center" }}>
                      <NavLink
                        to="/signup"
                        style={{ color: "var(--blue-color)" }}
                      >
                        New Hospital Registration
                      </NavLink>
                    </Typography>

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