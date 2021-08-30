import React, { Fragment } from "react";
import {v4 as uuidv4} from 'uuid';

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
        <h1 className="titulo">
          Robin Angel Romero <span>Freelancer</span>
        </h1>
      </header>
      <div className="nav-bg">
        <nav className="navegacion-principal">
          {opciones.map((opcion) => (
            <a key={uuidv4()}>{`${opcion}`}</a>
          ))}
        </nav>
      </div>
    </Fragment>
  );
};

export default Header;
