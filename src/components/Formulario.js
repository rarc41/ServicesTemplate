import React from "react";

const Formulario = () => {
  return (
    <section className="contacto-form">
      <h2>Contacto</h2>

      <form action="" className="formulario">
        <fieldset>
          <legend>Contactame llenando todos los campos</legend>
          <div className="contenedor-campos">
            <div className="campo">
              <label htmlFor="">Nombre</label>
              <input className="input-text" type="text" placeholder="Tu Nombre" />
            </div>

            <div className="campo">
              <label htmlFor="">Telefono</label>
              <input className="input-text" type="tel" placeholder="Tu telefono" />
            </div>

            <div className="campo">
              <label htmlFor="">Correo</label>
              <input className="input-text" type="email" placeholder="Tu correo" />
            </div>

            <div className="campo">
              <label htmlFor="">Mensaje</label>
              <textarea
                className="input-text"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="campo">
              <input className="boton" type="submit" value="Enviar" />
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default Formulario;
