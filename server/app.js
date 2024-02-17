const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});


app.post('/submit-form', async (req, res) => {
  const { firstname, lastname, number, email, message } = req.body;

  try {
    const mailOptions = {
      from: email, // Set the "from" field to the user's email address
      to: process.env.SMTP_EMAIL,
      subject: 'New Contact Form Submission',
      text: `First Name: ${firstname}\nLast Name: ${lastname}\n Number: ${number}\n Email: ${email}\nMessage: ${message}`,
    };

    // Send the email to notify you of the form submission
    await transporter.sendMail(mailOptions);

    // Send a thank you email to the user
    const thankYouMailOptions = {
      from: process.env.SMTP_EMAIL,
      to: email,
      subject: 'Thank You for Contacting Us',
      text: 'Thank you for contacting us. We have received your message and will get back to you as soon as possible.'
    };

    await transporter.sendMail(thankYouMailOptions);

    // Log the information about the sent email
    console.log('Email sent:', mailOptions);

    // Log other details
    console.log(firstname, lastname, number, email, message);
    console.log('Form submitted successfully');

    // Send success response
    res.status(200).json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    // Log and send error response if sending email fails
    console.error('Error submitting form:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
app.listen();







