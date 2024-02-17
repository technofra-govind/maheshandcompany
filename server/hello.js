const nodemailer = require("nodemailer");
  module.exports.sendEmail = async (optins) => {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", // Replace with your SMTP server address
        port: 587, // Replace with the appropriate port number
        secure: false, // Set to true if your SMTP server requires SSL/TLS
        service: "gmail",
        auth: {
          user: 'dev@handsintechnology.com',
          pass: 'Hitdev@2022'
      }
      });
      const mailOptions = {
        from: "dev@handsintechnology.com", // Replace with your email address
        to: optins?.email || "singh.anand9451@gmail.com", // Replace with recipient email address
        subject: optins?.subject || "Test Email",
        text: "Hello, this is a test email!",
        html: optins?.text || "<p>Hello, this is a test email!</p>",
      };
      await transporter
        .sendMail(mailOptions)
        .then((data) => {
          console.log("Email Send Successfully", data);
        })
        .catch((err) => {
          console.log("Error >>>>>>", err);
        });
    } catch (err) {
      console.log(err);
    }
  };
  
  module.exports.sendEmail = async (optins) => {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", // Replace with your SMTP server address
        port: 587, // Replace with the appropriate port number
        secure: false, // Set to true if your SMTP server requires SSL/TLS
        service: "gmail",
        auth: {
          user: '',
          pass: ''
      }
      });
      const mailOptions = {
        from: "dev@handsintechnology.com", // Replace with your email address
        to: optins?.email || "singh.anand9451@gmail.com", // Replace with recipient email address
        subject: optins?.subject || "Test Email",
        text: "Hello, this is a test email!",
        html: optins?.text || "<p>Hello, this is a test email!</p>",
      };
      await transporter
        .sendMail(mailOptions)
        .then((data) => {
          console.log("Email Send Successfully", data);
        })
        .catch((err) => {
          console.log("Error >>>>>>", err);
        });
    } catch (err) {
      console.log(err);
    }
  };
