import { Box, Button, Modal, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const [open1, setOpen1] = useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);

    useEffect(() => {
        handleOpen1();
    }, [])


    const navigate = useNavigate();

    const UserLogout = () => {
        alert("Logout Successfully")
        // navigate('/session/signin')
        navigate('/view-patient')
    }

    const CancelLogout = () => {
        handleClose1()
        navigate('/')
    }

    // Modal Styling
    const modalBox = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { sm: "400px", xs: "90%", },
        backgroundColor: 'background.paper',
        border: 'none',
        outline: "none",
        boxShadow: 24,
        borderRadius: "20px",
        p: 1,
    };

    const FormContainer = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px"
    }

    const FormElements = {
        padding: "20px ",
    }
    // Modal Styling


    // setTimeout(() => {
    //     navigate('/')
    // }, 5000)

    return (
        <div>
            <Modal
                open={open1}
                onClose={handleClose1}
                sx={{ outline: "none", }}
            >
                <Box sx={modalBox}>

                    <Box sx={FormContainer}>
                        <Box sx={FormElements}>
                            <Typography variant='h6' align='center' mb={2} sx={{ color: "var(--blue-color)", transform: "translateY(-10px)" }}>
                                Logout
                            </Typography>

                            <Typography mb={3} sx={{ fontSize: "17px", }}>
                                Do you really want to Logout?
                            </Typography>

                            <Stack direction='row' justifyContent="space-between">
                                <Button variant="contained" color="error" sx={{ minWidth: "150px", padding: "8px", }}
                                    onClick={CancelLogout} >
                                    No
                                </Button>
                                <Button variant="contained" sx={{ minWidth: "150px", padding: "8px", marginLeft: "20px" }}
                                    type="submit" onClick={UserLogout} >
                                    Yes
                                </Button>
                            </Stack>

                        </Box>
                    </Box>

                </Box>
            </Modal>
        </div>
    )
}

export default Logout
