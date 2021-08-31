import React from "react";
import Servicios from "./Servicios"
import Formulario from "./Formulario"

const Main = () => {
  return (
    <main className="contenedor sombra">
      <h2>Mis Servicios</h2>
      <div>
          <Servicios></Servicios>
          <Formulario/>
      </div>
    </main>
  );
};

export default Main;
