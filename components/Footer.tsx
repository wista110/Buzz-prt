const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* ロゴ・会社情報 */}
          <div className="col-span-2">
            <div className="text-2xl font-bold text-primary-red mb-4">
              カリトルくん
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              商談創出に特化した営業代行サービス。
              <br />
              お客様のカレンダーを質の高い商談で埋めつくします。
            </p>
            <div className="space-y-2 text-gray-300">
              <div>📞 03-1234-5678</div>
              <div>📧 contact@karitoru-kun.com</div>
              <div>🏢 東京都渋谷区〇〇 1-2-3</div>
            </div>
          </div>

          {/* サービス */}
          <div>
            <h3 className="font-bold text-lg mb-4">サービス</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  サービス内容
                </a>
              </li>
              <li>
                <a href="#strengths" className="hover:text-white transition-colors">
                  強み
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  料金プラン
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  よくある質問
                </a>
              </li>
            </ul>
          </div>

          {/* サポート */}
          <div>
            <h3 className="font-bold text-lg mb-4">サポート</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  お問い合わせ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  資料ダウンロード
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  導入事例
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  ブログ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-600 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 カリトルくん. All rights reserved.
          </div>
          <div className="flex space-x-6 text-gray-400 text-sm mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              プライバシーポリシー
            </a>
            <a href="#" className="hover:text-white transition-colors">
              利用規約
            </a>
            <a href="#" className="hover:text-white transition-colors">
              特定商取引法に基づく表記
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 