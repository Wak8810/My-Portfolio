import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">My Portfolio</h1>
        <nav className="space-x-6">
          {/* まだない機能だから保留、別コンポにしてもよい
            <a href="#about" className="text-gray-600 hover:text-blue-500 transition">About</a>
            <a href="#works" className="text-gray-600 hover:text-blue-500 transition">Works</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-500 transition">Contact</a>
          */}
        </nav>
      </div>
    </header>
  )
}

export default Header