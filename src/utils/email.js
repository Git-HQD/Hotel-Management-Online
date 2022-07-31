require('dotenv').config();
const nodemailer = require('nodemailer');
const config = require('../config/email');

const sendEmailResetPwd = async (dataSend) => {
  try {
    const transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: false,
      auth: {
        user: config.app,
        pass: config.app_password,
      },
    });

    await transporter.sendMail({
      from: config.from_addess,
      to: dataSend.reciverEmail,
      subject: 'Email Verification',
      html: `
        <h2>Hello ${dataSend.username} !</h2>
        <h3>Password reset of you</h3>
        <div><b>${dataSend.reciverEmail}</div></b>
        <div>
          <a href=${dataSend.redirectLink} target="_blank">Click Here</a>
        </div>
        `,
    });

    console.log('email sent sucessfully');
  } catch (error) {
    console.log(error, 'email not sent');
  }
};

module.exports = {
  sendEmailResetPwd,
};
