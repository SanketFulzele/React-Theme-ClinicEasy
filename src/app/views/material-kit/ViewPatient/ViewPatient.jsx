import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PortraitIcon from '@mui/icons-material/Portrait';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import "./viewPatient.css";

const ViewPatient = () => {
    const navigate = useNavigate();

    const ComponentHeadingBox = {
        padding: "18px 10px 10px 10px ",
        display: "flex",
        marginBottom: "15px",
    }
    const BackIcon = {
        width: "33px",
        height: "33px",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "rgb(222, 220, 220)",
            borderRadius: "50%",
        }
    }

    const compHeadingIcon = {
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

    const AppointHistoryBox = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        flexDirection: { md: "row", xs: "column" },
        alignContent: "center",
    }

    const AppointHistoryInfo = {
        padding: "20px",
        width: { md: "30vw", xs: "95vw" },
        display: "flex",
        alignItems: "start",
        flexDirection: "column",
        justifyContent: "center",
        margin: "10px"
    }

    const BacktoHome = () => {
        navigate("/")
    }

    const NavAddIcon = () => {
        navigate("/add-patient")
    }
    return (
        <Box>
            <Paper sx={ComponentHeadingBox}>
                <Box sx={BackIcon}>
                    <ArrowBackIcon sx={compHeadingIcon} onClick={BacktoHome} />
                </Box>

                <Box sx={compHeading}>
                    <Typography variant='h6' align="center">
                        View Patients
                    </Typography>
                </Box>
                <Box sx={AddIconBox}>
                    <AddCircleOutlineIcon sx={AddIcon} onClick={NavAddIcon} />
                </Box>
            </Paper>


            <Box sx={AppointHistoryBox}>

                <Paper sx={AppointHistoryInfo}>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <PortraitIcon /> <Typography variant='subtitle1' ml={1}> Patient Name : Rohit
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>

                        <SmartphoneIcon /> <Typography variant='subtitle1' ml={1}> Mobile Number : 8329132745
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center">
                        <CalendarMonthIcon /> <Typography variant='subtitle1' ml={1}> Added Date : 2022-10-07 14:43:07
                        </Typography>
                    </Stack>
                </Paper>

                <Paper sx={AppointHistoryInfo}>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <PortraitIcon /> <Typography variant='subtitle1' ml={1}> Patient Name : Rohit
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>

                        <SmartphoneIcon /> <Typography variant='subtitle1' ml={1}> Mobile Number : 8329132745
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center">
                        <CalendarMonthIcon /> <Typography variant='subtitle1' ml={1}> Added Date : 2022-10-07 14:43:07
                        </Typography>
                    </Stack>
                </Paper>

                <Paper sx={AppointHistoryInfo}>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <PortraitIcon /> <Typography variant='subtitle1' ml={1}> Patient Name : Rohit
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>

                        <SmartphoneIcon /> <Typography variant='subtitle1' ml={1}> Mobile Number : 8329132745
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center">
                        <CalendarMonthIcon /> <Typography variant='subtitle1' ml={1}> Added Date : 2022-10-07 14:43:07
                        </Typography>
                    </Stack>
                </Paper>

                <Paper sx={AppointHistoryInfo}>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <PortraitIcon /> <Typography variant='subtitle1' ml={1}> Patient Name : Rohit
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>

                        <SmartphoneIcon /> <Typography variant='subtitle1' ml={1}> Mobile Number : 8329132745
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center">
                        <CalendarMonthIcon /> <Typography variant='subtitle1' ml={1}> Added Date : 2022-10-07 14:43:07
                        </Typography>
                    </Stack>
                </Paper>

            </Box>


        </Box>
    )
}

export default ViewPatient
