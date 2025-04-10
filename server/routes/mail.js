const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Your email address
    pass: 'your-email-password', // Your email password or app password
  },
});

// POST route to handle the contact form submission
app.post('/send-email', (req, res) => {
  const { name, email, phone, service, timeline, projectDetails } = req.body;

  const mailOptions = {
    from: email,
    to: 'rakeshbannagare014@gmail.com', // Rakesh's email address
    subject: 'New Contact Form Submission',
    text: `You have received a new message from your portfolio contact form.

    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Service of Interest: ${service}
    Timeline: ${timeline}
    Project Details: ${projectDetails}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email');
    }
    res.status(200).send('Email sent successfully');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
