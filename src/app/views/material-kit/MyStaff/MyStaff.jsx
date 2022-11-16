import { Box, Paper, Stack, Typography } from '@mui/material'
import HeadingComp from 'app/views/CommonComp/HeadingComp'
import React from 'react'
import PortraitIcon from '@mui/icons-material/Portrait';
import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const HospitalId = localStorage.getItem('HospitalId');
const UserId = localStorage.getItem('UserId');


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

const MyStaff = () => {

    const [myStaff, setMyStaff] = useState([]);

    const [searchText, setSearchText] = useState('');

    const navigate = useNavigate();

    const InfoContainer = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        flexDirection: { md: "row", xs: "column" },
        alignContent: "center",
        marginY: "20px",
    }

    const InfoBox = {
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

    const url = `https://cliniceasy.in/restAPI/index.php/Staffs/getStaffs`;

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
                    setMyStaff(result.staffs)
                })
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const SendStaffData = (data) => {
        localStorage.setItem("StaffId", data.id)
        localStorage.setItem("StaffName", data.name)
        localStorage.setItem("StaffEmail", data.email)
        localStorage.setItem("StaffStatus", data.status)
        localStorage.setItem("StaffMobile", data.mobile)
        localStorage.setItem("StaffRole", data.role)
        navigate('/staff-attendance')
    }

    // ==== Search component ===

    const filteredStaff = myStaff.filter(data => {
        return (data.name).toLowerCase().includes(searchText.toLowerCase())
    })

    // ==== Search component ===

    return (
        <Box>
            <HeadingComp heading="My Staff" navigate="/dashboard" />

            <Box className='Flex' mt={2}>
                <Box sx={SearchContainer}>
                    <Box sx={SearchIconWrapper}>
                        <SearchIcon />
                    </Box>
                    <Box sx={SearchInputContainer}>
                        <input type="text" placeholder="Search Staff..." className='search-field'
                            onChange={(e) => setSearchText(e.target.value)} />
                    </Box>
                </Box>
            </Box>


            <Box sx={InfoContainer}>


                {
                    filteredStaff === '' ? "" :

                        filteredStaff.map((data) => {
                            return (
                                <Paper sx={InfoBox} elevation={3} key={data.id} onClick={() => {
                                    return (
                                        SendStaffData(data)
                                    )
                                }} >

                                    <Stack direction="row" alignItems="center" mb={1}>
                                        <PortraitIcon /> <Typography variant='subtitle1' ml={1}> Name : {data.name}
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" alignItems="center" mb={1}>
                                        <SmartphoneIcon /> <Typography variant='subtitle1' ml={1}> Mobile Number : {data.mobile}
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" alignItems="center" mb={1}>
                                        <EmailIcon /> <Typography variant='subtitle1' ml={1}> Email : {data.email}
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" alignItems="center">
                                        <WorkOutlineIcon /> <Typography variant='subtitle1' ml={1}> Role : {data.role}
                                        </Typography>
                                    </Stack>
                                </Paper>
                            )
                        })}



            </Box>
        </Box>
    )
}

export default MyStaff
