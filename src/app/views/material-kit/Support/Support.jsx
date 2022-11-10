import { Box, Paper, Typography } from '@mui/material'
import HeadingComp from 'app/views/CommonComp/HeadingComp'
import React from 'react'
import "./support.css";

const Support = () => {
    const LogoContainer = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottom: "2px solid #000",
    }
    const LogoBox = {
        width: { sm: "450px", xs: "350px" },
        height: { sm: "200px", xs: "200px" },
    }
    const SupportContainer = {
        display: "flex",
        justifyContent: "center",
        marginBottom: "50px",
        marginTop: "-50px",
    }
    const SupportBox = {
        padding: "20px",
        width: { lg: "30vw", md: "50vw", sm: "70vw", xs: "90vw" },
    }
    return (
        <Box>
            <HeadingComp heading="Support" navigate="/" />


            <Box sx={LogoContainer}>
                <Box sx={LogoBox}>
                    <img className='tricky-logo' src='/assets/MySVG/TrickySYSLogo.png' alt='trickySYS-logo' />
                </Box>
            </Box>




            <Box sx={SupportContainer}>

                <Paper sx={SupportBox}>
                    <Typography variant='h5' align='center' mb={2}>
                        <b> Need help? Contact us </b>
                    </Typography>

                    <Box mb={2}>
                        <Typography variant='h6' >
                            <b> ClinicEasy </b>
                        </Typography>
                        <Typography variant='subtitle1'>
                            &copy; Trickysys IT Solutions Nagpur, INDIA.
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant='h6'>
                            <b> Contact Person </b>
                        </Typography>
                        <Typography variant='subtitle1'>
                            Trickysys IT Solutions<br />
                            Email: info@trickysys.com<br />
                            Contact No. 7276070179<br />
                            Nagpur, MH.<br />
                        </Typography>
                    </Box>
                </Paper>
            </Box>


        </Box>
    )
}

export default Support
