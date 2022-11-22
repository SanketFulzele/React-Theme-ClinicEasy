import { Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Formik } from 'formik';
import * as Yup from "yup";
import "yup-phone";
import HeadingComp from 'app/views/CommonComp/HeadingComp';
import { useNavigate } from 'react-router-dom';

// form field validation schema
const validationSchema = Yup.object().shape({
    name: Yup.string().min(2).max(25).required("User Name is Required"),
    number: Yup.string().required("Mobile Number is Required").max(10, "Mobile Number is Too Long")
        .phone('IN', true, "Phone Number is Invalid"),
    date: Yup.string().required("Date is Required"),
    time: Yup.string().required("Time is Required"),
    shift: Yup.string().required("Shift Time is Required"),
    desc: Yup.string().min(3).max(200, "The Description Should be under 200 characters")
        .required("Description is Required"),
});

const HospitalId = localStorage.getItem('HospitalId');
const UserId = localStorage.getItem('UserId');

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

    // inital login credentials
    const initialValues = {
        name: localStorage.getItem('patientName'),
        number: localStorage.getItem('BookAppointmentNumber'),
        date: "",
        time: "",
        shift: "",
        desc: "",
    };

    const navigate = useNavigate();

    const url = `https://cliniceasy.in/restAPI/index.php/Home/saveAppointment`;

    const patientId = localStorage.getItem('patientId')

    const handleFormSubmit = (values) => {

        const data = {
            "hospital_id": HospitalId,
            "user_id": UserId,
            "patient_id": patientId,
            "booking_date": values.date,
            "booking_time": values.time,
            "shift_id": values.shift,
            "description": values.desc,
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
                localStorage.setItem('BookAppointmentNumber', '')
                localStorage.setItem('patientName', '')
                localStorage.setItem('patientId', '')
                alert(resp.message);
                navigate('/dashboard')
            })
        })
    }

    return (
        <Box>
            <HeadingComp heading="Book Appointment" navigate="/dashboard" />


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
                                    type="date"
                                    name="date"
                                    label="Date"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
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
                                    label="Time"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    onBlur={handleBlur}
                                    value={values.time}
                                    onChange={handleChange}
                                    helperText={touched.time && errors.time}
                                    error={Boolean(errors.time && touched.time)}
                                    sx={{ mb: 3 }}
                                />

                                <FormControl fullWidth sx={{ mb: 3 }} size="small">
                                    <InputLabel id="shiftSelect">Shift</InputLabel>
                                    <Select
                                        labelId="shiftSelect"
                                        value={values.shift}
                                        name="shift"
                                        label="Shift"
                                        onChange={handleChange}
                                        error={Boolean(errors.shift && touched.shift)}
                                    >
                                        <MenuItem value={"10 AM - 8 PM"}>10AM - 8PM</MenuItem>
                                    </Select>
                                </FormControl>


                                <TextField
                                    fullWidth
                                    size="small"
                                    type="text"
                                    name="desc"
                                    label="Description"
                                    variant="outlined"
                                    onBlur={handleBlur}
                                    value={values.desc}
                                    onChange={handleChange}
                                    helperText={touched.desc && errors.desc}
                                    error={Boolean(errors.desc && touched.desc)}
                                    sx={{ mb: 3 }}
                                    rows={3}
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