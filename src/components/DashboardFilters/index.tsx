import * as React from 'react';

import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ChangeEvent } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { SxProps } from "@mui/system";
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const FilterWrapper = styled(Box)(
  ({ theme }) => `
        border-radius: 0;
        /* margin: ${theme.spacing(2)} 0; */
`
);

const popperSx: SxProps = {
  "& .MuiPaper-root": {
    border: "1px solid white",
    padding: 2,
    marginTop: 1,
    backgroundColor: '#FFF'
  },
  "& .MuiCalendarPicker-root": {
    backgroundColor: '#FFF'
  },
};



function DashboardFilters() {
  const [value, setValue] = React.useState<Date | null>(null);
  const [project, setProject] = React.useState<String | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProject(event.target.value as string);
  };
  
  const color = '#FFF'
  return (
    <FilterWrapper >
      <Box
        display={{ xs: 'block', md: 'flex' }}
        alignItems="center"
        textAlign={{ xs: 'left', md: 'left' }}
        justifyContent="space-between"
      >
        <FormControl variant="outlined">
          <InputLabel id="">Project</InputLabel>
          <Select
            labelId=""
            id="demo-simple-select-outlined"
            value={project}
            onChange={handleChange}
            label="Project"
          >
            <MenuItem value="0">All Projects</MenuItem>
            <MenuItem value="1">DB Web</MenuItem>
            <MenuItem value="2">RMS</MenuItem>
            <MenuItem value="3">Others</MenuItem>
          </Select>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Period - Start"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            PopperProps={{
              sx: popperSx
            }}
            renderInput={(params) => 
              <TextField {...params}
                sx={{
                  svg: { color },
                  input: { color },
                  label: { color }
                }}
              />
            }
          />
          <DatePicker
            label="Period - End"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            PopperProps={{
              sx: popperSx
            }}
            renderInput={(params) => 
              <TextField {...params}
                sx={{
                  svg: { color },
                  input: { color },
                  label: { color }
                }}
              />
            }
          />
        </LocalizationProvider>
      </Box>
    </FilterWrapper>
  );
}

export default DashboardFilters;
