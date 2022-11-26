import React from 'react'
import {TextField,Typography,FormControl,Button} from '@mui/material';


const Form = () => {
  return (
    <form>
        <Typography variant="h4" gutterBottom  sx={{color:"#000",mb:2}} fontWeight={500} >Form</Typography>   

         <FormControl fullWidth sx={{ m: 1 }}>
            <TextField id="outlined-basic" label="Your Name" variant="outlined"   sx={{bgcolor:"#f5f8f9"}}/>
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }}>
             <TextField id="Email" label="Email Address" variant="outlined"  sx={{bgcolor:"#f5f8f9"}}/>
        </FormControl>
        
        <FormControl fullWidth sx={{ m: 1 }}>
             <TextField  variant="outlined"  rows={5} rowsmax={5} multiline placeholder="Your Comments" sx={{bgcolor:"#f5f8f9"}}/>
        </FormControl>

        
        <FormControl sx={{ m: 1 }}>
             <Button variant="contained" className='Button_color'>Send Message</Button>
        </FormControl>
        
    </form>
  )
}

export default Form