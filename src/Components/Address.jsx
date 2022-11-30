import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
 flexItems:{
    display:"flex",
    alignItems:"center",
    gap:"0 10px",
    marginBottom:"10px"
 }
});



const Address = () => {

    const classes = useStyles();

  return (
    <address>
        <ul>
            <li className={classes.flexItems}>
                <span><LocationOnIcon className='main__color'/></span>North Main Street,Brooklyn Australia
            </li>
            <li className={classes.flexItems}><span><EmailIcon className='main__color'/></span>Email: contact@mail.com</li>
            <li className={classes.flexItems}><span><PhoneIcon className='main__color'/></span> Phone:+88 01672 506 744</li>
        </ul>
    </address>
  )
}

export default Address