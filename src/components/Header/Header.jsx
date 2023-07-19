import React from 'react';
import classNames from 'classnames';
import Title from './Title';
import { useGlobalContext } from '../../context/context';

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
      <nav className="flex items-center justify-between h-full px-4">
        <Title type="primary-one">Where in the world?</Title>
        <button onClick={toggleDarkTheme}>
          <span className="bg-green-300">
            <img src="/public/moon.svg" alt="" />
          </span>
          <Title type="primary-two">Dark Mode</Title>
        </button>
      </nav>
    </header>
  );
};

export default Header;
