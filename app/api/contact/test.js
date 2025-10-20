import { Resend } from "resend";

const resend = new Resend("re_Ccwtpyh3_5keSo6UTURfuAJd25z9hDduL");

const sanitizedData = {
  name: "John Doe",
  email: "mbabs3000@gmail.com",
  phone: "+1234567890",
  service: "Web Development",
  message: "I'm interested in your web development services.",
};

(async function () {
  const { data, error } = await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: "mbabiker13@gmail.com",
    replyTo: sanitizedData.email,
    subject: `New Contact: ${sanitizedData.service}`,
    html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                      color: white; padding: 30px; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #4a5568; margin-bottom: 5px; }
            .value { color: #1a202c; }
            .footer { text-align: center; margin-top: 20px; color: #718096; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${sanitizedData.name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${sanitizedData.email}">${
                  sanitizedData.email
                }</a></div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value"><a href="tel:${sanitizedData.phone}">${
                  sanitizedData.phone
                }</a></div>
              </div>
              <div class="field">
                <div class="label">Service Interested In:</div>
                <div class="value">${sanitizedData.service}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${sanitizedData.message.replace(
                  /\n/g,
                  "<br>"
                )}</div>
              </div>
            </div>
            <div class="footer">
              Submitted on ${new Date().toLocaleString("en-AU", {
                timeZone: "Australia/Melbourne",
                dateStyle: "full",
                timeStyle: "short",
              })}
            </div>
          </div>
        </body>
        </html>
      `,
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();
