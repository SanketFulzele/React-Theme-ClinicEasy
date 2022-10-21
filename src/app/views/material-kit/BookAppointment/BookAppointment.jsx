import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react'
import "./bookAppointment.css";
import { Formik } from 'formik';
import * as Yup from "yup";
import "yup-phone";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import HeadingComp from 'app/views/CommonComp/HeadingComp';

// initial login credentials
const initialValues = {
    number: "",
};

// form field validation schema
const validationSchema = Yup.object().shape({
    number: Yup.string().phone('IN', true, "Phone Number is Invalid")
        .required("Phone Number is Required"),
});


const BookAppointment = () => {

    const BookAppointmentImgBox = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        marginTop: "10px"
    }
    const BookAppointmentForm = {
        padding: "10px 30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    }
    const BookAppointmentFormHeading = {
        textAlign: "center",
        color: "#244e9c",
        fontSize: "30px",
        fontWeight: "800",
        fontStyle: "italic",
        letterSpacing: "1px",
    }

    let navigate = useNavigate();
    //9689455261
    //8381002109 new number chaudhary hospital =>  add patient
    // already booked appointment => book new appointment
    const handleFormSubmit = (values) => {
        console.log(values.number);
        console.log(values);
        console.log("button submitted")

        if (values.number === 8381001406) {
            navigate("/book-new-appointment")
        } else {
            navigate("/add-patient")
        }


    }
    return (
        <Box>
            <HeadingComp heading="Book Appointment" navigate="/" />

            <Box sx={BookAppointmentImgBox}>
                <img className='BookAppointmentImg' src="/assets/images/BookAppointment/BookAppointmentGif.gif"
                    alt="Appointment-Img" />
            </Box>



            <Box sx={BookAppointmentForm}>
                <Typography variant='h6' sx={BookAppointmentFormHeading}>
                    Chaudhary Hospital
                </Typography>
                <Typography variant='h6' align="center">
                    Verify Patient
                </Typography>

                <Formik
                    onSubmit={handleFormSubmit}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <Box className='Flex'>
                                <TextField
                                    fullWidth
                                    id="number"
                                    name="number"
                                    type="number"
                                    label="Mobile Number"
                                    size="small"
                                    variant="outlined"
                                    onBlur={handleBlur}
                                    value={values.number}
                                    onChange={handleChange}
                                    helperText={touched.number && errors.number}
                                    error={Boolean(errors.number && touched.number)}
                                    sx={{ marginTop: "25px", width: { lg: "30vw", sm: "50vw", xs: "80vw" } }}
                                />
                                <Button variant="contained" sx={{ marginTop: "18px", padding: "10px 25px" }}
                                    endIcon={<ArrowForwardIcon />} type="submit" >
                                    Next</Button>
                            </Box>

                        </form>
                    )}
                </Formik>



            </Box>




        </Box>
    )
}

export default BookAppointment;
