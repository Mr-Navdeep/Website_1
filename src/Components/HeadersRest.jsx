import React from 'react';
import {Typography , Container} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

theme.typography.h2 = {
  fontSize: '1.2rem',
  '@media (max-width:600px)': {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '4rem',
  },
};


const HeadersRest = (props) => {
  return (
    <section className='p-100 Headersrest'  style={{backgroundImage : `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${props.image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}>
       <ThemeProvider theme={theme}>
        <Container maxwidth="lg">
        <Typography variant="subtitle1" gutterBottom align="center" sx={{color:"#fff"}}>
            {props.title}        
      </Typography>
      <Typography variant="h2" component={"h2"} gutterBottom fontWeight={600} align="center" sx={{color:"#fff"}}>
        {props.mainTitle}
      </Typography>
      <Typography variant="subtitle1" gutterBottom align="center" sx={{color:"#fff"}}>
            Home/{props.title}     
      </Typography>

      </Container>
      </ThemeProvider>
    </section>
  )
}

export default HeadersRest