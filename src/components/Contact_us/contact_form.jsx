import React from 'react';

const ContactForm = () => {
    return (
        <div>
            <div className="container">
                <div className="row testing">
                    <div className="col-md-3">
                    <label  label for="" className="form-label">Nombre</label>
                      <input type="text" className="form-control" placeholder="First name"  />
                    </div>
                    <div className="col-md-3">
                    <label  label for="" className="form-label">correo</label>
                      <input type="text" className="form-control" placeholder="correo"  />
                    </div>
                </div>
                <div className="container test2">
                    <div className="col-md-6">
                        <label  label for="" className="form-label ">mensaje</label>
                        <textarea className="form-control altura" id=""></textarea>
                    </div>
                </div>
                <div className="container boton_mandar">
                 <button className="btn mandar">mandar</button>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
