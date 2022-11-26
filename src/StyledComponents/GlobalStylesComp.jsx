// 1. GlobalStyles.js
import { createStyles, makeStyles }  from '@mui/styles';

const light = "#dedede" ;
const Primary_color = "rgb(247, 87, 87);";
const Secondary_color = "#f5f8f9";
const Event_color = " #c54041;"
const Law_color = "#b99769";
const Black_color = "#242424";
const Border_color = "#dedede";
const TextDarkLight = "#919194";
const Bg_dark = "#222328!important";
const Button_color ="#f75757!important"

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
    ".textWhite": {
        color:light
      },  
    ".TextDarkLight":{
        color:TextDarkLight
    },
    ".bg__dark":{
      backgroundColor:Bg_dark
    },    
    ".Button_color":{
      backgroundColor:Button_color
    },
    ".main__color":{
      color:Button_color
    },
    ".p-100":{
      padding:"100px 0;"
    },  
    "img" :{
      maxWidth:"100%!important",
      display:"block!important"
    },
    "a":{
      textDecoration:"none"
    },
    ".p-50":{
      padding:"50px 0;"
    }, 
    ".pt-30":{
      paddingTop:"30px"
    },
     
    ".pb-30":{
      paddingBottom:"30px"
    },
    ul:{
      listStyle:"none",
      paddingInlineStart:"0px"
    },
    address:{
      fontStyle:"normal"
    }

    }
  })
);

const GlobalStylesComp = () => {
  useStyles();

  return null;
};

export default GlobalStylesComp;