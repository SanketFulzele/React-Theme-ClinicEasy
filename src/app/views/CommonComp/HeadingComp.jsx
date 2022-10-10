import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import "./headingComp.css";

const HeadingComp = (props) => {

    const navigate = useNavigate();

    const ComponentHeading = {
        padding: "15px 10px",
        display: "flex",
    }

    const BacktoHome = () => {
        navigate(props.navigate)
    }
    return (
        <>
            <Paper sx={ComponentHeading}>
                <Box className='BackIcon'>
                    <ArrowBackIcon className='compHeadingIcon' onClick={BacktoHome} />
                </Box>

                <div className='compHeading'>
                    <Typography variant='h6' align="center">
                        {props.heading}
                    </Typography>
                </div>
            </Paper>
        </>
    )
}

export default HeadingComp
