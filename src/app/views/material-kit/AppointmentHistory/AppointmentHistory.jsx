import { Box, Button, Modal, Paper, Stack, TextField, Typography } from '@mui/material';
import HeadingComp from 'app/views/CommonComp/HeadingComp';
import React from 'react'
import "./appointmentHistory.css";
import { Formik } from 'formik';
import * as Yup from "yup";
import "yup-phone";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PortraitIcon from '@mui/icons-material/Portrait';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DetailsIcon from '@mui/icons-material/Details';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';


let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;

// inital login credentials
const initialValues = {
    date: today,
};

// form field validation schema
const validationSchema = Yup.object().shape({
    date: Yup.string().required("Date is Required"),
});

// form field validation schema
const validationSchemaModal = Yup.object().shape({
    fees: Yup.string().min(1).required("Fees is Required !"),
});

const HospitalId = localStorage.getItem('HospitalId');
const UserId = localStorage.getItem('UserId');


const AppointmentHistory = () => {

    const [dateInfo, setDateInfo] = useState([]);
    const [error, setError] = useState();
    const [appointmentsId, setAppointmentsId] = useState();

    const AppointHistoryBox = {
        display: "flex",
        alignContent: "center",
        // alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: { md: "row", xs: "column" },
    }

    const AppointHistoryInfo = {
        padding: "20px",
        width: { md: "30vw", xs: "94vw" },
        display: "flex",
        alignItems: "start",
        flexDirection: "column",
        justifyContent: "center",
        margin: "10px"
    }

    //----------- Modal Styling ----------
    const modalBox = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { sm: "400px", xs: "95%", },
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


    const url = `https://cliniceasy.in/restAPI/index.php/Home/getAppointments`;


    const handleFormSubmit = (values) => {

        const data = {
            "hospital_id": HospitalId,
            "user_id": UserId,
            "booking_date": values.date,
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
                if (resp.success === 1) {
                    setDateInfo(resp.appointments)
                    localStorage.setItem('BookingDate', values.date)
                    setError()
                } else {
                    setError(resp.message)
                }
            })
        })
    }


    // ------------- Modal Jsx Starts here ----------


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open1, setOpen1] = useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);

    //  Modal Jsx Initial Modal Status
    const ModalStatus = {
        fees: "",
    };

    const Url = `https://cliniceasy.in/restAPI/index.php/Home/changeAppointmentStatus`;

    const reRenderingData = {
        "hospital_id": HospitalId,
        "user_id": UserId,
        "booking_date": localStorage.getItem('BookingDate'),
    }

    const SubmitModalStatus = (values) => {

        const Data = {
            "hospital_id": HospitalId,
            "user_id": UserId,
            "appointment_id": appointmentsId,
            "appointment_status": "Completed",
            "appointment_fees": values.fees
        }

        const Options = {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: JSON.stringify(Data),
        }

        fetch(Url, Options)
            .then(res => {
                res.json().then((result) => {
                    return result;
                })
            }).then(() => {
                handleClose();

                // -----Re:Rendering Appointment History Component Start's Here
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(reRenderingData)
                }).then(result => {
                    result.json().then(resp => {
                        if (resp.success === 1) {
                            setDateInfo(resp.appointments)
                            setError()
                        } else {
                            setError(resp.message)
                        }
                    })
                })
                // -----Re:Rendering Appointment History Component Ends's Here
            })

    }
    // Modal Status

    // ---- Delete Appointment

    const URL = `https://cliniceasy.in/restAPI/index.php/Home/deleteAppointment`;

    const DelAppointment = () => {
        const Data = {
            "hospital_id": HospitalId,
            "user_id": UserId,
            "appointment_id": appointmentsId
        }

        const Options = {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: JSON.stringify(Data),
        }

        fetch(URL, Options)
            .then(res => {
                res.json().then((result) => {
                    return result;
                })
            }).then(() => {
                handleClose1();
                // -----Re:Rendering Appointment History Component Start's Here
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(reRenderingData)
                }).then(result => {
                    result.json().then(resp => {
                        if (resp.success === 1) {
                            setDateInfo(resp.appointments)
                            setError()
                        } else {
                            setError(resp.message)
                        }
                    })
                })
                // -----Re:Rendering Appointment History Component Ends's Here

            })

    }
    // ---- Delete Appointment
    // ------------- Modal Jsx Ends here ----------

    return (
        <Box>
            <HeadingComp heading="Appointment History" navigate="/dashboard" />

            <Box mt={3} mb={2} >
                <Formik
                    onSubmit={handleFormSubmit}
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>

                            <Stack direction="row"
                                justifyContent="center"
                                p={1}>

                                <TextField
                                    type="date"
                                    name="date"
                                    variant="outlined"
                                    onBlur={handleBlur}
                                    value={values.date}
                                    onChange={handleChange}
                                    helperText={touched.date && errors.date}
                                    error={Boolean(errors.date && touched.date)}
                                    sx={{ maxWidth: { sm: "40vw", xs: "70vw" } }}
                                    fullWidth
                                    label="Select Date"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />

                                <Box ml={3} sx={{ transform: "translateY(10px)" }}>
                                    <Button variant='contained' type='submit' > <ArrowForwardIcon /> </Button>
                                </Box>
                            </Stack>
                        </form>
                    )}
                </Formik>
            </Box>



            <Box sx={AppointHistoryBox}>

                {error ? error :
                    dateInfo.map((data) => {
                        return (
                            <Paper sx={AppointHistoryInfo} key={data.id}>
                                <Stack direction="row" alignItems="center" mb={1}>
                                    <ConfirmationNumberIcon /> <Typography variant='subtitle1' ml={1}>
                                        Appointment Number : {data.booking_number}
                                    </Typography>
                                </Stack>
                                <Stack direction="row" alignItems="center" mb={1}>
                                    <PortraitIcon /> <Typography variant='subtitle1' ml={1}>
                                        Name : {data.patient}
                                    </Typography>
                                </Stack>
                                <Stack direction="row" alignItems="center" mb={1}>
                                    <ScheduleIcon /> <Typography variant='subtitle1' ml={1}>
                                        Shift : {data.shift}
                                    </Typography>
                                </Stack>
                                <Stack direction="row" alignItems="center" mb={1}>
                                    <CalendarMonthIcon /> <Typography variant='subtitle1' ml={1}>
                                        Date : {data.booking_date}
                                    </Typography>
                                </Stack>
                                <Stack direction="row" alignItems="center" mb={1}>
                                    <DetailsIcon /> <Typography variant='subtitle1' ml={1}>
                                        Status : {data.appointment_status}
                                    </Typography>
                                </Stack>
                                <Stack direction="row" alignItems="center" mb={1}>
                                    <SmartphoneIcon /> <Typography variant='subtitle1' ml={1}> Mobile : {data.mobile}
                                    </Typography>
                                </Stack>
                                <Stack direction="row" alignItems="center" mb={1}>
                                    <PlaylistAddCheckIcon /> <Typography variant='subtitle1' ml={1}>
                                        Created By : {data.created_by}
                                    </Typography>
                                </Stack>

                                {(data.description === '') ? "" :
                                    <Stack direction="row" alignItems="center" mb={1}>
                                        <EditIcon /> <Typography variant='subtitle1' ml={1}>
                                            Description : {data.description}
                                        </Typography>
                                    </Stack>
                                }

                                {(data.appointment_fees === "0") ? "" :
                                    <Stack direction="row" alignItems="center">
                                        <CurrencyRupeeIcon /> <Typography variant='subtitle1' ml={1}>
                                            <strong> Fee : ₹{data.appointment_fees} </strong>
                                        </Typography>
                                    </Stack>
                                }

                                {(data.appointment_status === "Waiting") ?
                                    <Stack direction="row" spacing={2} mt={1}>
                                        <Button variant="outlined" color="error" onClick={() => {
                                            setAppointmentsId(data.id)
                                            handleOpen1()
                                        }}>
                                            Delete
                                        </Button>

                                        <Button variant="contained" onClick={() => {
                                            setAppointmentsId(data.id)
                                            handleOpen()
                                        }}>
                                            Change Status
                                        </Button>
                                    </Stack> : ''}

                            </Paper>
                        )
                    })

                }


                <Modal
                    open={open}
                    onClose={handleClose}
                    sx={{ outline: "none", }}
                >
                    <Box sx={modalBox}>

                        <Box sx={FormContainer}>
                            <Box sx={FormElements}>
                                <Typography variant='h6' align='center' mb={2} sx={{ color: "var(--blue-color)", transform: "translateY(-10px)" }}>
                                    Hospital Fees
                                </Typography>
                                <Formik
                                    onSubmit={SubmitModalStatus}
                                    initialValues={ModalStatus}
                                    validationSchema={validationSchemaModal}
                                >
                                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                                        <form onSubmit={handleSubmit}>
                                            <TextField
                                                fullWidth
                                                size="small"
                                                type="number"
                                                name="fees"
                                                label="Patient Total Fees"
                                                variant="outlined"
                                                onBlur={handleBlur}
                                                value={values.fees}
                                                onChange={handleChange}
                                                helperText={touched.fees && errors.fees}
                                                error={Boolean(errors.fees && touched.fees)}
                                                sx={{ mb: 3 }}
                                            />

                                            <Stack direction='row' justifyContent="space-between">
                                                <Button variant="contained" color="error" sx={{ minWidth: "150px", padding: "8px", }}
                                                    onClick={handleClose} >
                                                    Cancel
                                                </Button>
                                                <Button variant="contained" sx={{ minWidth: "150px", padding: "8px", marginLeft: "20px" }}
                                                    type="submit" >
                                                    Confirm
                                                </Button>
                                            </Stack>
                                        </form>
                                    )}
                                </Formik>
                            </Box>
                        </Box>

                    </Box>
                </Modal>

                <Modal
                    open={open1}
                    onClose={handleClose1}
                    sx={{ outline: "none", }}
                >
                    <Box sx={modalBox}>

                        <Box sx={FormContainer}>
                            <Box sx={FormElements}>
                                <Typography variant='h6' align='center' mb={2} sx={{ color: "var(--blue-color)", transform: "translateY(-10px)" }}>
                                    Cancel Appointment
                                </Typography>

                                <Typography mb={3} sx={{ fontSize: "17px", }}>
                                    Do you really want to Cancel Appointment?
                                </Typography>

                                <Stack direction='row' justifyContent="space-between">
                                    <Button variant="contained" color="error" sx={{ minWidth: "150px", padding: "8px", }}
                                        onClick={handleClose1} >
                                        No
                                    </Button>
                                    <Button variant="contained" sx={{ minWidth: "150px", padding: "8px", marginLeft: "20px" }}
                                        type="submit" onClick={DelAppointment} >
                                        Yes
                                    </Button>
                                </Stack>

                            </Box>
                        </Box>

                    </Box>
                </Modal>

            </Box>

        </Box>
    )
}

export default AppointmentHistory
