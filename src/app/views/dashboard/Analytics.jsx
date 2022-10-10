import { Box, Stack, Typography, Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { useNavigate } from 'react-router-dom';
import "./analytics.css";


function Item(props) {
  const CarouselItem = {
    width: "100%",
    height: { md: "40vh", sm: "30vh", sx: "20vh" },
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
  }
  return (
    <Paper>
      <Box sx={CarouselItem} >
        <img src={props.item.image} className="carousel-img" alt="Doctor-img" />
      </Box>
    </Paper>
  )
}

const Analytics = () => {
  let items = [
    {
      image: "/assets/images/DashboardImg/carousel2.jpg"
    },
    {
      image: "/assets/images/DashboardImg/carousel4.jpg"
    },
    {
      image: "/assets/images/DashboardImg/carousel5.jpg"
    }
  ]

  const CarouselContainer = {
    padding: { sm: "20px", xs: "10px" },
  }

  const AppointmentBox = {
    marginY: "10px",
    paddingX: { sm: "50px", xs: "10px" },
    paddingY: "10px",
    cursor: "pointer",
  }

  const SVGBox = {
    width: { sm: "150px", xs: "120px" },
    height: { sm: "150px", xs: "120px" },
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }


  const DashboardBoxs = {
    color: "white",
    background: "#9938fa",
    borderRadius: "14px",
    // padding: "15px",
    padding: { sm: "15px", xs: "5px" },
    cursor: "pointer",
    width: "100%",
    marginTop: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }

  const SVGContainer = {
    width: { sm: "200px", xs: "150px" },
    textAlign: "center"
  }


  const navigate = useNavigate();

  const NavBook = () => {
    navigate("/book-appointment")
  }
  const NavMark = () => {
    navigate("/mark-attendance")
  }
  const NavHistory = () => {
    navigate("/appointment-history")
  }
  const NavPatient = () => {
    navigate("/view-patient")
  }
  const NavTdAppointment = () => {
    navigate("/todays-appointment")
  }


  return (
    <Box sx={CarouselContainer}>
      <Box >
        <Carousel>
          {
            items.map((item, i) => <Item key={i} item={item} />)
          }
        </Carousel>
      </Box>

      <Paper sx={AppointmentBox} onClick={NavTdAppointment}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">

          <Stack justifyContent="center" alignItems="center">

            <Typography variant="h5" sx={{ fontWeight: "800", fontSize: { sm: "40px", xs: "30px" } }} >
              0
            </Typography>
            <Typography variant="h5" sx={{ fontSize: { sm: "25px", xs: "17px" } }} mt={1}>
              Today's Appointment
            </Typography>

          </Stack>

          <Box sx={SVGBox}>
            <img className='dashboardSvg' src="/assets/images/DashboardImg/Appointment1.svg" alt='appointment-img' />
          </Box>

        </Stack>
      </Paper>


      <Stack >
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box sx={DashboardBoxs} mr={2} onClick={NavBook} >
            <Box sx={SVGContainer}>
              <img src='/assets/images/DashboardImg/Appointments07.svg' className='dashboardSvg' alt='Book-Appointment-Img' />
            </Box>
            <Typography variant="subtitle1" mt={1} sx={{ textAlign: "center", }}>
              Book Appointment
            </Typography>
          </Box>

          <Box sx={DashboardBoxs} onClick={NavMark}>
            <Box sx={SVGContainer}>
              <img src='/assets/images/DashboardImg/Appointments03.svg' className='dashboardSvg' alt='Book-Appointment-Img' />
            </Box>
            <Typography variant="subtitle1" mt={1} sx={{ textAlign: "center", }}>
              Mark Attendance
            </Typography>
          </Box>


        </Stack>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box sx={DashboardBoxs} mr={2} onClick={NavHistory} >
            <Box sx={SVGContainer}>
              <img src='/assets/images/DashboardImg/Appointments01.svg' className='dashboardSvg' alt='Book-Appointment-Img' />
            </Box>
            <Typography variant="subtitle1" mt={1} sx={{ textAlign: "center", }}>
              Appointment History
            </Typography>
          </Box>

          <Box sx={DashboardBoxs} onClick={NavPatient}>
            <Box sx={SVGContainer}>
              <img src='/assets/images/DashboardImg/Appointments02.svg' className='dashboardSvg' alt='Book-Appointment-Img' />
            </Box>
            <Typography variant="subtitle1" mt={1} sx={{ textAlign: "center", }}>
              View Patient
            </Typography>
          </Box>

        </Stack>
      </Stack>






    </Box>
  );
};

export default Analytics;
//  npm install react-material-ui-carousel --save
// carousel npm package