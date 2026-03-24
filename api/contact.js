export default async function handler(req, res) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, phone, eventDate, eventType, message } = req.body;
    const name = `${firstName || ''} ${lastName || ''}`.trim();
    const date = eventDate;
    const service = eventType;

    // Validate required fields
    if (!firstName || !email || !message) {
      return res.status(400).json({ error: 'Wymagane pola: imię, email i wiadomość' });
    }

    // Check for API key
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return res.status(500).json({ error: 'Błąd konfiguracji serwera' });
    }

    // Send email via Resend
    // Using resend.dev domain for testing (no domain verification needed)
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'Fiodorow Photography <kontakt@fiodorowphotography.pl>',
        to: ['fiodorowphotography@gmail.com'],
        reply_to: email,
        subject: `Nowe zapytanie od ${name} - Fiodorow Photography`,
        html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f0ece6;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0ece6;padding:40px 20px;">
    <tr><td align="center">
      <table width="580" cellpadding="0" cellspacing="0" style="max-width:580px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#2d2d2d;padding:32px 40px;text-align:center;">
            <p style="margin:0;color:#8b9a7a;font-size:10px;letter-spacing:4px;text-transform:uppercase;">Fiodorow Photography</p>
            <p style="margin:8px 0 0;color:#f0ece6;font-size:22px;font-weight:normal;letter-spacing:2px;">Nowe zapytanie</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#ffffff;padding:36px 40px;">

            <!-- Details -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #f0ece6;width:40%;color:#999;font-size:11px;letter-spacing:1px;text-transform:uppercase;font-family:Arial,sans-serif;">Imię i nazwisko</td>
                <td style="padding:12px 0;border-bottom:1px solid #f0ece6;color:#2d2d2d;font-size:14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #f0ece6;color:#999;font-size:11px;letter-spacing:1px;text-transform:uppercase;font-family:Arial,sans-serif;">Email</td>
                <td style="padding:12px 0;border-bottom:1px solid #f0ece6;"><a href="mailto:${email}" style="color:#8b9a7a;text-decoration:none;font-size:14px;">${email}</a></td>
              </tr>
              ${phone ? `<tr>
                <td style="padding:12px 0;border-bottom:1px solid #f0ece6;color:#999;font-size:11px;letter-spacing:1px;text-transform:uppercase;font-family:Arial,sans-serif;">Telefon</td>
                <td style="padding:12px 0;border-bottom:1px solid #f0ece6;"><a href="tel:${phone}" style="color:#8b9a7a;text-decoration:none;font-size:14px;">${phone}</a></td>
              </tr>` : ''}
              ${date ? `<tr>
                <td style="padding:12px 0;border-bottom:1px solid #f0ece6;color:#999;font-size:11px;letter-spacing:1px;text-transform:uppercase;font-family:Arial,sans-serif;">Planowana data</td>
                <td style="padding:12px 0;border-bottom:1px solid #f0ece6;color:#2d2d2d;font-size:14px;">${date}</td>
              </tr>` : ''}
              ${service ? `<tr>
                <td style="padding:12px 0;border-bottom:1px solid #f0ece6;color:#999;font-size:11px;letter-spacing:1px;text-transform:uppercase;font-family:Arial,sans-serif;">Rodzaj sesji</td>
                <td style="padding:12px 0;border-bottom:1px solid #f0ece6;color:#2d2d2d;font-size:14px;">${service}</td>
              </tr>` : ''}
            </table>

            <!-- Message -->
            <p style="margin:0 0 10px;color:#999;font-size:11px;letter-spacing:1px;text-transform:uppercase;font-family:Arial,sans-serif;">Wiadomość</p>
            <div style="background:#f9f7f4;border-left:3px solid #8b9a7a;padding:20px 24px;border-radius:2px;">
              <p style="margin:0;color:#2d2d2d;font-size:14px;line-height:1.8;white-space:pre-wrap;">${message}</p>
            </div>

            <!-- Reply CTA -->
            <div style="margin-top:32px;text-align:center;">
              <a href="mailto:${email}" style="display:inline-block;background:#2d2d2d;color:#ffffff;text-decoration:none;padding:12px 32px;font-size:11px;letter-spacing:2px;text-transform:uppercase;font-family:Arial,sans-serif;">Odpowiedz</a>
            </div>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 40px;text-align:center;">
            <p style="margin:0;color:#aaa;font-size:11px;font-family:Arial,sans-serif;">fiodorowphotography.pl</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
      })
    });

    const responseData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error('Resend API error:', responseData);
      return res.status(500).json({
        error: 'Błąd wysyłania wiadomości',
        details: responseData.message || 'Unknown error'
      });
    }

    return res.status(200).json({ success: true, message: 'Wiadomość została wysłana' });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Wystąpił błąd podczas wysyłania wiadomości' });
  }
}
