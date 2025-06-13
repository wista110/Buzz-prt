import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useLoading } from '../contexts/LoadingContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isLoading } = useLoading()

  // ローディング中は表示しない
  if (isLoading) return null

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // モバイルメニューを閉じる関数
  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* ロゴ */}
          <div className="flex items-center">
            <img 
              onClick={() => window.location.href = '#hero'}
              src="/logo.png" 
              alt="BUZZ PARTNERS" 
              className="h-16 w-auto cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex space-x-8">
            <a href="#achievements" className="text-gray-700 hover:text-primary transition-colors">
              実績
            </a>
            <a href="#use-cases" className="text-gray-700 hover:text-primary transition-colors">
              活用事例
            </a>
            <a href="#pain-points" className="text-gray-700 hover:text-primary transition-colors">
              サポート
            </a>
            <a href="#strengths" className="text-gray-700 hover:text-primary transition-colors">
              強み
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
            <button 
              onClick={toggleMenu} 
              className="text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <nav className="py-4 space-y-2">
              <a 
                href="#achievements" 
                className="block text-gray-700 hover:text-primary-red hover:bg-gray-50 px-4 py-3 rounded-lg mx-2 transition-all duration-300"
                onClick={closeMenu}
              >
                実績
              </a>
              <a 
                href="#use-cases" 
                className="block text-gray-700 hover:text-primary-red hover:bg-gray-50 px-4 py-3 rounded-lg mx-2 transition-all duration-300"
                onClick={closeMenu}
              >
                活用事例
              </a>
              <a 
                href="#pain-points" 
                className="block text-gray-700 hover:text-primary-red hover:bg-gray-50 px-4 py-3 rounded-lg mx-2 transition-all duration-300"
                onClick={closeMenu}
              >
                サポート
              </a>
              <a 
                href="#strengths" 
                className="block text-gray-700 hover:text-primary-red hover:bg-gray-50 px-4 py-3 rounded-lg mx-2 transition-all duration-300"
                onClick={closeMenu}
              >
                強み
              </a>
              <div className="px-4 py-2">
                <a 
                  href="#contact" 
                  className="btn-primary block text-center"
                  onClick={closeMenu}
                >
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