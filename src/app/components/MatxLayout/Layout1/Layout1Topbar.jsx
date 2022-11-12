import { Avatar, Hidden, Icon, IconButton, MenuItem, useMediaQuery } from '@mui/material';
import { Box, styled, useTheme } from '@mui/system';
import { MatxMenu } from 'app/components';
import { themeShadows } from 'app/components/MatxTheme/themeColors';
// import useAuth from 'app/hooks/useAuth';
import useSettings from 'app/hooks/useSettings';
import { topBarHeight } from 'app/utils/constant';
import React from 'react';
import { Link } from 'react-router-dom';
import { Span } from '../../../components/Typography';
import { useNavigate } from 'react-router-dom';


const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const TopbarRoot = styled('div')(({ theme }) => ({
  top: 0,
  zIndex: 96,
  transition: 'all 0.3s ease',
  boxShadow: themeShadows[8],
  height: topBarHeight,
}));

const TopbarContainer = styled(Box)(({ theme }) => ({
  padding: '8px',
  paddingLeft: 18,
  paddingRight: 20,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: theme.palette.primary.main,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: 1,
    paddingRight: 1,
  },
  [theme.breakpoints.down('xs')]: {
    paddingLeft: 1,
    paddingRight: 1,
  },
}));

const UserMenu = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  borderRadius: 24,
  padding: 4,
  '& span': { margin: '0 8px' },
}));

const StyledItem = styled(MenuItem)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  minWidth: 185,
  '& a': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  '& span': { marginRight: '10px', color: theme.palette.text.primary },
}));

const NavbarName = {
  fontSize: { sm: "18px", xs: "15px" },
  fontWeight: 600,
  letterSpacing: { sm: "1px", xs: "" },
}

const UserNameBox = {
  fontSize: { sm: "16px", xs: "13px" },
  fontWeight: { sm: "400", lg: "600" }
}

const AvatarBox = {
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
}
const AvatarIcon = {
  cursor: "pointer",
  width: "35px",
  height: "35px",
  borderRadius: "50%",
}



const Layout1Topbar = () => {

  const theme = useTheme();
  const { settings, updateSettings } = useSettings();
  // const { logout, user } = useAuth();
  const navigate = useNavigate();


  const UserName = localStorage.getItem("UserName");


  const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));

  const updateSidebarMode = (sidebarSettings) => {
    updateSettings({
      layout1Settings: { leftSidebar: { ...sidebarSettings } },
    });
  };

  const handleSidebarToggle = () => {
    let { layout1Settings } = settings;
    let mode;
    if (isMdScreen) {
      mode = layout1Settings.leftSidebar.mode === 'close' ? 'mobile' : 'close';
    } else {
      mode = layout1Settings.leftSidebar.mode === 'full' ? 'close' : 'full';
    }
    updateSidebarMode({ mode });
  };

  const Logout = () => {
    navigate('/session/signin')
    localStorage.clear()
  }

  const HospitalName = localStorage.getItem('HospitalName');

  return (
    <TopbarRoot>
      <TopbarContainer>


        <Box display="flex">
          <StyledIconButton onClick={handleSidebarToggle}>
            <Icon>menu</Icon>
          </StyledIconButton>
        </Box>

        <Box sx={NavbarName}> {HospitalName} </Box>

        <Box display="flex" alignItems="center">

          <MatxMenu
            menuButton={
              <UserMenu>
                <Hidden xsDown>
                  <Span>
                    <Box sx={UserNameBox}>
                      {UserName}
                    </Box>
                  </Span>
                </Hidden>
                <Box sx={AvatarBox} >
                  <Avatar sx={AvatarIcon} />
                </Box>
              </UserMenu>
            }
          >
            <StyledItem>
              <Link to="/">
                <Icon> home </Icon>
                <Span> Home </Span>
              </Link>
            </StyledItem>

            <StyledItem>
              <Link to="profile">
                <Icon> person </Icon>
                <Span> Profile </Span>
              </Link>
            </StyledItem>

            <StyledItem onClick={Logout}>
              <Icon> power_settings_new </Icon>
              <Span> Logout </Span>
            </StyledItem>
          </MatxMenu>
        </Box>
      </TopbarContainer>
    </TopbarRoot>
  );
};

export default React.memo(Layout1Topbar);
