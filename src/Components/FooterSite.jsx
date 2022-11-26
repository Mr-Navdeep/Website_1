import React from 'react';
import {Container,Grid,Typography,TextField,Button } from '@mui/material';
import {Quicklinks,Companylinks} from './../data'

const FooterSite = () => {
  return (
    
    <Container maxWidth="lg" className='p-50'>
          <Grid container spacing={2}>
        <Grid item xs={12}  lg={3}>
        <Typography variant="h5" gutterBottom>
        Company
      </Typography>
          {
            Quicklinks.map(({name,path}) => {return (
                <p>{name}</p>
            )})
          }
        </Grid>
        <Grid item xs={12}  lg={3}>
        <Typography variant="h5" gutterBottom>
        Quick Links
           </Typography>
            {
                Companylinks.map(({name,path}) => {return(
                    <p>{name}</p>
                )})
            }
          
        </Grid>

        
        <Grid item xs={12}  lg={3}>
           <Typography variant="h5" gutterBottom>
              Subscribe Us
           </Typography>

           <Typography variant="subtitle1" gutterBottom>
           Subscribe to get latest news article and resources
           </Typography>

           <TextField id="outlined-basic" label="Subscribe now..." variant="outlined" />
           <Button variant="contained" className='Button_color' sx={{mt:2}}>
        Success
      </Button>
            
        </Grid>

         
        <Grid item xs={12} lg={3}>
           <Typography variant="h6" gutterBottom>
           Support@megakit.com           
           </Typography>
           <Typography variant="subtitle1"  gutterBottom>
           +123-456-7890
           </Typography>
           

        
            
        </Grid>



        </Grid>
    </Container>
    
    
  )
}

export default FooterSite