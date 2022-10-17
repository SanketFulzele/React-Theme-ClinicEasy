import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import "./markAttendance.css";
import HeadingComp from 'app/views/CommonComp/HeadingComp';
import EditIcon from '@mui/icons-material/Edit';
import BadgeIcon from '@mui/icons-material/Badge';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from "yup";
import "yup-phone";

// inital login credentials
const initialValues = {
    date: "",
    dates: "",
};

// inital login credentials
const initialValuesModal = {
    name: "",
    number: "",
    email: "",
};

// form field validation schema
const validationSchemaModal = Yup.object().shape({
    name: Yup.string().min(2).max(25).required("User Name is Required"),
    number: Yup.string().phone('IN', true, "Phone Number is Invalid")
        .required("Phone Number is Required"),
    email: Yup.string().email('Invalid Email address').required('Email is required!'),
});


const MarkAttendance = () => {

    const AttendanceBox = {
        borderBottom: "1px solid #000",
        textAlign: "center",
        padding: "15px 20px",
        position: "relative",
    }

    const editContainer = {
        background: "var(--blue-color)",
        borderRadius: "50%",
        cursor: "pointer",
        width: "40px",
        height: "40px",
        position: "absolute",
        top: "10px",
        right: "10px",

    }
    const DateField = {
        marginRight: { sx: "30px", xs: "15px" },
    }


    const AttendanceTimeContainer = {
        marginY: "15px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        justifySelf: "center",
        alignContent: "center",
    }

    const ViewAttendanceBox = {
        padding: "15px",
        width: { lg: "50vw", md: "60vw", sm: "80vw", xs: "95vw" },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        margin: "10px",
    }

    const modalBox = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { sm: "600px", xs: "90%", },
        backgroundColor: 'background.paper',
        border: 'none',
        outline: "none",
        boxShadow: 24,
        p: 1,
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const FormContainer = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px"
    }

    const FormElements = {
        padding: "20px ",
    }

    const handleFormSubmitModal = (values) => {
        console.log(values);
    }


    const handleFormSubmit = (values) => {
        console.log(values);
    }


    return (
        <Box>
            <HeadingComp heading="Mark Attendance" navigate="/" />

            <Box sx={AttendanceBox}>
                <img src="/assets/MySVG/maleAva.svg" className='male-avatar-svg' alt="Avatar-Img" />

                <Box sx={editContainer} onClick={handleOpen} className="Flex">
                    <EditIcon sx={{ color: "white" }} />
                </Box>

                <Modal
                    open={open}
                    onClose={handleClose}
                    sx={{ outline: "none", }}
                >
                    <Box sx={modalBox}>

                        <Box sx={FormContainer}>
                            <Paper sx={FormElements} elevation="3">
                                <Typography variant='h6' align='center' mb={2} sx={{ color: "var(--blue-color)" }}>
                                    Profile Details
                                </Typography>
                                <Formik
                                    onSubmit={handleFormSubmitModal}
                                    initialValues={initialValuesModal}
                                    validationSchema={validationSchemaModal}
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
                </Modal>


                <Box>
                    <Stack direction={{ sm: "row", xs: "column" }} mt={3} alignItems="center" justifyContent="space-around">
                        <Stack direction="row" mt={{ xs: 1 }}>
                            <BadgeIcon />
                            <Typography variant='subtitle1' mx={1}>
                                Name :
                            </Typography>
                            <Typography variant='subtitle1'>
                                Dr. Sameer Joy
                            </Typography>
                        </Stack>

                        <Stack direction="row" mt={{ xs: 1 }}>
                            <BusinessCenterIcon />
                            <Typography variant='subtitle1' mx={1}>
                                Designation :
                            </Typography>
                            <Typography variant='subtitle1'>
                                Admin
                            </Typography>
                        </Stack>

                    </Stack>

                    <Stack direction={{ sm: "row", xs: "column" }} mt={{ sm: 3, xs: 0 }} alignItems="center" justifyContent="space-around">
                        <Stack direction="row" mt={{ xs: 1 }}>
                            <EmailIcon />
                            <Typography variant='subtitle1' mx={1}>
                                Email Id :
                            </Typography>
                            <Typography variant='subtitle1'>
                                dev@mailinator.com
                            </Typography>
                        </Stack>

                        <Stack direction="row" mt={{ xs: 1 }}>
                            <SmartphoneIcon />
                            <Typography variant='subtitle1' mx={1}>
                                Mobile :
                            </Typography>
                            <Typography variant='subtitle1'>
                                7276070169
                            </Typography>
                        </Stack>

                    </Stack>
                </Box>

            </Box>

            <Box className='Flex' mt={3}>
                <Button variant='contained'> MARK IN TIME ATTENDANCE </Button>
            </Box>

            <Typography variant='subtitle1' align="center" mt={3}>View Attendance</Typography>



            <Box mt={1}>
                <Formik
                    onSubmit={handleFormSubmit}
                    initialValues={initialValues}
                >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>

                            <Stack direction="row" alignItems="center" justifyContent="center" p={1}>


                                <TextField
                                    size="small"
                                    type="date"
                                    name="date"
                                    variant="outlined"
                                    onBlur={handleBlur}
                                    value={values.date}
                                    onChange={handleChange}
                                    helperText={touched.date && errors.date}
                                    error={Boolean(errors.date && touched.date)}
                                    sx={DateField}
                                />
                                <TextField
                                    size="small"
                                    type="date"
                                    name="dates"
                                    variant="outlined"
                                    onBlur={handleBlur}
                                    value={values.dates}
                                    onChange={handleChange}
                                    helperText={touched.dates && errors.dates}
                                    error={Boolean(errors.dates && touched.dates)}
                                    sx={DateField}
                                />

                                <Box >
                                    <Button variant='contained' type='submit'> Go </Button>
                                </Box>
                            </Stack>
                        </form>
                    )}
                </Formik>
            </Box>

            <Box sx={AttendanceTimeContainer}>

                <Paper sx={ViewAttendanceBox}>
                    <Box sx={{ display: "flex" }} mt={{ sm: 0, xs: 1 }}>
                        <CalendarMonthIcon /> <Typography variant='subtitle2' ml={1}> Date :  2022-10-06 </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }} mt={{ sm: 0, xs: 1 }}>
                        <LoginIcon /> <Typography variant='subtitle2' ml={1}> In Time : 10:12:13 </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }} mt={{ sm: 0, xs: 1 }}>
                        <LogoutIcon /> <Typography variant='subtitle2' ml={1}> Out Time : 22:45:56 </Typography>
                    </Box>
                </Paper>

                <Paper sx={ViewAttendanceBox}>
                    <Box sx={{ display: "flex" }} mt={{ sm: 0, xs: 1 }}>
                        <CalendarMonthIcon /> <Typography variant='subtitle2' ml={1}> Date :  2022-10-06 </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }} mt={{ sm: 0, xs: 1 }}>
                        <LoginIcon /> <Typography variant='subtitle2' ml={1}> In Time : 10:12:13 </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }} mt={{ sm: 0, xs: 1 }}>
                        <LogoutIcon /> <Typography variant='subtitle2' ml={1}> Out Time : 22:45:56 </Typography>
                    </Box>
                </Paper>

                <Paper sx={ViewAttendanceBox}>
                    <Box sx={{ display: "flex" }} mt={{ sm: 0, xs: 1 }}>
                        <CalendarMonthIcon /> <Typography variant='subtitle2' ml={1}> Date :  2022-10-06 </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }} mt={{ sm: 0, xs: 1 }}>
                        <LoginIcon /> <Typography variant='subtitle2' ml={1}> In Time : 10:12:13 </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }} mt={{ sm: 0, xs: 1 }}>
                        <LogoutIcon /> <Typography variant='subtitle2' ml={1}> Out Time : 22:45:56 </Typography>
                    </Box>
                </Paper>

                <Paper sx={ViewAttendanceBox}>
                    <Box sx={{ display: "flex" }} mt={{ sm: 0, xs: 1 }}>
                        <CalendarMonthIcon /> <Typography variant='subtitle2' ml={1}> Date :  2022-10-06 </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }} mt={{ sm: 0, xs: 1 }}>
                        <LoginIcon /> <Typography variant='subtitle2' ml={1}> In Time : 10:12:13 </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }} mt={{ sm: 0, xs: 1 }}>
                        <LogoutIcon /> <Typography variant='subtitle2' ml={1}> Out Time : 22:45:56 </Typography>
                    </Box>
                </Paper>

            </Box>

        </Box >
    )
}

export default MarkAttendance
