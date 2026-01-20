const nodemailer = require('nodemailer');

let transporter = null;

try {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  transporter.verify((error, success) => {
    if (error) {
      console.log('❌ Email service error:', error.message);
      console.log('⚠️  Email features will be disabled');
    } else {
      console.log('📧 Email service configured and verified');
    }
  });
} catch (error) {
  console.log('❌ Email setup error:', error.message);
  console.log('⚠️  Email features will be disabled');
}

module.exports = transporter;
