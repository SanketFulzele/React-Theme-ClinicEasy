import React from 'react'
import { Box, Button, Modal, Paper, Stack, TextField, Typography } from '@mui/material'
import { Formik } from 'formik';
import * as Yup from "yup";
import "yup-phone";
import "./profilePage.css";
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';

// inital login credentials
const initialValuesModal = {
    name: "",
    number: "",
    email: "",
};

// form field validation schema
const validationSchemaModal = Yup.object().shape({
    name: Yup.string().min(2).max(25).required("User Name is Required"),
    number: Yup.string().phone('IN', true, "Phone Number is Invalid")
        .required("Phone Number is Required"),
    email: Yup.string().email('Invalid Email address').required('Email is required!'),
});


const HospitalId = localStorage.getItem('HospitalId');
const UserId = localStorage.getItem('UserId');

const ProfilePage = () => {

    const MainContainer = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    }

    const ProfileImgContainer = {
        width: "100%",
        overflow: "hidden",
    }

    const editContainer = {
        background: "var(--blue-color)",
        borderRadius: "50%",
        cursor: "pointer",
        width: "40px",
        height: "40px",
        position: "absolute",
        top: "10px",
        right: "10px",
    }

    const ProfilePicContainer = {
        borderRadius: "15px",
        width: "170px",
        height: "135px",
        backgroundColor: "#ffffff",
        marginTop: "-70px",
        padding: "7px",
    }

    const FormContainer = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        marginTop: "15px",
    }

    const FormElements = {
        padding: "20px ",
        width: { lg: "40vw", md: "50vw", sm: "60vw", xs: "90vw" },
    }

    const modalBox = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { sm: "600px", xs: "90%", },
        backgroundColor: 'background.paper',
        border: 'none',
        outline: "none",
        boxShadow: 24,
        borderRadius: "20px",
        p: 1,
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleFormSubmitModal = (values) => {
        console.log(values);
    }

    return (
        <div>
            <Box sx={MainContainer}>

                <Box sx={ProfileImgContainer}>
                    <img className='bg-img' src="/assets/MySVG/proBImg.jpg" alt="profile-background-img" />
                </Box>

                <Box sx={ProfilePicContainer}>
                    <img className='profilePic' src="/assets/MySVG/dr-pic1.jpg" alt="profile-pic-img" />

                    <Box sx={editContainer} className="Flex" onClick={handleOpen}>
                        <EditIcon sx={{ color: "white" }} />
                    </Box>
                </Box>

                <Box>
                    <Typography variant='h6' mt={2} sx={{ textAlign: "center", }}> Dr. Samir Rathi </Typography>
                    <Stack direction="row" mt={2} spacing={6}>
                        <Typography variant='h6'>samir79@gmail.com</Typography>
                        <Typography variant='h6'>9833423487</Typography>
                    </Stack>
                </Box>
            </Box>

            <Modal
                open={open}
                onClose={handleClose}
                sx={{ outline: "none", }}
            >
                <Box sx={modalBox}>

                    <Box sx={FormContainer}>
                        <Paper sx={FormElements} elevation="">
                            <Typography variant='h5' align='center' mb={2} sx={{ color: "var(--blue-color)", fontWeight: "500", letterSpacing: "0.9px" }}>
                                My Profile
                            </Typography>
                            <Formik
                                onSubmit={handleFormSubmitModal}
                                initialValues={initialValuesModal}
                                validationSchema={validationSchemaModal}
                            >
                                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                                    <form onSubmit={handleSubmit}>
                                        <TextField
                                            fullWidth
                                            size="small"
                                            type="name"
                                            name="name"
                                            label="User Name"
                                            variant="outlined"
                                            onBlur={handleBlur}
                                            value={values.name}
                                            onChange={handleChange}
                                            helperText={touched.name && errors.name}
                                            error={Boolean(errors.name && touched.name)}
                                            sx={{ mb: 3 }}
                                        />
                                        <TextField
                                            fullWidth
                                            size="small"
                                            type="number"
                                            name="number"
                                            label="Mobile Number"
                                            variant="outlined"
                                            onBlur={handleBlur}
                                            value={values.number}
                                            onChange={handleChange}
                                            helperText={touched.number && errors.number}
                                            error={Boolean(errors.number && touched.number)}
                                            sx={{ mb: 3 }}
                                        />
                                        <TextField
                                            fullWidth
                                            size="small"
                                            type="email"
                                            name="email"
                                            label="Email Id"
                                            variant="outlined"
                                            onBlur={handleBlur}
                                            value={values.email}
                                            onChange={handleChange}
                                            helperText={touched.email && errors.email}
                                            error={Boolean(errors.email && touched.email)}
                                            sx={{ mb: 3 }}
                                        />

                                        <Box className="Flex">
                                            <Button variant="contained" sx={{ minWidth: "150px", padding: "8px", margin: "0 auto" }}
                                                type="submit" >
                                                Update
                                            </Button>
                                        </Box>
                                    </form>
                                )}
                            </Formik>
                        </Paper>
                    </Box>

                </Box>
            </Modal>







            {/* <Box sx={FormContainer}>
                <Paper sx={FormElements} elevation="3">

                    <Typography variant='h5' align='center' mb={2} sx={{ color: "var(--blue-color)", fontWeight: "500", letterSpacing: "0.9px" }}>
                        My Profile
                    </Typography>
                    <Formik
                        onSubmit={handleFormSubmit}
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                    >
                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    type="name"
                                    name="name"
                                    label="User Name"
                                    variant="outlined"
                                    onBlur={handleBlur}
                                    value={values.name}
                                    onChange={handleChange}
                                    helperText={touched.name && errors.name}
                                    error={Boolean(errors.name && touched.name)}
                                    sx={{ mb: 3 }}
                                />
                                <TextField
                                    fullWidth
                                    size="small"
                                    type="number"
                                    name="number"
                                    label="Mobile Number"
                                    variant="outlined"
                                    onBlur={handleBlur}
                                    value={values.number}
                                    onChange={handleChange}
                                    helperText={touched.number && errors.number}
                                    error={Boolean(errors.number && touched.number)}
                                    sx={{ mb: 3 }}
                                />
                                <TextField
                                    fullWidth
                                    size="small"
                                    type="email"
                                    name="email"
                                    label="Email Id"
                                    variant="outlined"
                                    onBlur={handleBlur}
                                    value={values.email}
                                    onChange={handleChange}
                                    helperText={touched.email && errors.email}
                                    error={Boolean(errors.email && touched.email)}
                                    sx={{ mb: 3 }}
                                />

                                <Box className="Flex">
                                    <Button variant="contained" sx={{ minWidth: "150px", padding: "5px", margin: "0 auto", fontSize: "16px", }}
                                        type="submit" >
                                        Update
                                    </Button>
                                </Box>
                            </form>
                        )}
                    </Formik>
                </Paper>
            </Box> */}
        </div>
    )
}

export default ProfilePage;
