import React from 'react'
import { Button, FormControl, InputLabel, MenuItem, Paper, Select, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Formik } from 'formik';
import * as Yup from "yup";
import "yup-phone";
import HeadingComp from 'app/views/CommonComp/HeadingComp';

// inital login credentials
const initialValues = {
    name: "",
    number: "",
    email: "",
};

// form field validation schema
const validationSchema = Yup.object().shape({
    name: Yup.string().min(2).max(25).required("User Name is Required"),
    number: Yup.string().phone('IN', true, "Phone Number is Invalid")
        .required("Phone Number is Required"),
    email: Yup.string().email('Invalid Email address').required('Email is required!'),
    text: Yup.string().min(2).required("Address is Required"),
});


const AddPatient = () => {
    const BookAppointmentHeading = {
        padding: "15px",
        textAlign: "center",
        color: "var(--blue-color)",
    }

    const NewAppointmentBox = {
        margin: "20px ",
        padding: "15px",
    }


    const handleFormSubmit = (values) => {
        console.log(values);
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
                                    // size="small"
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
                                    // size="small"
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
                                    // size="small"
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
                                    // size="small"
                                    type="text"
                                    name="text"
                                    label="Address"
                                    variant="outlined"
                                    onBlur={handleBlur}
                                    value={values.text}
                                    onChange={handleChange}
                                    helperText={touched.text && errors.text}
                                    error={Boolean(errors.text && touched.text)}
                                    sx={{ mb: 3 }}
                                    rows={2}
                                    multiline
                                />

                                <TextField
                                    fullWidth
                                    // size="small"
                                    type="date"
                                    name="date"
                                    label=""
                                    variant="outlined"
                                    onBlur={handleBlur}
                                    value={values.date}
                                    onChange={handleChange}
                                    helperText={touched.date && errors.date}
                                    error={Boolean(errors.date && touched.date)}
                                    sx={{ mb: 3 }}
                                />

                                <FormControl fullWidth sx={{ mb: 3 }}>
                                    <InputLabel id="genderSelect">Gender</InputLabel>
                                    <Select
                                        labelId="genderSelect"
                                        value={values.age}
                                        name="gender"
                                        size=""
                                        label="Gender"
                                        onChange={handleChange}
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