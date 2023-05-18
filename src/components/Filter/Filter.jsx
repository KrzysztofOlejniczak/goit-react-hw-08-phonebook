import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { fetchFilter } from 'redux/contacts/filterSlice';

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
        size="small"
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
  );
};
