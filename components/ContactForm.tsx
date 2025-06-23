import { useState } from 'react'
import PrivacyModal from './PrivacyModal'



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
  
  // 送信状態管理を追加
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // APIに送信するデータを整形
      const submitData = {
        name: `${formData.lastName} ${formData.firstName}`, // APIが期待する形式
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        inquiryType: formData.inquiryType,
        message: formData.message
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        // フォームをリセット
        setFormData({
          lastName: '',
          firstName: '',
          company: '',
          email: '',
          phone: '',
          inquiryType: '',
          message: ''
        })
      } else {
        throw new Error('送信に失敗しました')
      }
    } catch (error) {
      setSubmitStatus('error')
      console.error('Submit error:', error)
    } finally {
      setIsSubmitting(false)
    }
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
                    placeholder="バズ"
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
                  会社名
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                  placeholder="株式会社パートナーズ"
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
                  disabled={isSubmitting}
                  className={`w-full btn-primary py-4 text-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? '送信中...' : 'お問い合わせを送信する'}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-600 text-sm">
          お送りいただいた個人情報は、お問い合わせへの回答のみに利用し、
          <br />
          適切に管理いたします。詳しくは
          <a href="#Footer" className="hover:text-primary-red hover:underline transition-all duration-300">プライバシーポリシー</a>
          をご確認ください。
        </div>

        {/* 成功・エラーメッセージ表示 */}
        {submitStatus === 'success' && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
            お問い合わせありがとうございます。24時間以内にご連絡いたします。
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
            送信に失敗しました。時間をおいて再度お試しください。
          </div>
        )}

    </section>
  )
}

export default ContactForm 