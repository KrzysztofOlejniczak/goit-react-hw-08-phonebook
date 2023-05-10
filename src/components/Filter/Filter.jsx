import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { fetchFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = e => {
    const form = e.currentTarget;
    const filterValue = form.elements.filter.value;
    dispatch(fetchFilter(filterValue));
  };
  return (
    <Box component="form" onChange={handleFilter} noValidate>
      <TextField
        margin="normal"
        id="filter"
        label="Search"
        name="filter"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
    //       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  );
};
