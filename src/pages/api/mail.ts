// import { NextApiRequest, NextApiResponse } from 'next';
// import mail from '@sendgrid/mail';
// mail.setApiKey(process.env.SENDGRID_API_KEY || '');

// type RequestData = {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// };
// type Data = {
//     message: string;
//   };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   if (req.method === 'POST') {
    
//     const payload = JSON.parse(req.body) as unknown as RequestData;

//     if (!payload) {
//       return res.status(400).json({ message: 'Message is required' });
//     }

//     const sendgridMessage = `
//         Name: ${payload.name}\r\n
//         Email: ${payload.email}\r\n
//         Subject: ${payload.subject}\r\n
//         Message: ${payload.message}
//     `;

//     const data = {
//         to: 'dillon_lee@live.com',
//         from: 'no-reply@rockyspoolcare.com',
//         subject: 'New Contact Submission',
//         text: sendgridMessage,
//         html: sendgridMessage.replace(/\r\n/g, '<br>')
//     }

//     try {
//         await mail.send(data);
//         return res.status(200).json({ message: 'Data received successfully' });
//     } catch (error) {
//         return res.status(500).json({ message: 'SendGrid Failed...' });
//     }
//   }

//   return res.status(405).json({ message: 'Method not allowed' });
// }