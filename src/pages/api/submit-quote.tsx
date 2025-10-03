import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

// Define the expected form data structure
interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  pickup: string;
  dropoff: string;
  shipmentType: string;
  weight?: string;
  shipmentDate: string;
  details?: string;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const data: QuoteFormData = req.body;

  // Basic validation
  if (!data.name || !data.email || !data.phone || !data.pickup || !data.dropoff || !data.shipmentType || !data.shipmentDate) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // --- IMPORTANT: Securely configure your email transport --- 
  // Use environment variables to store your email credentials.
  // Do NOT hardcode them here.
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST, // e.g., 'smtp.gmail.com'
    port: parseInt(process.env.EMAIL_PORT || '587', 10),
    secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password or app-specific password
    },
  });

  // Email content
  const mailOptions = {
    from: `"Farhan Logistics" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO, // The email address that will receive the quote requests
    subject: `New Quote Request from ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #1E5FB4;">New Logistics Quote Request</h2>
        <p>You have received a new quote request with the following details:</p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="background-color: #f4f4f4;">
            <td style="padding: 8px; border: 1px solid #ddd; width: 30%;"><strong>Name:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.email}</td>
          </tr>
          <tr style="background-color: #f4f4f4;">
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Pickup Location:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.pickup}</td>
          </tr>
          <tr style="background-color: #f4f4f4;">
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Drop-off Location:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.dropoff}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Shipment Type:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.shipmentType}</td>
          </tr>
          <tr style="background-color: #f4f4f4;">
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Preferred Date:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.shipmentDate}</td>
          </tr>
          ${data.weight ? `
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Weight/Volume:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.weight}</td>
          </tr>` : ''}
          ${data.details ? `
          <tr style="background-color: #f4f4f4;">
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Additional Details:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${data.details}</td>
          </tr>` : ''}
        </table>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Quote request submitted successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'An error occurred while sending the email.' });
  }
}

