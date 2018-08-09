const sgMail = require('@sendgrid/mail');

module.exports = {
  sendMail: (email, subject, body) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: 'austinhardaway@gmail.com',
      from: email,
      subject: '[AH.SITE] ' + subject,
      text: body
    };
    sgMail.send(msg);
  }
}
