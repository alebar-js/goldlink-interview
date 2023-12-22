// Header.tsx

import React from 'react';

interface HeaderProps {
  title: string;
  links?: { text: string; url: string }[];
}

const Header: React.FC<HeaderProps> = ({ title, links }) => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="text-2xl font-bold">{title}</div>
      <nav className="mt-4">
        <ul className="flex">
          {links?.map((link, index) => (
            <li key={index} className="mr-4">
              <a href={link.url} className="text-white hover:text-gray-300">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
