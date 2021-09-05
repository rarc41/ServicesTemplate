import React, { Fragment, useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import { Typography, Grid, Tab, Tabs } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import transitions from "@material-ui/core/styles/transitions";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    fontSize: 25,
    textTransform: "capitalize",
  },
  navegacion: {
    backgroundColor: theme.palette.primary.main,
    // marginTop: "2rem",
  },

  display: {
    display: 'flex',
    justifyContent: 'center',
  },

  tab: {
    transition: '0.5s',
    color: 'white',
    "&:hover": {
      backgroundColor: 'rgb(7, 177, 77, 0.42)',
      transition: '0.5s'
    }
  },
  
}));

const Header = () => {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const homeInfo = {
    lead: "Robin Angel Romero Cordero",
    profession: "Developer",
    opciones: ["Inicio", "Sobre mi", "Clientes", "Proyectos"],
  };

  let { opciones } = homeInfo;

  return (
    <Fragment>
      {/* <header>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography className={classes.root}>{homeInfo.lead}</Typography>

          <Typography>{homeInfo.profession}</Typography>
        </Grid>
      </header> */}
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.navegacion}
        classes={{flexContainer: classes.display}}
        // style={flexContainer}
        indicatorColor="secondary"
        textColor="secondary"
      >
        {opciones.map((opcion) => (
          <Tab className={classes.tab} classes={{textColorSecondary: classes.tab}} key={opciones.indexOf(opcion)} label={opcion}></Tab>
        ))}
      </Tabs>
    </Fragment>
  );
};

export default Header;
