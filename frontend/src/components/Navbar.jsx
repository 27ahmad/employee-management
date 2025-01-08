import { AppBar, Toolbar, Typography, IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaHome, FaUserPlus } from 'react-icons/fa';

const Navbar = () => {
  const navStyles = {
    background: 'linear-gradient(90deg, #4361ee 0%, #4895ef 100%)',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000
  };

  const toolbarStyles = {
    minHeight: '64px',
    padding: '0 24px',
  };

  const iconStyles = {
    color: '#ffffff',
    fontSize: '1.2rem',
    padding: '8px',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      transform: 'scale(1.1)'
    }
  };

  const titleStyles = {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 500,
    fontSize: '1.25rem',
    color: '#ffffff',
    flexGrow: 1
  };

  return (
    <>
      <AppBar elevation={0} sx={navStyles}>
        <Toolbar sx={toolbarStyles}>
          <Typography variant="h6" sx={titleStyles}>
            Employee Management
          </Typography>
          <Tooltip title="Home" arrow>
            <IconButton 
              component={Link} 
              to="/" 
              sx={iconStyles}
            >
              <FaHome />
            </IconButton>
          </Tooltip>
          <Tooltip title="Add Employee" arrow>
            <IconButton 
              component={Link} 
              to="/create" 
              sx={iconStyles}
            >
              <FaUserPlus />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* Spacer for fixed navbar */}
    </>
  );
};

export default Navbar;