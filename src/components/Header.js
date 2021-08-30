import React, { Fragment } from "react";
import {v4 as uuidv4} from 'uuid';
import { Button } from '@material-ui/core';

const Header = () => {
  const homeInfo = {
    lead: "Robin Angel Romero Cordero",
    profession: "Developer",
    opciones: ["Inicio", "Sobre mi", "Clientes", "Proyectos"],
  };

  let {opciones} = homeInfo

  return (
    <Fragment>
      <header>
        <Button>
          Robin Angel Romero <span>Freelancer</span>
        </Button>
      </header>
      <div >
        <nav >
          {opciones.map((opcion) => (
            <a key={uuidv4()}>{`${opcion}`}</a>
          ))}
        </nav>
      </div>
    </Fragment>
  );
};

export default Header;
