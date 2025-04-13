const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  const { name, email, projectDetails } = req.body;
  console.log('📥 Received contact form data:', req.body);

  if (!name || !email || !projectDetails) {
    console.log('❌ Missing required fields');
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  transporter.verify((error, success) => {
    if (error) {
      console.error('🚫 Email transporter failed:', error);
    } else {
      console.log('✅ Email transporter ready');
    }
  });

  const mailOptions = {
    from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.OWNER_EMAIL,
    subject: '📩 New Contact Form Submission',
    text: `
New contact form submission:

Name: ${name}
Email: ${email}
Message: ${projectDetails}
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error('🚨 Error sending email:', err);
    res.status(500).json({ error: 'Email failed to send' });
  }
});

module.exports = router;
