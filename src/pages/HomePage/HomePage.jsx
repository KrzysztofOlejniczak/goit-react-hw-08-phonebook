import { Link, Typography } from '@mui/material';
import { Navigate, Link as RouterLink } from 'react-router-dom';

const logged = true;

export const HomePage = () => {
  return (
    <>
      {logged ? (
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
