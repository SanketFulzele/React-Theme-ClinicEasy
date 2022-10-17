import React from 'react'
import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import { Formik } from 'formik';
import * as Yup from "yup";
import "yup-phone";

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
});


const ProfilePage = () => {
    const FormContainer = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        marginTop: "15px",
    }

    const FormElements = {
        padding: "20px ",
        width: { lg: "40vw", md: "50vw", sm: "60vw", xs: "90vw" },
    }

    const handleFormSubmit = (values) => {
        console.log(values);
    }

    return (
        <div>
            <Box sx={FormContainer}>
                <Paper sx={FormElements} elevation="3">

                    <Typography variant='h5' align='center' mb={2} sx={{ color: "var(--blue-color)" }}>
                        My Profile
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
                                    type="name"
                                    name="name"
                                    label="User Name"
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

                                <Box className="Flex">
                                    <Button variant="contained" sx={{ minWidth: "150px", padding: "8px", margin: "0 auto" }}
                                        type="submit" >
                                        Update
                                    </Button>
                                </Box>
                            </form>
                        )}
                    </Formik>
                </Paper>
            </Box>
        </div>
    )
}

export default ProfilePage;
