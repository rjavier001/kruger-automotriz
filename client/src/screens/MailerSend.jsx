import { Mailer } from "nodemailer-react";

const MailerSend = () => {
  const mailerConfig = {
    transport: {
      host: "smtp.ethereal.email",
      port: 587,
      secure: true,
      auth: {
        user: "arch.leffler23@ethereal.email",
        pass: "TxeUQDTTmxPyQMuXDt",
      },
    },
    defaults: {
      from: { name: "eddyjav", address: "edd@gmail.dev" },
    },
  };

  const WelcomeEmail = ({ firstName }) => ({
    subject: `👋 ${firstName}`,
    body: (
      <div>
        <p>Hello {firstName}!</p>
        <p>Hope you'll enjoy the package!</p>
      </div>
    ),
  });

  /** Record of all emails that will be available */
  const emailsList = {
    WelcomeEmail,
  };

  /** Instance of mailer to export */
  const mailer = Mailer(mailerConfig, emailsList);

  /**
   * Send mail in your application, by passing:
   * - Your email template name: key of the email in the record you've provided.
   * - The props of your email component
   * - The options of email (to, from, attachments, etc.) @see https://nodemailer.com/message/
   */

  /** A first email sent */
  mailer.send(
    "WelcomeEmail",
    {
      firstName: "Mathieu",
      brand: "MyWebsite",
      newAccount: true,
      password: Math.random().toString(36).substring(7),
    },
    {
      to: "arch.leffler23@ethereal.email",
      attachments: [{ content: "bar", filename: "foo.txt" }],
    }
  );

  /** A second email sent */
  // await mailer.send('ReminderEmail', {
  //   firstName: 'Mathieu',
  //   task: 'Write package documentation!',
  // }, {
  //   to: 'foo@bar.fr',
  // })

  return <div>MailerSend</div>;
};

export default MailerSend;
