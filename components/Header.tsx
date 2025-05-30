import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* ロゴ */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary-red">
              カリトルくん
            </div>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-primary-red transition-colors">
              サービス内容
            </a>
            <a href="#strengths" className="text-gray-700 hover:text-primary-red transition-colors">
              強み
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-primary-red transition-colors">
              料金
            </a>
            <a href="#faq" className="text-gray-700 hover:text-primary-red transition-colors">
              よくある質問
            </a>
          </nav>

          {/* CTAボタン（デスクトップ） */}
          <div className="hidden md:flex">
            <a href="#contact" className="btn-primary">
              お問い合わせ
            </a>
          </div>

          {/* モバイルメニューボタン */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 p-2">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="py-4 space-y-4">
              <a href="#features" className="block text-gray-700 hover:text-primary-red px-4 py-2">
                サービス内容
              </a>
              <a href="#strengths" className="block text-gray-700 hover:text-primary-red px-4 py-2">
                強み
              </a>
              <a href="#pricing" className="block text-gray-700 hover:text-primary-red px-4 py-2">
                料金
              </a>
              <a href="#faq" className="block text-gray-700 hover:text-primary-red px-4 py-2">
                よくある質問
              </a>
              <div className="px-4 py-2">
                <a href="#contact" className="btn-primary block text-center">
                  お問い合わせ
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 