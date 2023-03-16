// En un archivo separado, crea una instancia de nodemailer y exporta esta instancia
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'confirmacionecomers@gmail.com',
    pass: 'vzqgwuaozhktiozj'
  }
});

module.exports = transporter;
