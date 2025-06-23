import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, company, message } = req.body;
    
    // 入力値の検証
    if (!name || !email || !message) {
      return res.status(400).json({ message: '全ての項目を入力してください' });
    }

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.RESEND_TO_EMAIL,
      subject: `【お問い合わせ】${name}様より`,
      html: `
        <h2>新しいお問い合わせが届きました</h2>
        <p><strong>お名前：</strong> ${name}</p>
        <p><strong>メールアドレス：</strong> ${email}</p>
        <p><strong>会社名：</strong> ${company}</p>
        <p><strong>メッセージ：</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    });

    if (error) {
      return res.status(400).json({ error });
    }

    res.status(200).json({ message: 'メールが送信されました' });
  } catch (error) {
    res.status(500).json({ error: 'メール送信に失敗しました' });
  }
} 