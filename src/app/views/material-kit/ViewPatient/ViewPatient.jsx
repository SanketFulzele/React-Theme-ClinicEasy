import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PortraitIcon from '@mui/icons-material/Portrait';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import "./viewPatient.css";
import { useEffect } from 'react';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const HospitalId = localStorage.getItem('HospitalId');
const UserId = localStorage.getItem('UserId')


// ==== Search Component 
const SearchContainer = {
    backgroundColor: "rgba(231, 228, 224, 0.845)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
}

const SearchIconWrapper = {
    width: '30px',
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "10px",
}


const SearchInputContainer = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}
// ==== Search Component 

const ViewPatient = () => {
    const [patientData, setPatientData] = useState([])

    const [searchText, setSearchText] = useState('');

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
        margin: "10px",
        cursor: "pointer",
        transition: "all ease 0.3s",
        "&:hover": {
            transform: "scale(1.03)",
        },
    }

    const BackToHome = () => {
        navigate("/")
    }

    const NavAddIcon = () => {
        navigate("/add-patient")
    }

    const url = `https://cliniceasy.in/restAPI/index.php/Home/getPatients`;

    const data = {
        "hospital_id": HospitalId,
        "user_id": UserId,
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': "text/plain",
        },
        body: JSON.stringify(data)
    }

    useEffect(() => {
        fetch(url, options)
            .then(res => {
                res.json().then((result) => {
                    setPatientData(result.patients)
                })
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])




    // ==== Search component ===

    const filteredPatients = patientData.filter(data => {
        return (data.name).toLowerCase().includes(searchText.toLowerCase())
    })

    // ==== Search component ===

    return (
        <Box>
            <Paper sx={ComponentHeadingBox}>
                <Box sx={BackIcon}>
                    <ArrowBackIcon sx={compHeadingIcon} onClick={BackToHome} />
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

            <Box className='Flex'>
                <Box sx={SearchContainer}>
                    <Box sx={SearchIconWrapper}>
                        <SearchIcon />
                    </Box>
                    <Box sx={SearchInputContainer}>
                        <input type="text" placeholder="Search Patient..." className='search-field'
                            onChange={(e) => setSearchText(e.target.value)} />
                    </Box>
                </Box>
            </Box>





            <Box sx={AppointHistoryBox}>

                {
                    filteredPatients === '' ? "" :

                        filteredPatients.map((data) => {
                            return (
                                <Paper sx={AppointHistoryInfo} key={data.id} onClick={() => {
                                    return (
                                        localStorage.setItem('PatientDetailsId', data.id),
                                        navigate("/patient-detail")
                                    )
                                }} >
                                    <Stack direction="row" alignItems="center" mb={1} >
                                        <PortraitIcon /> <Typography variant='subtitle1' ml={1}> Patient Name : {data.name}
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" alignItems="center" mb={1}>
                                        <SmartphoneIcon /> <Typography variant='subtitle1' ml={1}> Mobile Number : {data.mobile}
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" alignItems="center">
                                        <CalendarMonthIcon /> <Typography variant='subtitle1' ml={1}> Added Date : {data.created}
                                        </Typography>
                                    </Stack>
                                </Paper>
                            )
                        })
                }

            </Box>

        </Box>
    )
}

export default ViewPatient
