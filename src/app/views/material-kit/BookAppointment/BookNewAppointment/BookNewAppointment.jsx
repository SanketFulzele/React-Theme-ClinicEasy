import { Button, MenuItem, Paper, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Formik } from 'formik';
import * as Yup from "yup";
import "yup-phone";
import { useState } from 'react';
import HeadingComp from 'app/views/CommonComp/HeadingComp';

// inital login credentials
const initialValues = {
    number: "",
};

// form field validation schema
const validationSchema = Yup.object().shape({
    number: Yup.string().phone('IN', true, "Phone Number is Invalid")
        .required("Phone Number is Required"),
});

const ShiftTime = [
    {
        value: '10Am to 8Pm',
        label: '10am - 8pm',
    },
];

const BookNewAppointment = () => {

    const NewAppointmentBox = {
        margin: { sm: "20px 50px", xs: "20px 10px" },
        padding: "20px",
    }

    const BookAppointmentHeading = {
        padding: "15px",
        textAlign: "center",
        color: "var(--blue-color)",
    }

    const [currency, setCurrency] = useState('10Am to 8Pm');

    const handleFormSubmit = (values) => {
        console.log(values);
        setCurrency(values.shift);
    }

    return (
        <Box>
            <HeadingComp heading="Book Appointment" navigate="/" />


            <Paper sx={NewAppointmentBox}>
                <Typography variant='h6' sx={BookAppointmentHeading}>
                    Book New Appointment
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
                                <TextField
                                    fullWidth
                                    size="small"
                                    type="time"
                                    name="time"
                                    label=""
                                    variant="outlined"
                                    onBlur={handleBlur}
                                    value={values.time}
                                    onChange={handleChange}
                                    helperText={touched.time && errors.time}
                                    error={Boolean(errors.time && touched.time)}
                                    sx={{ mb: 3 }}
                                />
                                <TextField
                                    fullWidth
                                    size='small'
                                    name="shift"
                                    variant='outlined'
                                    select
                                    label="Shift"
                                    value={currency}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    sx={{ mb: 3 }}
                                >
                                    {ShiftTime.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>

                                <TextField
                                    fullWidth
                                    size="small"
                                    type="text"
                                    name="text"
                                    label="Description"
                                    variant="outlined"
                                    onBlur={handleBlur}
                                    value={values.text}
                                    onChange={handleChange}
                                    helperText={touched.text && errors.text}
                                    error={Boolean(errors.text && touched.text)}
                                    sx={{ mb: 3 }}
                                    rows={5}
                                    multiline
                                />
                                <Box className="Flex">
                                    <Button variant="contained" sx={{ padding: "10px 25px", margin: "0 auto" }}
                                        type="submit" >
                                        Book Appointment</Button>
                                </Box>
                            </Box>
                        </form>
                    )}
                </Formik>

            </Paper>

        </Box>
    )
}

export default BookNewAppointment

        // new number => appointment history add patient
        // old number => book new appointment