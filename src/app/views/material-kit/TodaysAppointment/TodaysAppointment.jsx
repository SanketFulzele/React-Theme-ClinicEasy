import { Box } from '@mui/material'
import HeadingComp from 'app/views/CommonComp/HeadingComp'
import React from 'react'

const TodaysAppointment = () => {
    return (
        <Box>
            <HeadingComp heading="Today's Appointment" navigate="/" />
        </Box>
    )
}

export default TodaysAppointment
