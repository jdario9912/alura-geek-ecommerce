import React from 'react';

const Logo = ({ sizes }) => {
  return (
    <a href="/">
      <h1 className='flex items-center'>
        
        <span className={('material-symbols-outlined text-blue-600 ' + sizes.iconSize).trim()}>
          sports_esports
        </span>

        <p className={('ml-0.5 font-medium ' + sizes.textSize).trim()}>
          <em className='not-italic text-blue-600'>Alura</em>
          Geek
        </p>

      </h1>
    </a>
  );
}

// sizes es un objeto de tipo LogoSize de './modelos/logo-size.js'

export default Logo;
