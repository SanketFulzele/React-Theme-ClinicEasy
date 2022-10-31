import { Box } from '@mui/material'
import { Button, Paper, TextField, Typography } from '@mui/material'
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
    text: "",
    address: "",
};

// form field validation schema
const validationSchema = Yup.object().shape({
    name: Yup.string().min(2).max(25).required("User Name is Required"),
    number: Yup.string().phone('IN', true, "Phone Number is Invalid")
        .required("Phone Number is Required"),
    email: Yup.string().email('Invalid Email address').required('Email is required!'),
    text: Yup.string().min(3).max(55).required("Designation is Required"),
    address: Yup.string().min(3).max(40).required("Address is Required"),
});


const CreateStaff = () => {

    const FormContainer = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
    }

    const FormElements = {
        width: { lg: "40vw", md: "50vw", sm: "60vw", xs: "90vw" },
        padding: "20px ",
    }


    const handleFormSubmit = (values) => {
        console.log(values);
    }

    return (
        <Box>
            <HeadingComp heading="Create Staff" navigate="/" />

            <Box sx={FormContainer}>
                <Paper sx={FormElements}>
                    <Typography variant='h6' align='center' mb={2} sx={{ color: "var(--blue-color)" }}>
                        Staff Registration
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
                                    label="Staff Name"
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
                                    type="email"
                                    name="email"
                                    label="Staff Email"
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
                                    type="address"
                                    name="address"
                                    label="Staff Address"
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
                                    name="number"
                                    label="Staff Mobile"
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
                                    type="text"
                                    name="text"
                                    label="Designation"
                                    variant="outlined"
                                    onBlur={handleBlur}
                                    value={values.text}
                                    onChange={handleChange}
                                    helperText={touched.text && errors.text}
                                    error={Boolean(errors.text && touched.text)}
                                    sx={{ mb: 3 }}
                                    autoComplete="off"
                                // required
                                />

                                <Box className="Flex">
                                    <Button variant="contained"
                                        sx={{ minWidth: "150px", padding: "8px", margin: "0 auto" }}
                                        type="submit" >
                                        Submit
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

export default CreateStaff
