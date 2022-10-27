import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import "./markAttendance.css";
import HeadingComp from 'app/views/CommonComp/HeadingComp';
import EditIcon from '@mui/icons-material/Edit';
import BadgeIcon from '@mui/icons-material/Badge';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from "yup";
import "yup-phone";
import { useLayoutEffect } from 'react';
import ViewAttendance from './ViewAttendance/ViewAttendance';

// form field validation schema
const validationSchemaModal = Yup.object().shape({
    name: Yup.string().min(2).max(25).required("Account Name is Required"),
    bank: Yup.string().min(5).required("Bank Name is Required"),
    number: Yup.string().min(8).max(17).required("Account Number is Required"),
    code: Yup.string().min(11).max(11).required("IFSC Code is Required"),
});


const MarkAttendance = () => {

    const [userData, setUserData] = useState([]);

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


    const url = `https://trickysys.com/demo/selfplay/androidApi/Master/myProfile`;

    const data = {
        "user_id": "3",
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
                    setUserData(result.data)
                })
            })
    }

    useLayoutEffect(() => {
        userInfo()
    }, [])


    const { account_holder_name } = userData;
    const { bank_name } = userData;
    const { account_no } = userData;
    const { ifsc_code } = userData;


    // inital login credentials
    const initialValuesModal = {
        name: account_holder_name,
        bank: bank_name,
        number: account_no,
        code: ifsc_code,
    };



    const handleFormSubmitModal = (values) => {

        const { bank, name, code, number } = values;

        const Url = `https://trickysys.com/demo/selfplay/androidApi/Master/kyc`;

        const Data = {
            "user_id": "3",
            "name": name,
            "account_no": number,
            "ifsc": code,
            "bank_name": bank,
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


    return (
        <Box>
            <HeadingComp heading="Mark Attendance" navigate="/" />

            <Box sx={AttendanceBox}>
                <img src="/assets/MySVG/maleAva.svg" className='male-avatar-svg' alt="Avatar-Img" />

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
                            <Paper sx={FormElements} elevation="3">
                                <Typography variant='h6' align='center' mb={2} sx={{ color: "var(--blue-color)" }}>
                                    Bank Details
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
                                                label="Account Name"
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
                                                type="text"
                                                name="bank"
                                                label="Bank Name"
                                                variant="outlined"
                                                onBlur={handleBlur}
                                                value={values.bank}
                                                onChange={handleChange}
                                                helperText={touched.bank && errors.bank}
                                                error={Boolean(errors.bank && touched.bank)}
                                                sx={{ mb: 3 }}
                                            />
                                            <TextField
                                                fullWidth
                                                size="small"
                                                type="number"
                                                name="number"
                                                label="Account Number"
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
                                                type="text"
                                                name="code"
                                                label="IFSC Code"
                                                variant="outlined"
                                                onBlur={handleBlur}
                                                value={values.code}
                                                onChange={handleChange}
                                                helperText={touched.code && errors.code}
                                                error={Boolean(errors.code && touched.code)}
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


                {userData !== "" ?
                    <Box>
                        <Stack direction={{ sm: "row", xs: "column" }} mt={3} alignItems="center" justifyContent="space-around">
                            <Stack direction="row" mt={{ xs: 1 }}>
                                <BadgeIcon />
                                <Typography variant='subtitle1' mx={1}>
                                    Account Name :
                                </Typography>
                                <Typography variant='subtitle1'>
                                    {userData.account_holder_name}
                                </Typography>
                            </Stack>

                            <Stack direction="row" mt={{ xs: 1 }}>
                                <AccountBalanceWalletIcon />
                                <Typography variant='subtitle1' mx={1}>
                                    Account No :
                                </Typography>
                                <Typography variant='subtitle1'>
                                    {userData.account_no}
                                </Typography>
                            </Stack>

                        </Stack>
                        <Stack direction={{ sm: "row", xs: "column" }} mt={{ sm: 3, xs: 0 }} alignItems="center" justifyContent="space-around">
                            <Stack direction="row" mt={{ xs: 1 }}>
                                <VpnKeyIcon />
                                <Typography variant='subtitle1' mx={1}>
                                    IFSC Code  :
                                </Typography>
                                <Typography variant='subtitle1'>
                                    {userData.ifsc_code}
                                </Typography>
                            </Stack>

                            <Stack direction="row" mt={{ xs: 1 }}>
                                <AccountBalanceIcon />
                                <Typography variant='subtitle1' mx={1}>
                                    Bank Name :
                                </Typography>
                                <Typography variant='subtitle1'>
                                    {userData.bank_name}
                                </Typography>
                            </Stack>

                        </Stack>
                    </Box>

                    : ""}

            </Box>

            <Box className='Flex' mt={3}>
                <Button variant='contained'> MARK IN TIME ATTENDANCE </Button>
            </Box>

            <ViewAttendance />

        </Box >
    )
}

export default MarkAttendance
