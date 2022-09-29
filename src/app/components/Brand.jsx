import { Box, styled } from '@mui/material';
import useSettings from 'app/hooks/useSettings';
import { Span } from './Typography';

const BrandRoot = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px 18px 20px 29px',
}));

const StyledSpan = styled(Span)(({ mode }) => ({
  fontSize: 18,
  marginLeft: '.5rem',
  display: mode === 'compact' ? 'none' : 'block',
}));

const Brand = ({ children }) => {
  const { settings } = useSettings();
  const leftSidebar = settings.layout1Settings.leftSidebar;
  const { mode } = leftSidebar;

  const ClinicEasyLogo = `https://cliniceasy.in/admin/uploads/logo/2130_cliniceasy.png`;

  return (
    <BrandRoot>
      <Box display="flex" alignItems="center">
        <img style={{ width: "50px" }} src={ClinicEasyLogo} alt="Logo" />
        <StyledSpan mode={mode} className="sidenavHoverShow">
          Clinic Easy
        </StyledSpan>
      </Box>
    </BrandRoot>
  );
};

export default Brand;