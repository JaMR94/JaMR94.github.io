import React from "react";
import Link from "next/link";

const inicio = () => {
  return (
    <div>
      <div className=" container dream ">
        <h1 className="text-center font1">E-commerce Unid</h1>
        <p className="text-center font2">
          ¡Donde encontrarás lo que necesites!
        </p>

        <div className="mid">
        <Link className="btn" id="boton_inicio" href="/Productos" role="button">EXPLORA</Link>

        </div>
      </div>
    </div>
  );
};

export default inicio;
