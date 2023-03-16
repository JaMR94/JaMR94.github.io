const transporter = require('./transporter'); // Importa la instancia única de nodemailer

async function enviarCorreo() {
  try {
    const info = await transporter.sendMail({
      from: 'confirmacionecomers@gmail.com',
      to: 'jaborges666@gmail.com',
      subject: 'Prueba de correo electrónico',
      text: 'Este es un correo electrónico de prueba enviado con Nodemailer.'
    });

    console.log('Mensaje enviado: %s', info.messageId);
  } catch (error) {
    console.error(error);
  }
}

enviarCorreo();
