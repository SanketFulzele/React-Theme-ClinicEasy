import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material'
import HeadingComp from 'app/views/CommonComp/HeadingComp';

const FeedbackBox = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: { md: "50px", sm: "50px 20px", xs: "50px 10px" },
    width: "100%",
    height: "100%",
}

const resFeedbackBox = {
    margin: "20px 0",
    // backgroundColor: { xl: "red", lg: "blue", md: "violet", sm: "green", xs: "yellow" },
    width: { lg: "60%", md: "70%", sm: "80%", xs: "100%" },
}

const GiveFeedback = () => {
    return (
        <Box>
            <HeadingComp heading="Feedback" navigate="/" />

            <Box sx={FeedbackBox} >


                <Typography variant='h5' sx={{ fontWeight: 600, }}>
                    Each and Every Feedback is valuable for us
                </Typography>

                <Box sx={resFeedbackBox}>


                    <TextField sx={{ margin: "20px 0px 10px 0px", }} fullWidth label="Subject" variant='outlined' />

                    <TextField sx={{ margin: "20px 0px 10px 0px", }}
                        label="Please Add Feedback" fullWidth
                        multiline
                        rows={5}
                    />

                </Box>
                <Button variant="contained" sx={{ width: "130px", marginTop: "10px", borderRadius: "10px", }}>Submit</Button>

            </Box>

        </Box>
    )
}

export default GiveFeedback
