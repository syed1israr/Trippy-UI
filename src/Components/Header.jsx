// components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-black text-white py-4 px-8 flex justify-between items-center">
      <div className="text-2xl font-bold">Logo</div>
      <nav className="space-x-8">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Manage Account</a>
      </nav>
    </header>
  );
};

export default Header;
