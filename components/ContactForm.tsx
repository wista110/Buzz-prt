import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ここで実際のフォーム送信処理を行います
    console.log('Form submitted:', formData)
    // 成功メッセージや次のステップへの誘導
    alert('お問い合わせありがとうございます。24時間以内にご連絡いたします。')
  }

  return (
    <section id="contact" className="bg-white section-padding">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl font-bold text-dark-gray mb-6">
            お問い合わせ
          </h2>
          <p className="text-xl text-gray-600">
            まずは無料相談から始めませんか？お気軽にお問い合わせください。
          </p>
        </div>

        

          {/* 右側：お問い合わせフォーム */}
          <div className="bg-light-gray p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-dark-gray mb-2">
                    姓 <span className="text-primary-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                    placeholder="山田"
                  />
                </div>
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-dark-gray mb-2">
                    名 <span className="text-primary-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                    placeholder="太郎"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-dark-gray mb-2">
                  会社名 <span className="text-primary-red">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                  placeholder="株式会社サンプル"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-gray mb-2">
                  メールアドレス <span className="text-primary-red">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                  placeholder="example@company.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-dark-gray mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                  placeholder="03-1234-5678"
                />
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-dark-gray mb-2">
                  お問い合わせ種別 <span className="text-primary-red">*</span>
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  required
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                >
                  <option value="">選択してください</option>
                  <option value="consultation">無料相談を希望</option>
                  <option value="service">サービス詳細について</option>
                  <option value="pricing">料金について</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-gray mb-2">
                  メッセージ
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                  placeholder="ご質問やご要望がございましたらお書きください"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-lg"
                >
                  お問い合わせを送信する
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-600 text-sm">
          お送りいただいた個人情報は、お問い合わせへの回答のみに利用し、
          <br />
          適切に管理いたします。詳しくは
          <a href="#" className="text-primary-red hover:underline">プライバシーポリシー</a>
          をご確認ください。
        </div>

    </section>
  )
}

export default ContactForm 