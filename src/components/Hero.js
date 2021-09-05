import { Box, card, CardMedia, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../imagenes/Hero.png";


const useStyles = makeStyles((theme) => ({
  hero: {
    position: "relative",
    // zIndex: '3',
    height: "55rem",
    // filter: "drop-shadow(-53px 0px 44px #000000)",
    // backgroundImage: `url(${Image})`,
    // backgroundSize: 'cover'

    backgroundImage: "radial-gradient(at top,#545755, #000000)",
  },
  contenidoHero: {
    display: 'flex',
    position: "absolute",
    zIndex: "2",
    alignItems: "center",
    // justifyContent: "flex-start",
    backgroundImage: "radial-gradient(at top,#545755, #000000)",
    // backgroundColor: "green",
    width: "100%",
    height: "100%",
    color: "#FFFFFF",
    clipPath: "polygon(55% 0%, 100% 0, 100% 100%, 15% 100%)",
    // boxShadow: '-67px 0px 38px -17px rgba(0,0,0,0.75)',
    // borderRadius: '100% 0% 0% 58% / 100% 10% 10% 0% '
    // clipPath: 'ellipse(79% 97% at 100% 97%)',
  },

  curvaSombra: {
    position: "absolute",
    zIndex: "1",
    height: "32rem",
    width: "35rem",
    left: "36rem",
    top: "233px",
    backgroundImage: "radial-gradient(at top,#545755, #000000)",
    borderRadius: "100% 0% 0% 58% / 100% 10% 10% 0%",
    boxShadow: "-104px -26px 90px 21px rgb(0 0 0 / 75%)",
    // backgroundColor: 'red'
  },

  renglon: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    backgroundColor: '#2E4D4D',
    height: "10rem",
    width: "100%",

  },
  titulo: {
    margin: "1rem 15rem",
    color: theme.palette.other.claro,
    textTransform: "capitalize",
    // fontWeight: "bold",
  },
  subtitulo: {
    margin: "1rem 15.5rem",
    color: theme.palette.other.claro,
    textTransform: "capitalize",
  },
  span: {
    margin: "1rem 2rem",
    color: theme.palette.primary.contrastText,
    textTransform: "capitalize",
    fontWeight: "bold",
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <Box className={classes.hero}>
      <Box className={classes.curvaSombra}></Box>
      <Box className={classes.contenidoHero}>
        <Box className={classes.renglon}>
        {/* <Typography variant="h3" color="inherit" classes={{colorInherit: classes.titulo}}>Wow Services S.A | <Typography className={classes.span} variant="span" color="initial">Conoce Tus Derechos</Typography></Typography> */}
        <Typography variant="h3" color="inherit" classes={{colorInherit: classes.titulo}}>Robin Angel Romero Cordero</Typography>
        {/* <Typography variant="h5" color="inherit" classes={{colorInherit: classes.subtitulo } }>Aprende lo necesario sobre tus cajas de compensacion</Typography> */}
        <Typography variant="h4" color="inherit" classes={{colorInherit: classes.subtitulo } }>Chemical Engineer | Full-Stack Developer</Typography>

        </Box>
        
        {/* <Typography variant="h5" color="inherit" classes={{colorInherit: classes.subtitulo } }>Aprende lo necesario sobre tus cajas de compensacion</Typography> */}
      </Box>
    </Box>
  );
};

export default Hero;
