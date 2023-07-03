import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import docca from '../../assets/Ic2.svg';
import './Footer.css';
import instagram from "./instagram.png"
import facebook from "./facebook.png"
import telefono from "./telefono.png"
import { Link } from '@mui/material';
export const Footer = () => {
  return (
      <AppBar
        position="static"        
        sx={{
          display: 'flex',
          flexDirection: 'row',          
          justifyContent:'center',
          top: 'auto',
          bottom: 0,              
          width: '100%',
          margin: '0 auto'
        }}
        id="footerNav"
      >
      <img src={docca} style={{ height: '5rem' }} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            py: 1.5,
            gap:3,
          }}
        >
          {/* <Typography variant="body2" color="black">
            &copy; {new Date().getFullYear()} Your Website. All rights reserved.
          </Typography> */}
          
           
           <Typography variant="h6" color="black"><img src= {telefono} width={25}  height={25} /> 
             +5216622297062
           </Typography>
          <a href="https://www.facebook.com/"> 
          <img src={facebook}  width={25}  height={25} /></a>
          <a href="https://www.instagram.com/">
          <img src={instagram} width={25}  height={25}  />   </a>
        </Box>
      </AppBar>    
  );
};