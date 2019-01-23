const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'hogehoge@gmail.com',
        pass: 'hogehoge'
    }
});

const mailOptions = {
  from: "hogehoge@gmail.com",
  to: "mogemoge@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!"
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.log(error);
    else console.log(`Email sent: ${info.response}`);
});