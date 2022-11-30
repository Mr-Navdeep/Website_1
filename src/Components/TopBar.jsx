import React from 'react'
import {Container,Box,Grid }  from '@mui/material';
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter,BsGithub } from "react-icons/bs";
import {GrMail} from "react-icons/gr";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  main: {
    background: '#222328',
    borderBottom: "1px solid #dedede", 
  },
  flexElements:{
    display:"flex",
    justifyContent:"flex-end",
    gap:"5px",
    alignItems:"center",
    flexDirection:"row",
    '@media (max-width: 768px)' : {
      justifyContent:"flex-start",
      flexDirection:"column!important",
      alignItems:"start",
    }
  }
});

const TopBar = () => {

  const classes = useStyles();

  return (
    <section  className={classes.main}>
      <Container maxWidth="lg">
         <Box className="TopBar" >
         <Grid container >
        <Grid item xl={3} xs={12} padding={2} sx={{display:"flex",gap:"15px"}}>
          <FaFacebookF className='textWhite'/><BsTwitter className='textWhite'/> <BsGithub className='textWhite'/>
        </Grid>
        <Grid item xl={9} xs={12} padding={2} className={classes.flexElements}>
         <Box component="div" className='textWhite'> <Box component="span" className='TextDarkLight'>Call Us: </Box> +1234567890</Box>
         <Box component="div" className='textWhite' sx={{}}> <Box component="span" className='TextDarkLight'><GrMail/></Box> Support@gmail.com</Box>
        </Grid>
      </Grid>
         </Box>
      </Container>    
   </section>
  )
}

export default TopBar