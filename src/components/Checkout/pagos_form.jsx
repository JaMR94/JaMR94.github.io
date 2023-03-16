import React from 'react';

const Pagos = () => {
    return (
            <div>
             <div className="container formcontainer">
                <form>
                  <div className="container">
                    <div className="row tuxteno">
                      <div className="col-md-8">
                        <label className="form-label">Nombre completo</label>
                        <input type="text" className="form-control" placeholder='Nombres y apellidos'  required />
                      </div>
                      <br />
                    </div>
                  </div>
                  <div className="container">
                    <div className="row tuxteno">
                      <div className="col-md-4">
                        <label className="form-label">Ciudad</label>
                        <input type="text" className="form-control" placeholder='Ciudad' required />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">address</label>
                        <input type="text" className="form-control" placeholder='address' required />
                      </div>
                    </div>
                  </div>
                  <div className="pagar_now">
                    <button className="btn" id='boton_pago' type="submit">pagar </button>
                  </div>
                </form>
              </div>
            </div>
    );
}

export default Pagos;
