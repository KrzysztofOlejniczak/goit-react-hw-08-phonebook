import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Box, Typography } from '@mui/material';

export const Logo = () => {
  return (
    <Box display="flex" flexDirection="row">
      <ContactPhoneIcon fontSize="large" />
      <Typography
        variant="h5"
        component={'h1'}
        sx={{ fontFamily: 'Vina Sans', pl: 1 }}
      >
        PhoneBook
      </Typography>
    </Box>
  );
};
