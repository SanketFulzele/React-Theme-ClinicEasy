import { Box, Paper, Stack, Typography } from '@mui/material'
import HeadingComp from 'app/views/CommonComp/HeadingComp'
import React from 'react'
import PortraitIcon from '@mui/icons-material/Portrait';
import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const MyStaff = () => {
    const InfoContainer = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        flexDirection: { md: "row", xs: "column" },
        alignContent: "center",
        marginTop: "15px",
    }

    const InfoBox = {
        padding: "20px",
        width: { md: "30vw", xs: "95vw" },
        display: "flex",
        alignItems: "start",
        flexDirection: "column",
        justifyContent: "center",
        margin: "10px"
    }


    return (
        <Box>
            <HeadingComp heading="My Staff" navigate="/" />


            <Box sx={InfoContainer}>

                <Paper sx={InfoBox}>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <PortraitIcon /> <Typography variant='subtitle1' ml={1}> Name : Ajay
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>

                        <SmartphoneIcon /> <Typography variant='subtitle1' ml={1}> Mobile Number : 9976547878
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <EmailIcon /> <Typography variant='subtitle1' ml={1}> Email : ajay23@gmail.com
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center">
                        <WorkOutlineIcon /> <Typography variant='subtitle1' ml={1}> Role : Staff
                        </Typography>
                    </Stack>
                </Paper>

                <Paper sx={InfoBox}>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <PortraitIcon /> <Typography variant='subtitle1' ml={1}> Name : Ajay
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>

                        <SmartphoneIcon /> <Typography variant='subtitle1' ml={1}> Mobile Number : 9976547878
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <EmailIcon /> <Typography variant='subtitle1' ml={1}> Email : ajay23@gmail.com
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center">
                        <WorkOutlineIcon /> <Typography variant='subtitle1' ml={1}> Role : Staff
                        </Typography>
                    </Stack>
                </Paper>

                <Paper sx={InfoBox}>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <PortraitIcon /> <Typography variant='subtitle1' ml={1}> Name : Ajay
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>

                        <SmartphoneIcon /> <Typography variant='subtitle1' ml={1}> Mobile Number : 9976547878
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <EmailIcon /> <Typography variant='subtitle1' ml={1}> Email : ajay23@gmail.com
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center">
                        <WorkOutlineIcon /> <Typography variant='subtitle1' ml={1}> Role : Staff
                        </Typography>
                    </Stack>
                </Paper>

                <Paper sx={InfoBox}>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <PortraitIcon /> <Typography variant='subtitle1' ml={1}> Name : Ajay
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>

                        <SmartphoneIcon /> <Typography variant='subtitle1' ml={1}> Mobile Number : 9976547878
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <EmailIcon /> <Typography variant='subtitle1' ml={1}> Email : ajay23@gmail.com
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center">
                        <WorkOutlineIcon /> <Typography variant='subtitle1' ml={1}> Role : Staff
                        </Typography>
                    </Stack>
                </Paper>

                <Paper sx={InfoBox}>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <PortraitIcon /> <Typography variant='subtitle1' ml={1}> Name : Ajay
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>

                        <SmartphoneIcon /> <Typography variant='subtitle1' ml={1}> Mobile Number : 9976547878
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <EmailIcon /> <Typography variant='subtitle1' ml={1}> Email : ajay23@gmail.com
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center">
                        <WorkOutlineIcon /> <Typography variant='subtitle1' ml={1}> Role : Staff
                        </Typography>
                    </Stack>
                </Paper>

                <Paper sx={InfoBox}>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <PortraitIcon /> <Typography variant='subtitle1' ml={1}> Name : Ajay
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>

                        <SmartphoneIcon /> <Typography variant='subtitle1' ml={1}> Mobile Number : 9976547878
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" mb={1}>
                        <EmailIcon /> <Typography variant='subtitle1' ml={1}> Email : ajay23@gmail.com
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center">
                        <WorkOutlineIcon /> <Typography variant='subtitle1' ml={1}> Role : Staff
                        </Typography>
                    </Stack>
                </Paper>

            </Box>
        </Box>
    )
}

export default MyStaff
