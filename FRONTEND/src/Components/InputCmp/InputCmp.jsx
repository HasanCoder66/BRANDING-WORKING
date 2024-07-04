import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import '../ContactCmp/ContactCmp.css'
export default function InputCmp({type, label}) {
  return (
    // <>
    //     <div className="input-box">
    //         <input type="text" placeholder="Full Name" />
    //     </div>

       
    //     </>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { 
          m: 1, 
          width: '100%', // Set initial width to 100%
          '@media (min-width: 817px)': {
            width: '25ch' // Change width for screens larger than 600px
          }
        },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='bg-white'>
        <TextField
          id="outlined-password-input"
          label={label}
          type={type}
          autoComplete="current-password"
        />
      </div>
    </Box>
  );
}
