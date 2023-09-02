import SibApiV3Sdk from "sendinblue-api";

const sendinblue = new SibApiV3Sdk.TransactionalEmailsApi();

export async function sendEmail(toEmail, subject, htmlContent) {
  const defaultClient = sendinblue.apiClient;
  defaultClient.authentications["api-key"].apiKey =
    "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";
  const sendSmtpEmail = {
    to: [{ email: toEmail }],
    subject,
    htmlContent,
    sender: { name: "Dipesh", email: "jaswanidipesh8@gmail.com" },
  };

  try {
    const response = await sendinblue.sendTransacEmail(sendSmtpEmail);
    console.log("Email sent successfully!", response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
