import HeadingComp from 'app/views/CommonComp/HeadingComp'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
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
import StaffAttendanceComp from './StaffAttendanceComp/StaffAttendanceComp';

// form field validation schema
const validationSchemaModal = Yup.object().shape({
    name: Yup.string().min(2).max(25).required("User Name is Required !"),
    number: Yup.string().required("Mobile Number is Required").max(10, "Mobile Number is Too Long")
        .phone('IN', true, "Phone Number is Invalid"),
    email: Yup.string().email('Invalid Email address').required('Email is Required !'),
});

const HospitalId = localStorage.getItem('HospitalId');
const UserId = localStorage.getItem('UserId');


const StaffAttendance = () => {

    const [staffName, setStaffName] = useState(localStorage.getItem("StaffName"));
    const [staffEmail, setStaffEmail] = useState(localStorage.getItem("StaffEmail"));
    const [staffMobile, setStaffMobile] = useState(localStorage.getItem("StaffMobile"));

    const StaffId = localStorage.getItem("StaffId")
    const StaffStatus = localStorage.getItem("StaffStatus")
    const StaffRole = localStorage.getItem("StaffRole")

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
        padding: "10px"
    }

    const FormElements = {
        padding: "20px ",
    }

    // UPDATE MODAL CODE START'S HERE

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // inital login credentials
    const initialValuesModal = {
        name: staffName,
        number: staffMobile,
        email: staffEmail,
    };

    const Url = `https://cliniceasy.in/restAPI/index.php/Staffs/updateStaff`;

    const handleFormSubmitModal = (values) => {

        const { name, number, email } = values;

        const Data = {
            "hospital_id": HospitalId,
            "user_id": UserId,
            "id": StaffId,
            "name": name,
            "email": email,
            "status": StaffStatus,
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
                    localStorage.setItem("StaffName", result.name)
                    localStorage.setItem("StaffEmail", result.email)
                    localStorage.setItem("StaffMobile", result.mobile)
                    setStaffName(result.name)
                    setStaffMobile(result.mobile)
                    setStaffEmail(result.email)
                })
            })

        handleClose();
    }
    // UPDATE MODAL CODE END'S HERE

    return (
        <Box>
            <HeadingComp heading="Staff Attendance" navigate="/my-staff" />

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
                                                label="Staff Name"
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
                                                label="Staff Number"
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
                                                label="Staff Email"
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


                {
                    <Box>
                        <Stack direction={{ sm: "row", xs: "column" }} mt={3} alignItems="center" justifyContent="space-around">
                            <Stack direction="row" mt={{ xs: 1 }}>
                                <BadgeIcon />
                                <Typography variant='subtitle1' mx={1}>
                                    Staff Name :
                                </Typography>
                                <Typography variant='subtitle1'>
                                    {staffName}
                                </Typography>
                            </Stack>

                            <Stack direction="row" mt={{ xs: 1 }}>
                                <SmartphoneIcon />
                                <Typography variant='subtitle1' mx={1}>
                                    Mobile Number :
                                </Typography>
                                <Typography variant='subtitle1'>
                                    {staffMobile}
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
                                    {staffEmail}
                                </Typography>
                            </Stack>

                            <Stack direction="row" mt={{ xs: 1, }}>
                                <WorkIcon />
                                <Typography variant='subtitle1' mx={1}>
                                    Designation :
                                </Typography>
                                <Typography variant='subtitle1'>
                                    {StaffRole}
                                </Typography>
                            </Stack>

                        </Stack>
                    </Box>
                }


            </Box>

            <StaffAttendanceComp />

        </Box>
    )
}

export default StaffAttendance
