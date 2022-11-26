import React,{useState} from 'react';
import { GrFacebook } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import {Box} from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
  relativeBox:{
    position:"relative"
  },
  absoluteBox:{
    position:"absolute",
    top:"0%",
    left:"0%",
    background:" rgb(247, 87, 87,0.5)",
    width:"100%",
    height:"100%",
    display:"grid",
    placeItems:"center",
    zIndex:"2",

    '& svg': {
      color: '#fff',
      fontSize:'2.5rem'
   }
  }
});

const Teamone = (props) => {
  const classes = useStyles();
    const [isShown, setIsShown] = useState(false);

  return (
     <Box component="div" 
    onMouseEnter={() => setIsShown(true)}
    onMouseLeave={() => setIsShown(false)} className={classes.relativeBox}>
   
     <img src={props.avatar} alt={props.name} />

     {isShown && (
         
     <Box component="div" className={classes.absoluteBox} >
      <Box component="div" sx={{display:"flex",gap:"5px"}} >
      
      <a href="https://facebook.com"><GrFacebook/></a>
      <a href={props.insta}><GrInstagram/></a>
      <a href={props.twitter}><GrTwitter/></a>
      <a href={props.linkedin}><GrLinkedin/></a>
     
     </Box>

  </Box>
     )}

     
   </Box>
  )
}

export default Teamone