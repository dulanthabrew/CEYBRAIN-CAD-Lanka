import { Resend } from 'resend';

// Server-side only — this file never runs in the browser.
// API keys are read from environment variables, never hardcoded.
// Reused by both /contact and the home page contact section.

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder_for_build');

function validateFields({ name, email, message }) {
  const errors = [];
  if (!name || name.trim().length < 2) errors.push('Full name is required (minimum 2 characters).');
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('A valid email address is required.');
  if (!message || message.trim().length < 10) errors.push('Message is required (minimum 10 characters).');
  return errors;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, company, email, message } = body;

    // Validate
    const validationErrors = validateFields({ name, email, message });
    if (validationErrors.length > 0) {
      return Response.json({ error: validationErrors.join(' ') }, { status: 400 });
    }

    const toEmail = process.env.CONTACT_EMAIL_TO || 'rangana@cadlankaeng.com';
    const fromEmail = process.env.CONTACT_EMAIL_FROM || 'noreply@cadlankaeng.com';

    // Send email via Resend (server-side only)
    const { error } = await resend.emails.send({
      from: `CAD Lanka Contact Form <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `New Project Inquiry from ${name}${company ? ` (${company})` : ''}`,
      html: `
        <div style="font-family: 'JetBrains Mono', monospace; max-width: 600px; margin: 0 auto;">
          <div style="background: #051625; padding: 24px; color: white;">
            <h1 style="font-size: 18px; font-weight: 700; letter-spacing: -0.02em; margin: 0;">
              CAD LANKA ENGINEERING
            </h1>
            <p style="font-size: 12px; color: #8292a5; margin: 4px 0 0;">
              REF: CL-CI-${Date.now().toString(36).toUpperCase()}
            </p>
          </div>
          <div style="background: #ffffff; border: 1px solid #c4c6cc; padding: 32px;">
            <h2 style="color: #051625; font-size: 16px; border-bottom: 1px solid #e0e3e5; padding-bottom: 16px; margin-top: 0;">
              New Project Inquiry
            </h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #43474c;">
              <tr>
                <td style="padding: 8px 0; font-size: 11px; color: #74777c; letter-spacing: 0.05em; text-transform: uppercase; width: 120px;">Full Name</td>
                <td style="padding: 8px 0; color: #191c1e; font-weight: 600;">${escapeHtml(name)}</td>
              </tr>
              ${company ? `<tr>
                <td style="padding: 8px 0; font-size: 11px; color: #74777c; letter-spacing: 0.05em; text-transform: uppercase;">Company</td>
                <td style="padding: 8px 0; color: #191c1e;">${escapeHtml(company)}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 8px 0; font-size: 11px; color: #74777c; letter-spacing: 0.05em; text-transform: uppercase;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #a04100;">${escapeHtml(email)}</a></td>
              </tr>
            </table>
            <div style="background: #f2f4f6; border-left: 2px solid #fe6b00; padding: 16px; margin-top: 24px;">
              <div style="font-size: 11px; color: #74777c; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 8px;">Message</div>
              <p style="margin: 0; color: #191c1e; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
            </div>
          </div>
          <div style="background: #f2f4f6; padding: 16px; font-size: 11px; color: #74777c; border: 1px solid #c4c6cc; border-top: none;">
            Received: ${new Date().toISOString()} · CAD Lanka Engineering Contact System
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('[Contact API] Resend error:', error);
      return Response.json({ error: 'Failed to send message. Please try again or email us directly.' }, { status: 500 });
    }

    return Response.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('[Contact API] Unexpected error:', err);
    return Response.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}

/** Escape HTML special chars to prevent email injection */
function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
