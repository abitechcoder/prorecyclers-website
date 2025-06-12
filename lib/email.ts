import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export interface ContactFormData {
    name: string
    email: string
    phone?: string
    subject: string
    message: string
}

export async function sendContactEmail(data: ContactFormData) {
    try {
        const { name, email, phone, subject, message } = data

        const emailData = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>', // You'll need to verify this domain with Resend
            to: ["prorecyclersng@gmail.com"],
            subject: `Contact Form: ${subject}`,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { padding: 20px; text-align: center; background-color: #ffffff; }
            .logo { width: 150px; height: auto; margin: 0 auto; }
            .content { background-color: #f9f9f9; padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #22c55e; }
            .value { margin-top: 5px; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img class="logo" src="https://v0-recycle-company-website.vercel.app/images/logo.png" alt="Prorecylers Logo"/>
              <p><i>Recycling to Changing Life...</i></p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value">${phone || "Not provided"}</div>
              </div>
              <div class="field">
                <div class="label">Subject:</div>
                <div class="value">${subject}</div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value" style="white-space: pre-wrap;">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the Prorecyclers contact form.</p>
              <p>25, Opa Farm Street, Off Agelasho Ajara Vetho, Badagry, Lagos State</p>
            </div>
          </div>
        </body>
        </html>
      `,
            text: `
        New Contact Form Submission - Prorecyclers
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        Subject: ${subject}
        
        Message:
        ${message}
        
        ---
        This email was sent from the Prorecyclers contact form.
      `,
        })

        return { success: true, data: emailData }
    } catch (error) {
        console.error("Error sending email:", error)
        return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
    }
}
