import React from "react";
import Link from "next/link";

const inicio = () => {
  return (
    <div>
      <div className=" container dream ">
        <h1 className="text-center font1">e-commerce Unid</h1>
        <p className="text-center font2">
          donde encontraras lo que nececites
        </p>

        <div className="mid">
        <a className="btn" id="boton_inicio" href="/Productos" role="button">EXPLORA</a>

        </div>
      </div>
    </div>
  );
};

export default inicio;
