import { Box } from '@mui/material'
import { Button, Paper, TextField, Typography } from '@mui/material'
import HeadingComp from 'app/views/CommonComp/HeadingComp'
import React from 'react'
import { Formik } from 'formik';
import * as Yup from "yup";
import "yup-phone";
import { useNavigate } from 'react-router-dom';

// inital login credentials
const initialValues = {
    name: "",
    number: "",
    email: "",
    designation: "",
};

// form field validation schema
const validationSchema = Yup.object().shape({
    name: Yup.string().min(2).max(25).required("Staff Name is Required !"),
    number: Yup.string().required("Mobile Number is Required").max(10, "Mobile Number is Too Long")
        .phone('IN', true, "Phone Number is Invalid"),
    email: Yup.string().email('Invalid Email address').required('Email is Required !'),
    designation: Yup.string().min(3).max(30).required("Designation is Required !"),
});

const HospitalId = localStorage.getItem('HospitalId');
const UserId = localStorage.getItem('UserId');


const CreateStaff = () => {

    const navigate = useNavigate();

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

    const URL = `https://cliniceasy.in/restAPI/index.php/Staffs/registration`;

    const handleFormSubmit = (values) => {

        const data = {
            "hospital_id": HospitalId,
            "user_id": UserId,
            "name": values.name,
            "mobile": values.number,
            "email": values.email,
            "role": values.designation,
        }

        fetch(URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(result => {
            result.json().then(resp => {
                console.warn(resp, "CREATE STAFF RESPONSE")
            })
        }).then(() => {
            navigate('/my-staff')
        })

    }

    return (
        <Box>
            <HeadingComp heading="Create Staff" navigate="/dashboard" />

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
                                    type="text"
                                    name="designation"
                                    label="Designation"
                                    variant="outlined"
                                    onBlur={handleBlur}
                                    value={values.designation}
                                    onChange={handleChange}
                                    helperText={touched.designation && errors.designation}
                                    error={Boolean(errors.designation && touched.designation)}
                                    sx={{ mb: 3 }}
                                    autoComplete="off"
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
