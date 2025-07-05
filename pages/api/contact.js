import { Resend } from 'resend';

// 環境変数の存在を最初にチェック
console.log('=== Environment Variables Debug ===');
console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);
console.log('RESEND_API_KEY value:', process.env.RESEND_API_KEY ? 'Set (hidden)' : 'Not set');
console.log('RESEND_FROM_EMAIL:', process.env.RESEND_FROM_EMAIL);
console.log('RESEND_TO_EMAIL:', process.env.RESEND_TO_EMAIL);
console.log('All env vars containing RESEND:', Object.keys(process.env).filter(key => key.includes('RESEND')));

// 環境変数が設定されていない場合のエラーハンドリング
if (!process.env.RESEND_API_KEY) {
  console.error('RESEND_API_KEY is not set in environment variables');
}

const resend = new Resend(process.env.RESEND_API_KEY);

// レート制限やスパム対策（オプション）
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, company, phone, inquiryType, message } = req.body;
    
    // 入力値の検証強化
    if (!name || !email || !inquiryType) {
      return res.status(400).json({ message: '必須項目を入力してください' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: '有効なメールアドレスを入力してください' });
    }

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.RESEND_TO_EMAIL,
      subject: `【お問い合わせ】${name}様より`,
      html: `
        <h2>新しいお問い合わせが届きました</h2>
        <p><strong>お名前：</strong> ${name}</p>
        <p><strong>メールアドレス：</strong> ${email}</p>
        <p><strong>会社名：</strong> ${company || '未記入'}</p>
        <p><strong>電話番号：</strong> ${phone || '未記入'}</p>
        <p><strong>お問い合わせ種別：</strong> ${inquiryType}</p>
        <p><strong>メッセージ：</strong></p>
        <p>${message ? message.replace(/\n/g, '<br>') : '未記入'}</p>
      `
    });

    if (error) {
      return res.status(400).json({ error });
    }

    res.status(200).json({ message: 'メールが送信されました' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'メール送信に失敗しました' });
  }
} 