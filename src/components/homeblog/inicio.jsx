import React from "react";
import Link from "next/link";

const inicio = () => {
  return (
    <div>
      <div className=" container dream ">
        <h1 className="text-center font1">Build your dream store</h1>
        <p className="text-center font2">
          A simple Webflow Ecommerce template to get you started.
        </p>

        <div className="mid">
          <Link href="/Productos">
          <button  id="boton_inicio" type="button">
            EXPLORE
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default inicio;
