import React from 'react'
import {works} from './../data'
import {Grid,Typography} from '@mui/material';

const Latestwork = () => {
  return (
    <article className='Latestwork'>
        <Grid container spacing={2}>
        {
            works.map(({id,headings,bgimage}) => {
                return(                    
                        <Grid item xs={12} lg={4}>
                            <img src ={bgimage} alt={headings}/>
                            <Typography variant="h6" gutterBottom align="center" sx={{color:"#000",mt:1}}>{headings}
                            </Typography>                                                
                        </Grid>
                    
                )
            })
        }
        </Grid>
    </article>
  )
}

export default Latestwork