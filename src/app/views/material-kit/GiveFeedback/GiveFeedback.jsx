import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material'
import HeadingComp from 'app/views/CommonComp/HeadingComp';
import { Formik } from 'formik';
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';

// inital login credentials
const initialValues = {
    subject: "",
    feedback: "",
};

// form field validation schema
const validationSchema = Yup.object().shape({
    subject: Yup.string().min(2).required("Subject is Required !"),
    feedback: Yup.string().min(8).required("Feedback is Required !"),
});

const HospitalId = localStorage.getItem('HospitalId');
const UserId = localStorage.getItem('UserId');

console.log(HospitalId, UserId);

const GiveFeedback = () => {

    const FeedbackBox = {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: { md: "50px", sm: "50px 20px", xs: "50px 10px" },
        width: "100%",
        height: "100%",
    }

    const resFeedbackBox = {
        margin: "20px 0",
        // backgroundColor: { xl: "red", lg: "blue", md: "violet", sm: "green", xs: "yellow" },
        width: { lg: "60%", md: "70%", sm: "80%", xs: "100%" },
    }

    const FeedbackField = {
        margin: "20px 0px 10px 0px",
    }

    const navigate = useNavigate();


    const handleFormSubmit = (values) => {
        const { subject, feedback } = values;

        const URL = 'https://trickysys.com/demo/selfplay/androidApi/Master/feedback';

        const DATA = {
            // "hospital_id": HospitalId,
            // "user_id": UserId,
            "user_id": "3",
            "subject": subject,
            "feedback": feedback,
        }

        const Options = {
            method: 'POST',
            headers: {
                'Content-Type': "text/plain",
            },
            body: JSON.stringify(DATA)
        }

        fetch(URL, Options)
            .then(res => {
                res.json().then((result) => {
                    return alert(result.message)
                })
            }).then(() => {
                navigate('/')
            })
    }


    return (
        <Box>
            <HeadingComp heading="Feedback" navigate="/" />

            <Box sx={FeedbackBox} >


                <Typography variant='h5' sx={{ fontWeight: 600, }}>
                    Each and Every Feedback is valuable for us
                </Typography>

                <Box sx={resFeedbackBox}>
                    <Formik
                        onSubmit={handleFormSubmit}
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                    >
                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                            <form onSubmit={handleSubmit}>

                                <TextField
                                    fullWidth
                                    type="text"
                                    name="subject"
                                    label="Subject"
                                    variant="outlined"
                                    onBlur={handleBlur}
                                    value={values.subject}
                                    onChange={handleChange}
                                    helperText={touched.subject && errors.subject}
                                    error={Boolean(errors.subject && touched.subject)}
                                    sx={FeedbackField}
                                />

                                <TextField
                                    fullWidth
                                    type="text"
                                    name="feedback"
                                    label="Please Enter Feedback"
                                    variant="outlined"
                                    onBlur={handleBlur}
                                    value={values.feedback}
                                    onChange={handleChange}
                                    helperText={touched.feedback && errors.feedback}
                                    error={Boolean(errors.feedback && touched.feedback)}
                                    multiline
                                    rows={5}
                                    sx={FeedbackField}
                                />

                                <Box className="Flex" sx={{ mt: "10px" }}>
                                    <Button variant="contained" sx={{ width: "130px", borderRadius: "10px", margin: "0 auto" }}
                                        type="submit" >
                                        Submit
                                    </Button>
                                </Box>
                            </form>
                        )}
                    </Formik>
                </Box>

            </Box>

        </Box>
    )
}

export default GiveFeedback
