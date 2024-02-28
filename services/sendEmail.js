import sendGrid from '@sendgrid/mail';

sendGrid.setApiKey( import.meta.env.SENDGRID_API_KEY );

export const sendEmailBySendgrid = async (data) => {
  const name = data.get('name');
  const email = data.get('email');
  const phone = data.get('phone');
  const message = data.get('message');
  const msg = {
    to: 'camilo@dataextract.co', // Change to your recipient
    from: 'hi@dataextract.co',
    subject: `Contact form submission from ${name}`,
    text: `Cliente: ${name}
    Email: ${email}
    Phone: ${phone}
    Message: ${message}`,
  }
  await sendGrid.send(msg).then(() => {
    console.log('Email sent')
  }).catch((error) => {
    console.error(error)
  });
}

