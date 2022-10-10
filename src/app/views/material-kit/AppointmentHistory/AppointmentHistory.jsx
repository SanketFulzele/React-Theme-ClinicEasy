import { Box } from '@mui/material';
import HeadingComp from 'app/views/CommonComp/HeadingComp';
import React from 'react'
import "./appointmentHistory.css";

const AppointmentHistory = () => {

    const MySubmit = () => {
        let url = "https://cliniceasy.in/restAPI/index.php/Login/getHospital";
        let number = "7276070179";
        let id = "1234";
        let data = {
            mobile: number,
            player_id: id,
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(result => {
            result.json().then(resp => {
                console.warn(resp, "this is the response of the fetch post api")
                console.log("fetch calling")
            })
        })
        console.warn("this is fetch")
    }


    return (
        <Box>
            <HeadingComp heading="Appointment History" navigate="/" />
            <button onClick={MySubmit}> Get Hospital Api </button>
        </Box>
    )
}

export default AppointmentHistory
