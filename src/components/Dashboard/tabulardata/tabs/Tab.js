
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{color: '#fff'}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        indicatorColor="none"
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: 'transparent',
            height: '2rem', 
            borderRadius: '0.5rem',
          },
          
          '& .MuiTab-root': {
            color: '#808080',
            minWidth: '25%',
            fontSize:'1rem',
          },
          '& .Mui-selected': {
            color: '#fff !important',
            borderBottom: '2px solid green',
            fontWeight:'bold',
            fontSize:'1rem',
          },
          '& .MuiSvgIcon-root': {
            width: '2rem', 
            height: '2rem', 
          },
        }}
      >
        <Tab label="FAV" />
        <Tab label="HOT" />
        <Tab label="SEN" />
        <Tab label="FX" />
        <Tab label="TX" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
        <Tab label="Item Eight" />
      </Tabs>
    </Box>
  );
}
