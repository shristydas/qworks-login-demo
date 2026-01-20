const getPasswordRecoveryEmail = (email, password) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #97144D 0%, #6B0E36 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .password-box { background: white; border: 3px solid #97144D; border-radius: 10px; padding: 20px; margin: 20px 0; text-align: center; }
        .password { font-size: 24px; font-weight: bold; color: #97144D; letter-spacing: 2px; }
        .button { display: inline-block; background: #97144D; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
        .warning { background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🏦 Axis Bank</h1>
          <p>Password Recovery</p>
        </div>
        <div class="content">
          <h2>Hello,</h2>
          <p>You requested to recover your password for your Axis Bank account.</p>

          <p><strong>Your Email:</strong> ${email}</p>

          <div class="password-box">
            <p style="margin: 0; font-size: 14px; color: #666;">Your Password:</p>
            <p class="password">${password}</p>
          </div>

          <div style="text-align: center;">
            <a href="http://localhost:3000" class="button">Login Now</a>
          </div>

          <div class="warning">
            <strong>⚠️ Security Notice:</strong>
            <p>For your security, we recommend changing your password immediately after logging in.</p>
            <p>If you did not request this password recovery, please contact our support team immediately.</p>
          </div>

          <p>Thank you for banking with Axis Bank!</p>
        </div>
        <div class="footer">
          <p>© ${new Date().getFullYear()} Axis Bank. All rights reserved.</p>
          <p>This is an automated email. Please do not reply.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

module.exports = { getPasswordRecoveryEmail };
