import { Button, Paper, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react'
import { Formik } from 'formik';
import { useState } from 'react';

// inital login credentials
const initialValues = {
    date: "",
    dates: "",
};

const HospitalId = localStorage.getItem('HospitalId');
const UserId = localStorage.getItem('UserId');

const ViewAttendance = () => {

    const [viewDate, setViewDate] = useState([]);

    const AttendanceTimeContainers = {
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
    const DateField = {
        marginRight: { sx: "30px", xs: "15px" },
    }
    const handleFormSubmit = (values) => {
        console.log(values);

        const url = `https://cliniceasy.in/restAPI/index.php/Staffs/getAttendance`;

        const data = {
            "hospital_id": HospitalId,
            "user_id": UserId,
            "staff_id": "1",
            "from_date": values.date,
            "to_date": values.dates
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': "text/plain",
            },
            body: JSON.stringify(data)
        }


        fetch(url, options)
            .then(res => {
                res.json().then((result) => {
                    setViewDate(result.data)
                    // console.log(result.data)
                })
            })
    }

    return (
        <>
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

            <Box sx={AttendanceTimeContainers}>

                {viewDate.map((data) => {
                    return (
                        <Paper sx={ViewAttendanceBox} key={data.id}>
                            <Box sx={{ display: "flex" }} mt={{ sm: 0, xs: 1 }}>
                                <CalendarMonthIcon /> <Typography variant='subtitle2' ml={1}> Date : {data.attendance_date} </Typography>
                            </Box>
                            <Box sx={{ display: "flex" }} mt={{ sm: 0, xs: 1 }}>
                                <LoginIcon /> <Typography variant='subtitle2' ml={1}> In Time : {data.in_time} </Typography>
                            </Box>
                            <Box sx={{ display: "flex" }} mt={{ sm: 0, xs: 1 }}>
                                <LogoutIcon /> <Typography variant='subtitle2' ml={1}> Out Time : {data.out_time} </Typography>
                            </Box>
                        </Paper>
                    )
                })}

            </Box>

        </>
    )
}

export default ViewAttendance


