import React from 'react'
import { Box, Button, Modal, Paper, Stack, TextField, Typography } from '@mui/material'
import { Formik } from 'formik';
import * as Yup from "yup";
import "yup-phone";
import "./profilePage.css";
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import { useState } from 'react';


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

    const [UserName, setUserName] = useState(localStorage.getItem('UserName'));
    const [UserEmail, setUserEmail] = useState(localStorage.getItem('UserEmail'));
    const [UserMobile, setUserMobile] = useState(localStorage.getItem('UserMobile'));

    const MainContainer = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        zIndex: 2,
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
        borderRadius: "50%",
        width: "120px",
        height: "120px",
        backgroundColor: "#ffffff",
        marginTop: "-100px",
        padding: "7px",
    }

    const AdminInfoBox = {
        padding: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    }

    const FormContainer = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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

    // inital login credentials
    const initialValuesModal = {
        name: UserName,
        number: UserMobile,
        email: UserEmail,
    };

    const Url = `https://cliniceasy.in/restAPI/index.php/Profile/updateProfile`;

    const handleFormSubmitModal = (values) => {

        const { name, number, email } = values;

        const Data = {
            "hospital_id": HospitalId,
            "user_id": UserId,
            "name": name,
            "email": email,
            "mobile": number
        }

        const Options = {
            method: 'POST',
            headers: {
                'Content-Type': "text/plain",
            },
            body: JSON.stringify(Data)
        }

        fetch(Url, Options)
            .then(res => {
                res.json().then((result) => {
                    localStorage.setItem('UserName', result.name)
                    localStorage.setItem('UserEmail', result.email)
                    localStorage.setItem('UserMobile', result.mobile)
                    setUserEmail(result.email)
                    setUserMobile(result.mobile)
                    setUserName(result.name)
                })
            })

        handleClose();
    }

    return (
        <div>
            <Box sx={MainContainer} >

                <Box sx={ProfileImgContainer}>
                    <img className='bg-img' src="/assets/MySVG/proBImg.jpg" alt="profile-background-img" />
                </Box>

                <Box sx={editContainer} className="Flex" onClick={handleOpen}>
                    <EditIcon sx={{ color: "white" }} />
                </Box>




                <Paper elevation={2} sx={AdminInfoBox}>
                    <Box sx={ProfilePicContainer}>
                        <img className='profilePic'
                            // src="/assets/MySVG/dr-pic1.jpg"
                            src="assets/MySVG/User5.png"
                            alt="profile-pic-img" />
                    </Box>


                    <Box>
                        <Typography variant='h6' my={2} sx={{ textAlign: "center", }}> {UserName} </Typography>

                        <Stack direction="row" alignItems="center" mb={3}>
                            <EmailIcon /> <Typography sx={{ fontSize: "17px", fontWeight: "500" }} ml={1}>
                                Email : {UserEmail}
                            </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" mb={1}>
                            <SmartphoneIcon /> <Typography sx={{ fontSize: "17px", fontWeight: "500" }} ml={1}>
                                Number : {UserMobile}
                            </Typography>
                        </Stack>
                    </Box>
                </Paper>

            </Box>





            <Modal
                open={open}
                onClose={handleClose}
                sx={{ outline: "none", }}
            >
                <Box sx={modalBox}>

                    <Box sx={FormContainer}>
                        <Paper sx={FormElements} elevation={0}>
                            <Typography variant='h5' align='center' mb={2} sx={{ color: "var(--blue-color)", fontWeight: "500", letterSpacing: "0.9px", transform: "translateY(-14px)" }}>
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
                <Paper sx={FormElements} elevation={1}>

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
