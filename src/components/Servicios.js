import React, {Fragment} from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import Iconos from "./Iconos";

const Servicios = () => {
  const servicios = [
    { id: 1, nombre: "Diseño Web", iconos: [], paragraph: "" },
    { id: 2, nombre: "Aplicaciones Web", iconos: [], paragraph: "" },
    { id: 3, nombre: "E-Commerce", iconos: [], paragraph: "" },
  ];

  return (
    <Fragment>
      <div className="servicios">
      {servicios.map((servicio) => (
            <section key={servicio.id} className="servicio">
                <h3>{servicio.nombre}</h3>
                <Iconos servicioId={servicio.id}></Iconos>
                <LoremIpsum p={1}></LoremIpsum>
            </section>
          ))}
      </div>
    </Fragment>
  );
};

export default Servicios;
