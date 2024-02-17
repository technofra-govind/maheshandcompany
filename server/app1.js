const express = require('express');
const nodemailer = require("nodemailer");
const app = express();
const cors = require('cors')
app.use(cors())
app.use(express.json());

// Define the sendEmail function outside the route handler
const sendEmail = async (options) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      service: "gmail",
      auth: {
        user: 'govind@technofra.com',
        pass: 'Mumbai#1021'
      }
    });

    const mailOptions = {
      from: "govind@technofra.com",
      to: options?.email || "technofracompany@gmail.com",
      subject: options?.subject || "Test Email",
      text: "Hello, this is a test email!",
      html: options?.text || "<p>Hello, this is a test email!</p>",
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully", info);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // Rethrow the error to handle it in the route handler
  }
};

// Define the route handler for handling form submissions
app.post('/submit-form', async (req, res) => {
  const { firstname, lastname, number, email, message } = req.body;

  try {
    // Call the sendEmail function with the appropriate options
    await sendEmail({
      email,
      subject: "New Contact Form Submission",
      text: `First Name: ${firstname}\nLast Name: ${lastname}\nNumber: ${number}\nEmail: ${email}\nMessage: ${message}`,
    });

    // Send success response
    res.status(200).json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    // Send error response
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
