import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react'
import "./bookAppointment.css";
import { Formik } from 'formik';
import * as Yup from "yup";
import "yup-phone";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
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

        // let url = "https://cliniceasy.in/restAPI/index.php/Home/getPatients";

        // let data = {
        //     hospital_id: "1",
        //     user_id: "5",
        //     search: "9689455261",
        // }
        // console.log(data);
        // let username = "meat";
        // let password = "1100";
        // var basecode = Buffer.from(username + ':' + password).toString('base64');

        // fetch(url, {
        //     method: "POST",
        //     mode: 'no-cors',
        //     headers: {
        //         'Accept': 'application/json',
        //         // 'Content-Type': 'application/json'
        //         // 'Authorization': 'Basic' + (`${username}:${password}`),

        //         "access-control-allow-origin": "*",
        //         "Authorization": "Basic bWVhdDoxMTAw",
        //         "Content-type": "application/json; charset=UTF-8"
        //     },
        //     body: JSON.stringify(data)
        // }).then(result => {
        //     result.json().then(resp => {
        //         console.warn(resp, "Response of the post fetch")

        //     }).catch((error) => {
        //         console.log(error, "error")
        //     })
        // })


        // var basicauth = `bWVhdDoxMTAw`;
        // fetch(url, {
        //     method: 'POST',
        //     mode: 'no-cors',
        //     headers: {
        //         'Accept': 'application/json',
        //         "Authorization": "Basic " + basicauth,
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // }).then(result => {
        //     result.json().then(resp => {
        //         console.warn(resp, "Response of the post fetch")

        //     }).catch((error) => {
        //         console.log(error, "error")
        //     })
        // })

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
