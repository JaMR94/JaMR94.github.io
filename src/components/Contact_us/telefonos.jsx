import React from 'react';

const Telefonos = () => {
    return (
        <div>
            <div className="container" id='telefonos_contenedor'>
                <div className="row" id='contactos'>
                    <div className="col-sm-2">
                       <p className='centrar'>Soporte</p>
                       <p className='number'>+61 8372 4662</p>
                       <p className='horario'>lun-dom, 9am-9pm </p>
                    </div>
                    <div className="col-sm-2">
                        <p className='centrar'>Marketing</p>
                        <p className='number'>+61 8372 4662</p>
                        <p className='horario'>lun-dom, 9am-9pm </p>
                    </div>
                    <div div className="col-sm-2">
                        <p className='centrar'>Linea de oficina</p>
                        <p className='number'>+61 8372 4662</p>
                        <p className='horario'>lun-dom, 9am-9pm</p>
                    </div>
                    <div div className="col-sm-2">
                        <p className='centrar'>Correo electrónico</p>
                        <p id='email'>support@store.com</p>
                        <p id='salto'>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Telefonos;
