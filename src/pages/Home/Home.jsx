import { Typography } from '@mui/material';

export const Home = () => {
  return (
    <>
      <Typography variant="h4" sx={{ mx: 'auto', mt: 8 }}>
        Welcome to the PhoneBook
      </Typography>
      <Typography variant="h6" sx={{ mx: 'auto' }}>
        Please log in or register!
      </Typography>
    </>
  );
};
