import React from 'react'
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

theme.typography.h3 = {
  fontSize: '2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
};

const useStyles = makeStyles({
    paddingsBottom: {
      paddingBottom:"1em",
    },
  });



const CreativePeopleHeading = (props) => {

    const classes = useStyles();

  return (
    <article  className={classes.paddingsBottom}  >
      <ThemeProvider theme={theme}>
      <Typography variant="h6" gutterBottom className='main__color' sx={{textAlign:props.align}}>
      {props.title}
      </Typography>
      
      <Typography variant="h3" gutterBottom fontWeight={500} maxWidth="lg" sx={{ color: props.color,fontSize:props.fontSize,textAlign:props.align }}>
      {props.headings}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>{props.para}</Typography>
      </ThemeProvider>
      </article>
      
  )
}

export default CreativePeopleHeading