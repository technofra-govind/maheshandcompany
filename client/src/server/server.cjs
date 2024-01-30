// server/server.cjs
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const corsOptions = {
  origin: 'http://localhost:5173', // Update this to match your React app's origin
  methods: 'POST',
  optionsSuccessStatus: 204,
};

app.post('/submit-form', cors(corsOptions), async (req, res) => {
  const { firstname, lastname, number, email, message } = req.body;

  try {
    // Send email to website owner
    const ownerEmail = 'govind@technofra.com'; // Replace with your email
    await sendEmail(ownerEmail, 'New Form Submission', `Name: ${firstname} ${lastname}\nPhone: ${number}\nEmail: ${email}\nMessage: ${message}`);

    // Send thank-you email to the user
    await sendEmail(email, 'Thank You for Your Submission', 'Thank you for submitting the form. We will get back to you soon.');

    res.status(200).send('Form submitted successfully.');
  } catch (error) {
    console.error('Error processing form submission:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

async function sendEmail(to, subject, text) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'govind@technofra.com',
      pass: 'Mumbai#1021',
    },
  });

  const mailOptions = {
    from: 'support@technofra.com',
    to,
    subject,
    text,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        console.log('Email sent: ' + info.response);
        resolve(info);
      }
    });
  });
}
