import { createMocks } from 'node-mocks-http';
import handler from '../../pages/api/contact';

// Resendをモック
jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: {
      send: jest.fn().mockResolvedValue({
        data: { id: 'test-id' },
        error: null,
      }),
    },
  })),
}));

describe('/api/contact', () => {
  beforeEach(() => {
    // 環境変数をモック
    process.env.RESEND_API_KEY = 'test_key';
    process.env.RESEND_FROM_EMAIL = 'test@example.com';
    process.env.RESEND_TO_EMAIL = 'contact@example.com';
  });

  it('POSTリクエストで正常にメール送信される', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        name: 'テスト太郎',
        email: 'test@example.com',
        company: 'テスト会社',
        phone: '03-1234-5678',
        inquiryType: 'consultation',
        message: 'テストメッセージ',
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
  });

  it('GETリクエストで405エラーが返される', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(405);
  });

  it('必須項目が不足している場合400エラーが返される', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        email: 'test@example.com',
        // nameが不足
      },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
  });
}); 