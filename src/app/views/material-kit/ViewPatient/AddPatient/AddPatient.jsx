import React from 'react'
import { Button, FormControl, InputLabel, MenuItem, Paper, Select, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Formik } from 'formik';
import * as Yup from "yup";
import "yup-phone";
import HeadingComp from 'app/views/CommonComp/HeadingComp';
import { useNavigate } from 'react-router-dom';

// inital login credentials
const initialValues = {
    name: "",
    number: localStorage.getItem('BookAppointmentNumber'),
    email: "",
    address: "",
    date: "",
    gender: "",
};

// form field validation schema
const validationSchema = Yup.object().shape({
    name: Yup.string().min(2).max(25).required("User Name is Required"),
    number: Yup.string().required("Mobile Number is Required").max(10, "Mobile Number is Too Long")
        .phone('IN', true, "Phone Number is Invalid"),
    email: Yup.string().email('Invalid Email address').required('Email is required!'),
    address: Yup.string().min(5).required("Address is Required"),
    date: Yup.string().required("Date is Required"),
    gender: Yup.string().required("Gender is Required"),
});

const HospitalId = localStorage.getItem('HospitalId');
const UserId = localStorage.getItem('UserId');

const AddPatient = () => {


    const navigate = useNavigate();

    const BookAppointmentHeading = {
        padding: "15px",
        textAlign: "center",
        color: "var(--blue-color)",
    }

    const NewAppointmentBox = {
        margin: "20px ",
        padding: "15px",
    }

    const Url = `https://cliniceasy.in/restAPI/index.php/Home/savePatient`;

    const handleFormSubmit = (values) => {
        localStorage.setItem('patientName', values.name);
        localStorage.setItem('patientDate', values.date);
        localStorage.setItem('BookAppointmentNumber', values.number);

        const Data = {
            "hospital_id": HospitalId,
            "user_id": UserId,
            "mobile": values.number,
            "name": values.name,
            "email": values.email,
            "address": values.address,
            "gender": values.gender,
            "dob": values.date,
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
                localStorage.setItem('patientId', resp.data.patient_id)
            })
        }).then(() => {
            navigate('/book-new-appointment')
        })
    }


    return (
        <Box>
            <HeadingComp heading="View Patient" navigate="/" />

            <Paper sx={NewAppointmentBox}>
                <Typography variant='h6' sx={BookAppointmentHeading}>
                    Add Patient
                </Typography>

                <Formik
                    onSubmit={handleFormSubmit}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <Box sx={{ width: { lg: "40vw", sm: "50vw", xs: "85vw" }, margin: "0 auto", padding: "10px 0px" }}>

                                <TextField
                                    fullWidth
                                    size="small"
                                    type="name"
                                    name="name"
                                    label="Name"
                                    variant="outlined"
                                    onBlur={handleBlur}
                                    value={values.name}
                                    onChange={handleChange}
                                    helperText={touched.name && errors.name}
                                    error={Boolean(errors.name && touched.name)}
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
                                    type="date"
                                    name="date"
                                    variant="outlined"
                                    onBlur={handleBlur}
                                    value={values.date}
                                    onChange={handleChange}
                                    helperText={touched.date && errors.date}
                                    error={Boolean(errors.date && touched.date)}
                                    sx={{ mb: 3 }}
                                />

                                <FormControl fullWidth sx={{ mb: 3 }} size="small">
                                    <InputLabel id="genderSelect">Gender</InputLabel>
                                    <Select
                                        labelId="genderSelect"
                                        value={values.gender}
                                        name="gender"
                                        label="Gender"
                                        onChange={handleChange}
                                        error={Boolean(errors.gender && touched.gender)}
                                    >
                                        <MenuItem value={"male"}>Male</MenuItem>
                                        <MenuItem value={"female"}>Female</MenuItem>
                                        <MenuItem value={"other"}>Other</MenuItem>
                                    </Select>
                                </FormControl>

                                <Stack
                                    justifyContent="center"
                                    alignItems="center">
                                    <Button variant="contained" sx={{ padding: "10px 25px", margin: "0 auto" }}
                                        type="submit" >
                                        Submit</Button>
                                </Stack>
                            </Box>
                        </form>
                    )}
                </Formik>

            </Paper>

        </Box>
    )
}

export default AddPatient
