import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import "./markAttendance.css";
import HeadingComp from 'app/views/CommonComp/HeadingComp';
import EditIcon from '@mui/icons-material/Edit';
import BadgeIcon from '@mui/icons-material/Badge';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from "yup";
import "yup-phone";
import { useLayoutEffect } from 'react';
import ViewAttendance from './ViewAttendance/ViewAttendance';

// form field validation schema
const validationSchemaModal = Yup.object().shape({
    name: Yup.string().min(2).max(25).required("User Name is Required !"),
    number: Yup.string().phone('IN', true, "Phone Number is Required !")
        .required("Phone Number is Required !"),
    email: Yup.string().email('Invalid Email address').required('Email is Required !'),
});

const HospitalId = localStorage.getItem('HospitalId');
const UserId = localStorage.getItem('UserId');

const MarkAttendance = () => {

    const [userData, setUserData] = useState([]);
    const [btnText, setBtnText] = useState('MARK IN TIME ATTENDANCE');

    const AttendanceBox = {
        borderBottom: "1px solid #000",
        textAlign: "center",
        padding: "15px 20px",
        position: "relative",
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


    const FormContainer = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px"
    }

    const FormElements = {
        padding: "20px ",
    }

    // USER INFO CODE START'S HERE
    const url = `https://cliniceasy.in/restAPI/index.php/Home/getPatientDetails`;

    const data = {
        "hospital_id": HospitalId,
        "user_id": UserId,
        "patient_id": "91"
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': "text/plain",
        },
        body: JSON.stringify(data)
    }

    const userInfo = () => {
        fetch(url, options)
            .then(res => {
                res.json().then((result) => {
                    setUserData(result.patients)
                })
            })
    }

    useLayoutEffect(() => {
        userInfo()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //----------- USER INFO CODE END'S HERE---------------




    //----------- MARK IN TIME ATTENDANCE CODE START'S HERE -------
    const URL = `https://cliniceasy.in/restAPI/index.php/Staffs/markAttendance`;

    const DATA = {
        "hospital_id": HospitalId,
        "user_id": UserId,
    }
    const OPTIONS = {
        method: 'POST',
        headers: {
            'Content-Type': "text/plain",
        },
        body: JSON.stringify(DATA)
    }
    const handleTimeAttendance = () => {
        fetch(URL, OPTIONS)
            .then(res => {
                res.json().then((result) => {
                    console.warn(result);
                    if (result.message === "Attendance mark successfully") {
                        setBtnText('MARK OUT TIME ATTENDANCE')
                    } else {
                        setBtnText('MARK OUT TIME ATTENDANCE')
                    }
                    alert(result.message);
                })
            })
    }

    // useLayoutEffect(() => {
    //     handleTimeAttendance();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])
    //---------- MARK IN TIME ATTENDANCE CODE END'S HERE --------




    // UPDATE MODAL CODE START'S HERE

    const { name } = userData;
    const { mobile } = userData;
    const { email } = userData;


    // inital login credentials
    const initialValuesModal = {
        name: name,
        number: mobile,
        email: email,
    };

    const handleFormSubmitModal = (values) => {

        const { name, number, email } = values;

        const Url = `https://cliniceasy.in/restAPI/index.php/Home/updatePatient`;

        const Data = {
            "hospital_id": HospitalId,
            "user_id": UserId,
            "patient_id": "91",
            "mobile": number,
            "name": name,
            "email": email,
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
                    return result;
                })
            }).then(() => {
                userInfo();
            })

        handleClose();
    }
    // UPDATE MODAL CODE END'S HERE


    return (
        <Box>
            <HeadingComp heading="Mark Attendance" navigate="/" />

            <Box sx={AttendanceBox}>
                <img src="/assets/MySVG/maleAva.svg" style={{ width: "100px" }} alt="Avatar-Img" />

                <Box sx={editContainer} onClick={handleOpen} className="Flex">
                    <EditIcon sx={{ color: "white" }} />
                </Box>

                <Modal
                    open={open}
                    onClose={handleClose}
                    sx={{ outline: "none", }}
                >
                    <Box sx={modalBox}>

                        <Box sx={FormContainer}>
                            <Box sx={FormElements}>
                                <Typography variant='h6' align='center' mb={2} sx={{ color: "var(--blue-color)" }}>
                                    Profile Details
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
                                                label="Email"
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
                            </Box>
                        </Box>

                    </Box>
                </Modal>


                {userData === "" ? "" :
                    <Box>
                        <Stack direction={{ sm: "row", xs: "column" }} mt={3} alignItems="center" justifyContent="space-around">
                            <Stack direction="row" mt={{ xs: 1 }}>
                                <BadgeIcon />
                                <Typography variant='subtitle1' mx={1}>
                                    User Name :
                                </Typography>
                                <Typography variant='subtitle1'>
                                    {userData.name}
                                </Typography>
                            </Stack>

                            <Stack direction="row" mt={{ xs: 1 }}>
                                <SmartphoneIcon />
                                <Typography variant='subtitle1' mx={1}>
                                    Mobile Number :
                                </Typography>
                                <Typography variant='subtitle1'>
                                    {userData.mobile}
                                </Typography>
                            </Stack>

                        </Stack>
                        <Stack direction={{ sm: "row", xs: "column" }} mt={{ sm: 3, xs: 0 }} alignItems="center" justifyContent="space-around">
                            <Stack direction="row" mt={{ xs: 1 }}>
                                <EmailIcon />
                                <Typography variant='subtitle1' mx={1}>
                                    Email Id :
                                </Typography>
                                <Typography variant='subtitle1'>
                                    {userData.email}
                                </Typography>
                            </Stack>

                            <Stack direction="row" mt={{ xs: 1 }}>
                                <WorkIcon />
                                <Typography variant='subtitle1' mx={1}>
                                    Designation :
                                </Typography>
                                <Typography variant='subtitle1'>
                                    Admin
                                </Typography>
                            </Stack>

                        </Stack>
                    </Box>
                }


            </Box>

            <Box className='Flex' mt={3}>
                <Button variant='contained' onClick={handleTimeAttendance} > {btnText} </Button>
            </Box>

            <ViewAttendance />

        </Box >
    )
}

export default MarkAttendance
