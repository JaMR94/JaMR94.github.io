import React from 'react';

const ContactForm = () => {
    return (
        <div>
            <div className="container">
                <div className="row testing">
                    <div className="col-sm-3">
                      <label  label for="" className="form-label">Nombre</label>
                      <input type="text" className="form-control" placeholder="Nombre"  />
                    </div>
                <div className="col-sm-3">
                      <label  label for="" className="form-label">Correo</label>
                      <input type="text" className="form-control" placeholder="Correo"  />
                    </div>
                </div>
                <div className="container test2">
                    <div className="row">
                         <div className="col-sm-3">
                            <label  label for="" className="form-label ">Mensaje</label>
                            <textarea className="form-control altura" placeholder='Escribenos tus dudas/sugerencias'></textarea>
                        </div>
                    </div>

                </div>
                <div className="container boton_mandar">
                 <button className="btn" id='mandar'>mandar</button>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
