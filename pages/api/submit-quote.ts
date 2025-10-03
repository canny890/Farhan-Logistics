import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type FormData = {
  name: string;
  email: string;
  phone: string;
  pickup: string;
  dropoff: string;
  shipmentType: string;
  weight: string;
  shipmentDate: string;
  details: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const formData: FormData = req.body;

    // Log the form submission
    console.log('Form submission received:', formData);
    
    // Create a test account (for development only)
    const testAccount = await nodemailer.createTestAccount();
    
    // Create a transporter using the test account
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    // Email content
    const mailOptions = {
      from: `"${formData.name}" <${formData.email}>`,
      to: 'your-email@example.com', // Replace with your email
      subject: `New Quote Request from ${formData.name}`,
      text: `
        New Quote Request:
        -----------------
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Pickup: ${formData.pickup}
        Drop-off: ${formData.dropoff}
        Shipment Type: ${formData.shipmentType}
        Weight/Volume: ${formData.weight || 'Not specified'}
        Preferred Date: ${formData.shipmentDate}
        Additional Details: ${formData.details || 'None'}
      `,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Pickup:</strong> ${formData.pickup}</p>
        <p><strong>Drop-off:</strong> ${formData.dropoff}</p>
        <p><strong>Shipment Type:</strong> ${formData.shipmentType}</p>
        <p><strong>Weight/Volume:</strong> ${formData.weight || 'Not specified'}</p>
        <p><strong>Preferred Date:</strong> ${formData.shipmentDate}</p>
        <p><strong>Additional Details:</strong> ${formData.details || 'None'}</p>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    
    // Log the email preview URL (for development)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    return res.status(200).json({ 
      success: true,
      message: 'Form submitted successfully',
      previewUrl: nodemailer.getTestMessageUrl(info) // For testing
    });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return res.status(500).json({ 
      success: false,
      message: 'Error processing your request',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
