import { Button, Paper, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import HeadingComp from 'app/views/CommonComp/HeadingComp'
import React from 'react'
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

const UpdatePatient = () => {
    const FormContainer = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px"
    }

    const FormElements = {
        padding: "20px ",
    }

    const handleFormSubmit = (values) => {
        console.log(values);
    }

    return (
        <Box>
            <HeadingComp heading="Update Patient" navigate="/mark-attendance" />

            <Box sx={FormContainer}>
                <Paper sx={FormElements}>
                    <Typography variant='h6' align='center' mb={2} sx={{ color: "var(--blue-color)" }}>
                        Profile Details
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


        </Box>
    )
}

export default UpdatePatient
