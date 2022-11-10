import { Button, FormControl, InputLabel, MenuItem, Modal, Select, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import HeadingComp from 'app/views/CommonComp/HeadingComp'
import EditIcon from '@mui/icons-material/Edit';
import BadgeIcon from '@mui/icons-material/Badge';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import React, { useLayoutEffect } from 'react'
import { Formik } from 'formik';
import * as Yup from "yup";
import "yup-phone";
import { useState } from 'react';
import PatientHistoryComp from './PatientHistoryComp';

// form field validation schema
const validationSchemaModal = Yup.object().shape({
    name: Yup.string().min(2).max(25).required("User Name is Required !"),
    number: Yup.string().required("Mobile Number is Required").max(10, "Mobile Number is Too Long")
        .phone('IN', true, "Phone Number is Invalid"),
    email: Yup.string().email('Invalid Email address').required('Email is Required !'),
    address: Yup.string().min(5).required("Address is Required"),
    date: Yup.string().required("Date is Required"),
    gender: Yup.string().required("Gender is Required"),
});

const HospitalId = localStorage.getItem('HospitalId');
const UserId = localStorage.getItem('UserId');


const PatientDetail = () => {
    const [patientDetails, setPatientDetails] = useState([]);

    const PatientDetailsId = localStorage.getItem('PatientDetailsId');


    // USER INFO CODE START'S HERE
    const url = `https://cliniceasy.in/restAPI/index.php/Home/getPatientDetails`;

    const data = {
        "hospital_id": HospitalId,
        "user_id": UserId,
        "patient_id": PatientDetailsId
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
                    setPatientDetails(result.patients)
                })
            })
    }

    useLayoutEffect(() => {
        userInfo()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //----------- USER INFO CODE END'S HERE---------------






    // UPDATE MODAL CODE START'S HERE
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { name } = patientDetails;
    const { mobile } = patientDetails;
    const { email } = patientDetails;
    const { address } = patientDetails;
    const { dob } = patientDetails;
    const { gender } = patientDetails;
    const { status } = patientDetails;

    // inital login credentials
    const initialValuesModal = {
        name: name,
        number: mobile,
        email: email,
        address: address,
        date: dob,
        gender: gender,
    };

    const handleFormSubmitModal = (values) => {
        const { name, number, email, address, date, gender } = values;

        const Url = `https://cliniceasy.in/restAPI/index.php/Home/updatePatient`;

        const Data = {
            "hospital_id": HospitalId,
            "user_id": UserId,
            "patient_id": PatientDetailsId,
            "status": status,
            "mobile": number,
            "name": name,
            "email": email,
            "address": address,
            "gender": gender,
            "dob": date
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
                    // console.warn(result);
                })
            }).then(() => {
                userInfo();
            })

        handleClose();
    }
    // UPDATE MODAL CODE END'S HERE


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

    const FormContainer = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px"
    }

    const FormElements = {
        padding: "20px ",
    }

    return (
        <>
            <HeadingComp heading="Patient Details" navigate="/view-patient" />
            <Box sx={AttendanceBox}>

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
                                    Patient Details
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
                                                label="Patient Name"
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
                                            <TextField
                                                fullWidth
                                                size="small"
                                                type="text"
                                                name="address"
                                                label="Address"
                                                variant="outlined"
                                                onBlur={handleBlur}
                                                value={values.address}
                                                onChange={handleChange}
                                                helperText={touched.address && errors.address}
                                                error={Boolean(errors.address && touched.address)}
                                                sx={{ mb: 3 }}
                                            />

                                            <TextField
                                                fullWidth
                                                size="small"
                                                type="date"
                                                name="date"
                                                label="Date Of Birth"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                variant="outlined"
                                                onBlur={handleBlur}
                                                value={values.date}
                                                onChange={handleChange}
                                                helperText={touched.date && errors.date}
                                                error={Boolean(errors.date && touched.date)}
                                                sx={{ mb: 3 }}
                                            />

                                            <FormControl fullWidth sx={{ mb: 3 }} size="small">
                                                <InputLabel id="genderSelect">Gender</InputLabel>
                                                <Select
                                                    labelId="genderSelect"
                                                    value={values.gender}
                                                    name="gender"
                                                    label="Gender"
                                                    onChange={handleChange}
                                                    error={Boolean(errors.gender && touched.gender)}
                                                >
                                                    <MenuItem value={"Male"}>Male</MenuItem>
                                                    <MenuItem value={"Female"}>Female</MenuItem>
                                                    <MenuItem value={"Other"}>Other</MenuItem>
                                                </Select>
                                            </FormControl>


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

                {patientDetails === "" ? "" :
                    <Box>
                        <Stack direction={{ sm: "row", xs: "column" }} mt={3} alignItems="center" justifyContent="space-around">
                            <Stack direction="row" mt={{ xs: 1 }}>
                                <BadgeIcon />
                                <Typography variant='subtitle1' mx={1} sx={{ textAlign: "left" }}>
                                    User Name :
                                </Typography>
                                <Typography variant='subtitle1'>
                                    {patientDetails.name}
                                </Typography>
                            </Stack>

                            <Stack direction="row" mt={{ xs: 1 }}>
                                <SmartphoneIcon />
                                <Typography variant='subtitle1' mx={1} sx={{ textAlign: "left" }}>
                                    Mobile Number :
                                </Typography>
                                <Typography variant='subtitle1'>
                                    {patientDetails.mobile}
                                </Typography>
                            </Stack>

                        </Stack>
                        <Stack direction={{ sm: "row", xs: "column" }} mt={{ sm: 3, xs: 0 }} alignItems="center" justifyContent="space-around">
                            <Stack direction="row" mt={{ xs: 1 }}>
                                <EmailIcon />
                                <Typography variant='subtitle1' mx={1} sx={{ textAlign: "left" }}>
                                    Email Id :
                                </Typography>
                                <Typography variant='subtitle1'>
                                    {patientDetails.email}
                                </Typography>
                            </Stack>

                            <Stack direction="row" mt={{ xs: 1 }}>
                                <CalendarMonthIcon />
                                <Typography variant='subtitle1' mx={1} sx={{ textAlign: "left" }}>
                                    Date of Birth :
                                </Typography>
                                <Typography variant='subtitle1'>
                                    {patientDetails.dob}
                                </Typography>
                            </Stack>

                        </Stack>
                    </Box>
                }

            </Box>

            <Box sx={{ margin: "20px" }}>
                <Typography variant='h6' align="center" > Patient History </Typography>
                <PatientHistoryComp PatientDetailsId={PatientDetailsId} />
            </Box>
        </>
    )
}

export default PatientDetail
