import React ,{useState} from 'react';
import { testimonials } from '../data';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import IconButton from '@mui/material/IconButton';
import { Container, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';


const useStyles = makeStyles({
    relatives: {
        position:"relative"
    },
    buttonstestimonialss: {
        position:"absolute!important",
        zIndex:"99",
        top:"50%",
        transform:"translateY(-50%)"
    },
    buttonsRight:{
        right:"0px"
    },
    buttonLeft:{
        left:"0px"
    }
  });


const Testimonial = () => {

    const [index,setIndex] = useState(0);
    const {id,name,quote,job} = testimonials[index] ;

    const nexttestimonialHandler = () =>{
        setIndex(e => e+1)

        if(index >= testimonials.length-1){
            setIndex(0)
        }
    }

    const prevtestimonialHandler = () =>{
        setIndex(e => e-1)
        if(index <=0){
            setIndex(testimonials.length -1)
        }
    }
    const classes = useStyles();

  return (
    <section className={classes.relatives}>        
    <Container maxWidth="sm">
        
       <Typography variant="body1" gutterBottom align="center">
           {quote}   
       </Typography>
       <Typography variant="h6" gutterBottom align="center">
           {name}   
       </Typography>
       
       <Typography variant="body2" gutterBottom align="center">
           {job}   
       </Typography>
       
    </Container>
     
     <IconButton aria-label="Next Image" size="small" onClick={nexttestimonialHandler}  className={clsx(classes.buttonstestimonialss,classes.buttonsRight)} ><KeyboardArrowRightIcon/></IconButton>
     <IconButton aria-label="Previous Image" size="small" onClick={prevtestimonialHandler}  className={clsx(classes.buttonstestimonialss,classes.buttonsLeft)} ><KeyboardArrowLeftIcon/></IconButton>
    </section>
  )
}

export default Testimonial