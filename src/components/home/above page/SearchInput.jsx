import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 660,height:55 , backgroundColor: 'white', borderRadius: '28px', padding: '0 15px 0 6px'  }}
     
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: 'black'  }}
        placeholder="جستوجوی پزشک، تخصص، بیماری"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="button" sx={{ p: '11px', color: '#4f6470', backgroundColor: '#e6f8f5' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}