const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gekogeko@gmail.com',
        pass: 'hogemaru'
    }
});

const mailOptions = {
  from: "gekogeko@gmail.com",
  to: "mogemoge@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!"
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.log(error);
    else console.log(`Email sent: ${info.response}`);
});