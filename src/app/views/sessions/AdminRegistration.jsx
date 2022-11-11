import { LoadingButton } from '@mui/lab';
import { Card, Grid, TextField, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import "yup-phone";

const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));

const ContentBox = styled(JustifyBox)(() => ({
    height: '100%',
    padding: '15px 32px',
    background: 'rgba(0, 0, 0, 0.01)',
}));

const JWTRegister = styled(JustifyBox)(() => ({
    background: '#1A2038',
    minHeight: '100vh !important',
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
    hospitalAdminName: "",
    adminNumber: "",
    email: "",
};

// form field validation schema
const validationSchema = Yup.object().shape({
    hospitalAdminName: Yup.string().min(2).max(50).required("Hospital Name is Required !"),
    adminNumber: Yup.string().required("Mobile Number is Required !").max(10, "Mobile Number is Too Long !")
        .phone('IN', true, "Phone Number is Invalid !"),
    email: Yup.string().email('Invalid Email address !').required('Email Id is required !'),
});

const Url = `https://cliniceasy.in/restAPI/index.php/Home/saveHospitalRequest`;

const AdminRegistration = () => {

    const navigate = useNavigate();

    const RegAddress = localStorage.getItem('RegAddress')
    const RegEmail = localStorage.getItem('RegEmail')
    const RegHospitalName = localStorage.getItem('RegHospitalName')
    const RegNumber = localStorage.getItem('RegNumber')
    const RegOwnerName = localStorage.getItem('RegOwnerName')
    const RegPincode = localStorage.getItem('RegPincode')


    const handleFormSubmit = (values) => {

        const { hospitalAdminName, adminNumber, email } = values;

        const Data = {
            "owner_name": RegOwnerName,
            "hospital_name": RegHospitalName,
            "hospital_contact_no": RegNumber,
            "hospital_email": RegEmail,
            "hospital_address": RegAddress,
            "hospital_pincode": RegPincode,
            "admin_name": hospitalAdminName,
            "admin_email": email,
            "admin_contact_no": adminNumber
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
                alert(resp.message)
                navigate('/session/signup')
            })
        })
    };

    return (
        <JWTRegister>
            <Card className="card">
                <Grid container>

                    <Grid item sm={6} xs={12}>
                        <ContentBox>
                            <img
                                width="100%"
                                alt="Register"
                                src='/assets/MySVG/registration.svg'
                            />
                        </ContentBox>
                    </Grid>

                    <Grid item sm={6} xs={12}>
                        <Box p={4} height="100%" sx={{ textAlign: "center", }}>

                            <Typography variant="h6" mb={4} gutterBottom>
                                Admin Registration
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
                                            name="hospitalAdminName"
                                            label="Hospital Admin Name"
                                            variant="outlined"
                                            onBlur={handleBlur}
                                            value={values.hospitalAdminName}
                                            onChange={handleChange}
                                            helperText={touched.hospitalAdminName && errors.hospitalAdminName}
                                            error={Boolean(errors.hospitalAdminName && touched.hospitalAdminName)}
                                            sx={{ mb: 3 }}
                                        />

                                        <TextField
                                            fullWidth
                                            size="small"
                                            type="number"
                                            name="adminNumber"
                                            label="Admin Mobile Number"
                                            variant="outlined"
                                            onBlur={handleBlur}
                                            value={values.adminNumber}
                                            onChange={handleChange}
                                            helperText={touched.adminNumber && errors.adminNumber}
                                            error={Boolean(errors.adminNumber && touched.adminNumber)}
                                            sx={{ mb: 3 }}
                                        />

                                        <TextField
                                            fullWidth
                                            size="small"
                                            type="email"
                                            name="email"
                                            label="Admin Email Id"
                                            variant="outlined"
                                            onBlur={handleBlur}
                                            value={values.email}
                                            onChange={handleChange}
                                            helperText={touched.email && errors.email}
                                            error={Boolean(errors.email && touched.email)}
                                        />

                                        <LoadingButton
                                            type="submit"
                                            color="primary"
                                            variant="contained"
                                            sx={{ mt: 3, }}
                                        >
                                            Submit
                                        </LoadingButton>

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
export default AdminRegistration
