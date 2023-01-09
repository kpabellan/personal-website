const postmark = require('postmark')

const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

export default async function handler(request, response) {
  const { name, email, message } = request.body;

  try {
    // Information about the actual sender, which includes email address and name.
    const messageInfo = `\n---\n>>>From: ${email}\n>>>Name: ${name}`;

    // Send email using Postmark API.
    const postmarkResponse = await client.sendEmail({
      'From': process.env.POSTMARK_FROM_EMAIL,
      'To': process.env.POSTMARK_TO_EMAIL,
      'Subject': 'New message from kpabellan.com',
      'TextBody': message + messageInfo,
      'MessageStream': 'outbound'
    });

    // Check if the email was sent without any issues.
    if (!postmarkResponse.ErrorCode) {
      response.status(200).send('Message sent successfully.');
    } else {
      response.status(400).send('Message not sent, please try again later.');
    }
  } catch (error) {
    response.status(400).send('Message not sent, please try again later.');
  }
}