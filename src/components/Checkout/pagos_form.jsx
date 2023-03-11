import React from 'react';

const Pagos = () => {
    return (
        <div>
             <div className="container formcontainer">
                <form className="row tuxteno">
                    <div className="col-md-6">
                      <label className="form-label">First name</label>
                      <input type="text" className="form-control" id=""  required />
                    </div>
                    <br />
                    <div className="col-md-3">
                      <label className="form-label">Tarjeta de credito/debito</label>
                      <input type="text" className="form-control" id="" required />
                    </div>
                    <div className="col-md-1 e">
                      <label  className="form-label">CVV</label>
                      <div className="input-group">
                        <input type="text" className="form-control" id=""  required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">ciudad</label>
                      <input type="text" className="form-control" id="" required />
                    </div>
                    <div className="col-md-3">
                      <label className="form-label">estado</label>
                      <select className="form-select" id="" required>
                        <option selected disabled value>Choose...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="col-md-1 e">
                      <label  className="form-label">Zip</label>
                      <input type="text" className="form-control" id="" required />
                    </div>
                </form>

                  <div className="pagar_now">
                    <button className="btn pagar_now" type="submit">pagar </button>
                  </div>
             </div>
        </div>
    );
}

export default Pagos;
