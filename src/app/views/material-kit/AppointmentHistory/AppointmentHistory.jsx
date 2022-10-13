import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material';
import HeadingComp from 'app/views/CommonComp/HeadingComp';
import React from 'react'
import "./appointmentHistory.css";
import { Formik } from 'formik';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PortraitIcon from '@mui/icons-material/Portrait';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DetailsIcon from '@mui/icons-material/Details';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import EditIcon from '@mui/icons-material/Edit';

// inital login credentials
const initialValues = {
    date: "",
    dates: "",
};


const AppointmentHistory = () => {

    const AppointHistoryBox = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        flexDirection: { md: "row", xs: "column" },
        alignContent: "center",
    }

    const AppointHistoryInfo = {
        padding: "20px",
        width: { md: "30vw", xs: "94vw" },
        display: "flex",
        alignItems: "start",
        flexDirection: "column",
        justifyContent: "center",
        margin: "10px"
    }

    const handleFormSubmit = (values) => {
        console.log(values);
    }

    return (
        <Box>
            <HeadingComp heading="Appointment History" navigate="/" />

            <Box mt={3} mb={2} >
                <Formik
                    onSubmit={handleFormSubmit}
                    initialValues={initialValues}
                >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>

                            <Stack direction="row" alignItems="center" justifyContent="center" p={1}>

                                <TextField
                                    type="date"
                                    name="date"
                                    variant="outlined"
                                    onBlur={handleBlur}
                                    value={values.date}
                                    onChange={handleChange}
                                    helperText={touched.date && errors.date}
                                    error={Boolean(errors.date && touched.date)}
                                    sx={{ maxWidth: { sm: "40vw", xs: "70vw" } }}
                                    fullWidth
                                />

                                <Box ml={3}>
                                    <Button variant='contained' type='submit' > <ArrowForwardIcon /> </Button>
                                </Box>
                            </Stack>
                        </form>
                    )}
                </Formik>
            </Box>

            <Box sx={AppointHistoryBox}>
                <Paper sx={AppointHistoryInfo}>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <ConfirmationNumberIcon /> <Typography variant='subtitle1' ml={1}> Appointment Number : 2
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <PortraitIcon /> <Typography variant='subtitle1' ml={1}> Name : Rohit
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <ScheduleIcon /> <Typography variant='subtitle1' ml={1}> Shift : 10AM - 8PM
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <CalendarMonthIcon /> <Typography variant='subtitle1' ml={1}> Date : 2022-10-07
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <DetailsIcon /> <Typography variant='subtitle1' ml={1}> Status : Completed
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <SmartphoneIcon /> <Typography variant='subtitle1' ml={1}> Mobile : 8329132745
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <PlaylistAddCheckIcon /> <Typography variant='subtitle1' ml={1}> Created By : Dharm M.
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center">
                        <CurrencyRupeeIcon /> <Typography variant='subtitle1' ml={1}> <strong> Fee : ₹ 500 </strong>
                        </Typography>
                    </Stack>
                </Paper>

                <Paper sx={AppointHistoryInfo}>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <ConfirmationNumberIcon /> <Typography variant='subtitle1' ml={1}> Appointment Number : 2
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <PortraitIcon /> <Typography variant='subtitle1' ml={1}> Name : Monoj
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <ScheduleIcon /> <Typography variant='subtitle1' ml={1}> Shift : 10AM - 8PM
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <CalendarMonthIcon /> <Typography variant='subtitle1' ml={1}> Date : 2022-10-13
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <DetailsIcon /> <Typography variant='subtitle1' ml={1}> Status : Waiting
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <SmartphoneIcon /> <Typography variant='subtitle1' ml={1}> Mobile : 8381001406
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <PlaylistAddCheckIcon /> <Typography variant='subtitle1' ml={1}> Created By : Dr. Sameer Joy
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center">
                        <EditIcon /> <Typography variant='subtitle1' ml={1}> Description : This is the description
                        </Typography>
                    </Stack>

                    <Stack direction="row" spacing={2} mt={1}>
                        <Button variant="outlined" color="error">
                            Delete
                        </Button>

                        <Button variant="contained" >
                            Change Status
                        </Button>
                    </Stack>

                </Paper>

                <Paper sx={AppointHistoryInfo}>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <ConfirmationNumberIcon /> <Typography variant='subtitle1' ml={1}> Appointment Number : 2
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <PortraitIcon /> <Typography variant='subtitle1' ml={1}> Name : Monoj
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <ScheduleIcon /> <Typography variant='subtitle1' ml={1}> Shift : 10AM - 8PM
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <CalendarMonthIcon /> <Typography variant='subtitle1' ml={1}> Date : 2022-10-13
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <DetailsIcon /> <Typography variant='subtitle1' ml={1}> Status : Waiting
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <SmartphoneIcon /> <Typography variant='subtitle1' ml={1}> Mobile : 8381001406
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <PlaylistAddCheckIcon /> <Typography variant='subtitle1' ml={1}> Created By : Dr. Sameer Joy
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center">
                        <EditIcon /> <Typography variant='subtitle1' ml={1}> Description : This is the description
                        </Typography>
                    </Stack>

                    <Stack direction="row" spacing={2} mt={1}>
                        <Button variant="outlined" color="error">
                            Delete
                        </Button>

                        <Button variant="contained" >
                            Change Status
                        </Button>
                    </Stack>

                </Paper>

                <Paper sx={AppointHistoryInfo}>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <ConfirmationNumberIcon /> <Typography variant='subtitle1' ml={1}> Appointment Number : 2
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <PortraitIcon /> <Typography variant='subtitle1' ml={1}> Name : Rohit
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <ScheduleIcon /> <Typography variant='subtitle1' ml={1}> Shift : 10AM - 8PM
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <CalendarMonthIcon /> <Typography variant='subtitle1' ml={1}> Date : 2022-10-07
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <DetailsIcon /> <Typography variant='subtitle1' ml={1}> Status : Completed
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <SmartphoneIcon /> <Typography variant='subtitle1' ml={1}> Mobile : 8329132745
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <PlaylistAddCheckIcon /> <Typography variant='subtitle1' ml={1}> Created By : Dharm M.
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center">
                        <CurrencyRupeeIcon /> <Typography variant='subtitle1' ml={1}> <strong> Fee : ₹ 500 </strong>
                        </Typography>
                    </Stack>
                </Paper>

                <Paper sx={AppointHistoryInfo}>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <ConfirmationNumberIcon /> <Typography variant='subtitle1' ml={1}> Appointment Number : 2
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <PortraitIcon /> <Typography variant='subtitle1' ml={1}> Name : Rohit
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <ScheduleIcon /> <Typography variant='subtitle1' ml={1}> Shift : 10AM - 8PM
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <CalendarMonthIcon /> <Typography variant='subtitle1' ml={1}> Date : 2022-10-07
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <DetailsIcon /> <Typography variant='subtitle1' ml={1}> Status : Completed
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <SmartphoneIcon /> <Typography variant='subtitle1' ml={1}> Mobile : 8329132745
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <PlaylistAddCheckIcon /> <Typography variant='subtitle1' ml={1}> Created By : Dharm M.
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center">
                        <CurrencyRupeeIcon /> <Typography variant='subtitle1' ml={1}> <strong> Fee : ₹ 500 </strong>
                        </Typography>
                    </Stack>
                </Paper>

                <Paper sx={AppointHistoryInfo}>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <ConfirmationNumberIcon /> <Typography variant='subtitle1' ml={1}> Appointment Number : 2
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <PortraitIcon /> <Typography variant='subtitle1' ml={1}> Name : Monoj
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <ScheduleIcon /> <Typography variant='subtitle1' ml={1}> Shift : 10AM - 8PM
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <CalendarMonthIcon /> <Typography variant='subtitle1' ml={1}> Date : 2022-10-13
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <DetailsIcon /> <Typography variant='subtitle1' ml={1}> Status : Waiting
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <SmartphoneIcon /> <Typography variant='subtitle1' ml={1}> Mobile : 8381001406
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <PlaylistAddCheckIcon /> <Typography variant='subtitle1' ml={1}> Created By : Dr. Sameer Joy
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center">
                        <EditIcon /> <Typography variant='subtitle1' ml={1}> Description : This is the description
                        </Typography>
                    </Stack>

                    <Stack direction="row" spacing={2} mt={1}>
                        <Button variant="outlined" color="error">
                            Delete
                        </Button>

                        <Button variant="contained" >
                            Change Status
                        </Button>
                    </Stack>

                </Paper>

            </Box>

        </Box>
    )
}

export default AppointmentHistory
