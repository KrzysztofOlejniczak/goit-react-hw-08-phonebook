import { Link, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { Navigate, Link as RouterLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const HomePage = () => {
  const loggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <Helmet>
        <title>PhoneBook</title>
      </Helmet>
      {loggedIn ? (
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
