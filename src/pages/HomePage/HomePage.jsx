import { Link, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { Navigate, Link as RouterLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

const HomePage = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Helmet>
        <title>PhoneBook</title>
      </Helmet>
      {isLoggedIn ? (
        <Navigate to={'/contacts'} />
      ) : (
        <>
          <Typography
            variant="h4"
            sx={{ mx: 'auto', mt: 8, textAlign: 'center' }}
          >
            Welcome to the PhoneBook
          </Typography>
          <Typography variant="h6" sx={{ mx: 'auto' }}>
            Please{' '}
            <Link component={RouterLink} to={'/login'}>
              log in
            </Link>{' '}
            or{' '}
            <Link component={RouterLink} to={'/signup'}>
              register
            </Link>
            !
          </Typography>
        </>
      )}
    </>
  );
};

export default HomePage;
