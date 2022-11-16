import { Box, styled } from '@mui/material';
import useSettings from 'app/hooks/useSettings';
import { useNavigate } from 'react-router-dom';
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
  cursor: "pointer",
  display: mode === 'compact' ? 'none' : 'block',
}));


const Brand = ({ children }) => {
  const { settings } = useSettings();
  const leftSidebar = settings.layout1Settings.leftSidebar;
  const { mode } = leftSidebar;

  const ClinicEasyLogo = `https://cliniceasy.in/admin/uploads/logo/2130_cliniceasy.png`;

  const navigate = useNavigate();

  return (
    <BrandRoot  >
      <Box display="flex" alignItems="center"
        onClick={() => navigate('/dashboard')}>
        <img style={{ width: "50px", cursor: "pointer" }} src={ClinicEasyLogo} alt="Logo" />
        <StyledSpan mode={mode} className="sidenavHoverShow">
          Clinic Easy
        </StyledSpan>
      </Box>
    </BrandRoot>
  );
};

export default Brand;
