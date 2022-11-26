import React from 'react'
import {MVA} from './../data'
import {Container,Grid,Typography,Box} from '@mui/material';


const MissonVApproch = () => {
  return (
    <article>
        
        <Container>
                        <Grid container spacing={2}>
        {
            MVA.map(({id,headings,para})=> {
                return (
                        <Grid item xs={12} lg={4}>
                              <Typography variant="h4" gutterBottom>
                              <Box component="span" sx={{ pr: 2, color:"#f75757" }}>
                                {id}
                              </Box>
                              {headings}
                               </Typography>
                             {para}
                            
                        </Grid>
                        
                )
            } )
        }
          </Grid>
       </Container>        
    </article>
  )
}

export default MissonVApproch