import React from "react";

const Space = () => {
  return (
    <div>
      <div className="container space">
        <h2 className="Espacio ">Esta es tu tienda</h2>
        <p className="Espacio2 ">
        Porque comprar en otras tiendas, cuando puedes comprar en esta ;)
        </p>
        <hr />
        <div className="container Espacio3">
          <div className="row ">
            <div className="col-lg-6">
              <p>  Comprar en nuestra tienda online es la mejor opción para ti, porque te ofrecemos una amplia selección de productos de alta calidad a precios competitivos. Además, nuestro proceso de apartados es fácil, rápido y seguro. 
            Nos esforzamos por brindarte una experiencia de compra excepcional y un servicio al cliente amigable y profesional. ¡No esperes más y haz tu compra con nosotros hoy mismo!</p>
              <br />
              <br />
            </div>
            <div className="col-lg-6">
              <p>Me podría matar poniendo texto default en esta parte, pero honestamente ocupo rellenar este espacio, 
                por favor compra en nuestra tienda, pronto Amazon o mercado libre se quedarán detrás de nosotros,
                nuestro equipo de desarrollo, programadores y vendedores te lo agradecerían mucho.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Space;