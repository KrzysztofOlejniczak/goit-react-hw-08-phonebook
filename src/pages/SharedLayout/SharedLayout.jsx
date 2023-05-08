import { Box, Container } from '@mui/material';
import { blue, yellow } from '@mui/material/colors';
import { Logo } from 'components/Logo/Logo';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      sx={{ bgcolor: blue[50] }}
    >
      <Container maxWidth="md" sx={{ my: 2 }}>
        <Box
          display="flex"
          flexDirection="column"
          minHeight="90vh"
          sx={{ bgcolor: 'white', boxShadow: 3 }}
        >
          <Box
            display="flex"
            flexDirection="row"
            sx={{ p: 2, bgcolor: yellow[700], boxShadow: 1 }}
          >
            <Logo />
          </Box>
          <Box display="flex" flexDirection="column" sx={{ p: 2 }}>
            <Outlet />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
