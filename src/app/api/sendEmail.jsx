
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'akashnive27@gmail.com',
                pass: 'Amala@444'
            }
        });

        var mailOptions = {
            from: 'akashnive27@gmail.com',
            to: 'amalapushpam41@gmail.com',
            subject: 'Sending Email using Node.js',
            text: 'That was easy!'
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Failed to send email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}