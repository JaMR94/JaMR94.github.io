import React from 'react';

const Pagos = () => {
    return (
        <div>
             <div className="container formcontainer">
                <form>
                  {/* nombre tarjetas y cvv start */}
                  <div className="container">
                    <div className="row tuxteno">
                    <div className="col-md-4">
                      <label className="form-label">Nombre completo</label>
                      <input type="text" className="form-control" placeholder='Nombres y apellidos'  required />
                    </div>
                    <br />
                    <div className="col-md-3">
                      <label className="form-label">Tarjeta de credito/debito</label>
                      <input type="text" className="form-control" placeholder='Número de tarjeta' id="" required />
                    </div>
                    <div className="col-md-1 ">
                      <label  className="form-label">CVV</label>
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder='CVV'  required />
                      </div>
                    </div>
                    </div>
                  </div>
                  {/* nombre tarjetas y cvv end */}

                  {/* ciudad, estado y código postal start */}
                    <div className="container">
                      <div className="row tuxteno">
                        <div className="col-md-4">
                          <label className="form-label">Ciudad</label>
                          <input type="text" className="form-control" placeholder='Ciudad' required />
                        </div>
                         <div className="col-md-3">
                          <label className="form-label">Estado</label>
                          <select className="form-select" required>
                            <option selected disabled value>seleccione uno...</option>
                            <option>Aguascalientes</option>
                            <option>Baja California</option>
                            <option>Baja California Sur</option>
                            <option>Campeche</option>
                            <option>Chiapas</option>
                            <option>Chihuahua</option>
                            <option>Ciudad de México</option>
                            <option>Coahuila</option>
                            <option>Colima</option>
                            <option>Durango</option>
                            <option>Estado de México</option>
                            <option>Guanajuato</option>
                            <option>Guerrero</option>
                            <option>Hidalgo</option>
                            <option>Jalisco</option>
                            <option>Michoacán</option>
                            <option>Morelos</option>
                            <option>Nayarit</option>
                            <option>Nuevo León</option>
                            <option>Oaxaca</option>
                            <option>Puebla</option>
                            <option>Querétaro</option>
                            <option>Quintana Roo</option>
                            <option>San Luis Potosí</option>
                            <option>Sinaloa</option>
                            <option>Sonora</option>
                            <option>Tabasco</option>
                            <option>Tamaulipas</option>
                            <option>Tlaxcala</option>
                            <option>Veracruz</option>
                            <option>Yucatán </option>
                            <option>Zacatecas</option> 
                          </select>
                        </div>
                        <div className="col-md-1 ">
                          <label  className="form-label">C.P</label>
                          <input type="text" className="form-control" placeholder='CP' required />
                        </div>
                      </div>
                    </div>
                  {/* ciudad, estado y código postal end */}

                  {/* calle, numero, colonia end */}
                  <div className="container">
                    <div className="row tuxteno">
                      <div className="col-md-4">
                        <label className="form-label">Calle</label>
                        <input type="text" className="form-control" placeholder='Calle'  required />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">Colonia</label>
                      <input type="text" className="form-control" placeholder='Colonia' id="" required />
                    </div>
                    <div className="col-md-1 ">
                      <label  className="form-label">Num.casa</label>
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder='#'  required />
                      </div>
                    </div>
                    </div>
                  </div>
                  {/* calle, numero, colonia end */}

                  {/* Num. telefonico, casa/trabajo Start */}
                  <div className="container">
                    <div className="row tuxteno">
                      <div className="col-md-2">
                        <label className="form-label">num.Telefónico</label>
                        <input type="text" className="form-control" placeholder='num.Telefónico'  required />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Indicaciones</label>
                        <textarea type="text" className="form-control" placeholder='indicaciones adicionales' id="" required />
                      </div>
                    </div>
                  </div>
                  {/* Num. telefonico, casa/trabajo end */}
                  
                  <div className="pagar_now">
                    <button className="btn" id='boton_pago' type="submit">pagar </button>
                  </div>
                </form>

             </div>
        </div>
    );
}

export default Pagos;
