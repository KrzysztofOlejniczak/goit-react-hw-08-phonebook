import { Box, Container, Link } from '@mui/material';
import { blue, yellow } from '@mui/material/colors';
import { Logo } from 'components/Logo/Logo';
import { NavMenu } from 'components/NavMenu/NavMenu';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { Outlet, Link as RoutedLink } from 'react-router-dom';
import { Spinner } from 'components/Spinner/Spinner';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { Toaster } from 'react-hot-toast';
import { useAuth } from 'hooks/useAuth';

export const SharedLayout = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const { isLoggedIn } = useAuth();
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
            {isLoggedIn ? <UserMenu /> : <NavMenu />}
          </Box>
          <Box display="flex" flexDirection="column" sx={{ p: 2 }}>
            <Suspense fallback={null}>
              {isLoading && !error && <Spinner />}
              <Outlet />
            </Suspense>
          </Box>
        </Box>
      </Container>
      <Toaster position="top-center" reverseOrder={true} />
    </Box>
  );
};
