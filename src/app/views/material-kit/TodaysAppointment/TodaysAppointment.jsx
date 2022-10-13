import { Box, Button, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PortraitIcon from '@mui/icons-material/Portrait';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DetailsIcon from '@mui/icons-material/Details';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import EditIcon from '@mui/icons-material/Edit';

const TodaysAppointment = () => {
    const navigate = useNavigate();

    const ComponentHeadingBox = {
        padding: "18px 10px 10px 10px ",
        display: "flex",
        marginBottom: "15px",
    }
    const BackIconBox = {
        width: "33px",
        height: "33px",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "rgb(222, 220, 220)",
            borderRadius: "50%",
        }
    }

    const BackIcon = {
        transform: "translate(2px ,3px)",
        fontSize: "27px",
    }

    const compHeading = {
        width: "100%",
        textAlign: "center",
    }

    const AddIconBox = {
        marginRight: "10px",
        cursor: "pointer",
        width: "35px",
        height: "35px",
        "&:hover": {
            backgroundColor: "rgb(222, 220, 220)",
            borderRadius: "50%",
        }
    }

    const AddIcon = {
        transform: "translate(2px ,4px)",
        fontSize: "28px",
    }
    const BacktoHome = () => {
        navigate("/")
    }

    const NavAddIcon = () => {
        navigate("/book-appointment")
    }

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

    return (
        <Box>
            <Paper sx={ComponentHeadingBox}>
                <Box sx={BackIconBox}>
                    <ArrowBackIcon sx={BackIcon} onClick={BacktoHome} />
                </Box>

                <Box sx={compHeading}>
                    <Typography variant='h6' align="center">
                        Today's Appointment
                    </Typography>
                </Box>
                <Box sx={AddIconBox}>
                    <AddCircleOutlineIcon sx={AddIcon} onClick={NavAddIcon} />
                </Box>
            </Paper>

            <Box sx={AppointHistoryBox}>
                <Paper sx={AppointHistoryInfo}>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <ConfirmationNumberIcon /> <Typography variant='subtitle1' ml={1}> Appointment Number : 1
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

export default TodaysAppointment
