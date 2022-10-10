import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import "./markAttendance.css";
import HeadingComp from 'app/views/CommonComp/HeadingComp';
import EditIcon from '@mui/icons-material/Edit';
import BadgeIcon from '@mui/icons-material/Badge';
import { useNavigate } from 'react-router-dom';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { Formik } from 'formik';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';


// inital login credentials
const initialValues = {
    date: "",
    dates: "",
};


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
    const navigate = useNavigate();

    const NavUpdatePatient = () => {
        navigate("/update-patient")
    }

    const ViewAttendanceBox = {
        padding: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
    }


    const handleFormSubmit = (values) => {
        console.log(values);
    }


    return (
        <Box>
            <HeadingComp heading="Mark Attendance" navigate="/" />

            <Box sx={AttendanceBox}>
                <img src="/assets/MySVG/maleAvatar.svg" className='male-avatar-svg' alt="Avatar-Img" />

                <Box sx={editContainer} className="Flex">
                    <EditIcon sx={{ color: "white" }} onClick={NavUpdatePatient} />
                </Box>



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
                                    label=""
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
                                    label=""
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

            <Box sx={{ padding: { sm: "30px", xs: "10px" } }}>
                <Paper sx={ViewAttendanceBox}>

                    <Box sx={{ display: "flex" }} mt={{ sm: 0, xs: 1 }}>
                        <CalendarMonthIcon /> <Typography variant='subtitle2' ml={1}> Date : 2022-10-06 </Typography>
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
