import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const HeadingComp = (props) => {

    const navigate = useNavigate();

    const ComponentHeadingBox = {
        padding: "18px 10px 10px 10px ",
        display: "flex",
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

    const BacktoHome = () => {
        navigate(props.navigate)
    }
    return (
        <>
            <Paper sx={ComponentHeadingBox}>
                <Box sx={BackIcon}>
                    <ArrowBackIcon sx={compHeadingIcon} onClick={BacktoHome} />
                </Box>

                <Box sx={compHeading}>
                    <Typography variant='h6' align="center">
                        {props.heading}
                    </Typography>
                </Box>
            </Paper>
        </>
    )
}

export default HeadingComp
