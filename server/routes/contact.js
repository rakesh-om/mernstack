const express = require('express');
const router = express.Router();
require('dotenv').config();
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

router.post('/contactroute', async (req, res) => {
    console.log("Called")
  const { name, email, phone, service, timeline, projectDetails } = req.body;

  try {
    const response = await resend.emails.send({
      from: email,
      to: 'rakeshbannagare014@gmail.com', // ✅ Your real email
      subject: `New Contact from ${name}`,
      html: `
        <h3>New Inquiry Received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Project Details:</strong><br>${projectDetails}</p>
      `
    });

    console.log('Email sent:', response);
    res.status(200).json({ message: 'Message sent successfully!' });

  } catch (error) {
    console.error('Resend email error:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

module.exports = router;
