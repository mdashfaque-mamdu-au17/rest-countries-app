import React from 'react';
import classNames from 'classnames';
import Title from './Title';
import { useGlobalContext } from '../../context/context';
import Image from 'next/image';
const Header = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  const themeStyle = isDarkTheme
    ? 'text-white bg-light-grey'
    : 'text-primary-black bg-white';

  return (
    <header
      className={classNames(
        'h-20 bg-light-grey shadow-nav-shadow transition duration-300',
        themeStyle
      )}
    >
      <nav className="flex items-center justify-between h-full px-4 max-w-[1278px] mx-auto 2xl:px-0">
        <Title type="primary-one">Where in the world?</Title>
        <button
          onClick={toggleDarkTheme}
          className="flex items-center gap-2"
        >
          <span className="relative inline-block w-4 h-4 md:h-5 md:w-5">
            {isDarkTheme ? (
              <Image fill src="/images/mon-full.svg" alt="icon" />
            ) : (
              <Image fill src="/images/moon.svg" alt="icon" />
            )}
          </span>
          <Title type="primary-two">Dark Mode</Title>
        </button>
      </nav>
    </header>
  );
};

export default Header;
