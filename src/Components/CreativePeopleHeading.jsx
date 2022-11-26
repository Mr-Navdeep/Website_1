import React from 'react'
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    paddingsBottom: {
      paddingBottom:"1em",
    },
  });


const CreativePeopleHeading = (props) => {

    const classes = useStyles();

  return (
    <article  className={classes.paddingsBottom}  >
      <Typography variant="h6" gutterBottom className='main__color' sx={{textAlign:props.align}}>
      {props.title}
      </Typography>
      
      <Typography variant="h3" gutterBottom fontWeight={500} maxWidth="lg" sx={{ color: props.color,fontSize:props.fontSize,textAlign:props.align }}>
      {props.headings}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>{props.para}</Typography>
      </article>
      
  )
}

export default CreativePeopleHeading