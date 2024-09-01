import React from 'react'

const Header = () => {
  return (
    <header className="w-full p-4 bg-black text-white flex justify-between items-center">
    <div className="text-xl font-bold">Logo</div>
    <nav>
      <ul className="flex space-x-4">
        <li><a href="#" className="hover:text-gray-400">Home</a></li>
        <li><a href="#" className="hover:text-gray-400">About</a></li>
        <li><a href="#" className="hover:text-gray-400">Manage Account</a></li>
      </ul>
    </nav>
  </header>
  )
}

export default Header