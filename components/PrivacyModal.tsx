import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

interface PrivacyModalProps {
  isOpen: boolean
  onClose: () => void
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        
        {/* ヘッダー */}
        <div className="sticky top-0 bg-white p-6 border-b border-gray-200 flex justify-between items-center rounded-t-2xl">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">プライバシーポリシー</h2>
            <p className="text-sm text-gray-600 mt-1">最終更新日：2024年12月20日</p>
          </div>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
          >
            <FaTimes size={24} />
          </button>
        </div>
        
        {/* 本文 */}
        <div className="p-6 space-y-8">
          
          {/* はじめに */}
          <section>
            <p className="text-gray-700 leading-relaxed">
              Buzz-partners株式会社（以下「当社」）は、本サイトの利用者（以下「ユーザー」）の個人情報を以下の目的で取得・利用します。
            </p>
          </section>

          {/* 収集項目 */}
          <section className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-gradient-main text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">1</span>
              収集項目
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                氏名
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                メールアドレス
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                その他お問い合わせに必要な情報
              </li>
            </ul>
          </section>

          {/* 利用目的 */}
          <section className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-gradient-main text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">2</span>
              利用目的
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                サービスの提供・運営
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                お問い合わせ対応
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                更新情報やキャンペーン案内の配信
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                有料サービスの請求
              </li>
            </ul>
          </section>

          {/* 第三者提供 */}
          <section className="bg-green-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-gradient-main text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">3</span>
              第三者提供
            </h3>
            <p className="text-gray-700 leading-relaxed">
              法令に基づく場合を除き、ユーザーの同意なく第三者へ提供しません。
            </p>
          </section>

          {/* 安全管理 */}
          <section className="bg-orange-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-gradient-main text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">4</span>
              安全管理
            </h3>
            <p className="text-gray-700 leading-relaxed">
              情報の漏えい・改ざん防止のため、適切な管理を行います。
            </p>
          </section>

          {/* 開示・訂正・削除 */}
          <section className="bg-purple-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-gradient-main text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">5</span>
              開示・訂正・削除
            </h3>
            <p className="text-gray-700 leading-relaxed">
              ユーザー本人からの請求があれば、速やかに対応します。
            </p>
          </section>

          {/* 変更 */}
          <section className="bg-pink-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-gradient-main text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">6</span>
              変更
            </h3>
            <p className="text-gray-700 leading-relaxed">
              本ポリシーは予告なく改定することがあります。改定後は本サイトに掲載した時点で有効となります。
            </p>
          </section>

          {/* お問い合わせ */}
          <section className="bg-gradient-light p-6 rounded-xl border-2 border-primary/20">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-gradient-main text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">7</span>
              お問い合わせ
            </h3>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-800 font-semibold mb-2">Buzz-partners株式会社</p>
              <div className="flex items-center text-gray-700">
                <span className="mr-2">📧</span>
                <a 
                  href="mailto:info@buzz-prt.com" 
                  className="text-primary hover:text-secondary underline transition-colors duration-300"
                >
                  info@buzz-prt.com
                </a>
              </div>
            </div>
          </section>

        </div>

        {/* フッター */}
        <div className="sticky bottom-0 bg-gray-50 p-6 border-t border-gray-200 rounded-b-2xl">
          <div className="flex justify-center">
            <button 
              onClick={onClose}
              className="bg-gradient-main hover:bg-gradient-reverse text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              閉じる
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyModal
