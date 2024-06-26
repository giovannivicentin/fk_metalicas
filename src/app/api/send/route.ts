import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const res = await request.json()
  const { name, email, subject, message } = res

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      reply_to: email,
      to: 'frank@frankmetalicas.com',
      subject: `De ${email}: ${subject}`,
      html: `<p>Email de: ${name} (${email})</p><p>${message}</p>`,
    })

    const hasId = data && data.data && data.data.id

    if (hasId) {
      return new Response(
        JSON.stringify({ success: true, id: data.data?.id }),
        {
          headers: { 'Content-Type': 'application/json' },
        },
      )
    } else {
      return new Response(JSON.stringify({ success: false }), {
        headers: { 'Content-Type': 'application/json' },
      })
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(JSON.stringify({ success: false }), {
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
