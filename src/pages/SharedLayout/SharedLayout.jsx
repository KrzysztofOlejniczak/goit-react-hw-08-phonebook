import { Box, Container, Link } from '@mui/material';
import { blue, yellow } from '@mui/material/colors';
import { Logo } from 'components/Logo/Logo';
import { NavMenu } from 'components/NavMenu/NavMenu';
import { Suspense } from 'react';
import { Outlet, Link as RoutedLink } from 'react-router-dom';

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
            flexWrap={'nowrap'}
            justifyContent={'space-between'}
            alignItems={'center'}
            sx={{ p: 2, bgcolor: yellow[700], boxShadow: 1 }}
          >
            <Link
              component={RoutedLink}
              to={'/'}
              underline="none"
              color={'inherit'}
            >
              <Logo />
            </Link>
            <NavMenu />
          </Box>
          <Box display="flex" flexDirection="column" sx={{ p: 2 }}>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
