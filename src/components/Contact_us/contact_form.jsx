import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_uki5kuo', 'template_1cka8nj', form.current, 'mDNvQFAmlXDOGWJns')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div>
            <form action="" ref={form} onSubmit={sendEmail}>
                <div className="container">
                    <div className="row testing">
                        <div className="col-sm-3">
                            <label  className="form-label">Nombre</label>
                                <input type="text" className="form-control" placeholder="Nombre" name='user_name' />
                        </div>
                        <div className="col-sm-3">
                            <label lassName="form-label">Correo</label>
                                <input type="text" className="form-control" placeholder="Correo" name='user_email' />
                        </div>
                    </div>
                    <div className="container test2">
                        <div className="row">
                            <div className="col-sm-3">
                                <label  className="form-label ">Mensaje</label>
                                    <textarea className="form-control altura" placeholder='Escribenos tus dudas/sugerencias' name='message'></textarea>
                            </div>
                        </div>

                    </div>
                        <div className="container boton_mandar">
                            <button className="btn" type='submit' id='mandar'>mandar</button>
                            <input type="submit" value="Send"/>
                        </div>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;
