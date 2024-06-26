export default function handler(req, res) {
    if (req.method === 'POST') {
      // Extract data from the request body
      const { name, email, message } = req.body;
  
      // Perform form processing or send the data to an external service
      console.log('Form data:', { name, email, message });
  
      // Respond with a success message
      res.status(200).json({ message: 'Form submitted successfully' });
    } else {
      // Handle any non-POST requests
      res.status(405).json({ message: 'Method not allowed' });
    }
  }