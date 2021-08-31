import React, { Fragment, useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import {
  Typography,
  Grid,
  Tab,
  Tabs,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    fontSize: 25,
    textTransform: "capitalize",
  },
  navegacion: {
    display: "flex",
    marginTop: "2rem",
    justifyContent: "space-evenly",
    backgroundColor: "#3C5FC7",
  },

  pestañas: {
    color: "white",
    fontWeight: "bold",
    opacity: 1,
  },
  nav_bar: {
    backgroundColor: theme.palette.primary.main,
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
      <header>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography className={classes.root}>{homeInfo.lead}</Typography>

          <Typography>{homeInfo.profession}</Typography>
        </Grid>
      </header>
      <div
      // className={classes.navegacion}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          className={classes.nav_bar}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
        >
          {opciones.map((opcion) => (
            <Tab key={opciones.indexOf(opcion)} label={opcion}></Tab>
          ))}
        </Tabs>
      </div>
    </Fragment>
  );
};

export default Header;
