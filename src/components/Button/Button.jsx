import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import { useGlobalContext } from '../../context/context';

const Button = () => {
  const { isDarkTheme } = useGlobalContext();
  const themeStyle = isDarkTheme
    ? 'bg-light-grey text-white'
    : 'bg-white text-primary-black';
  return (
    <Link
      href="/"
      className={classNames(
        'w-[104px] h-8 inline-block rounded-sm text-sm md:w-[136px] md:h-10 md:text-base leading-5 shadow-button-shadow',
        themeStyle
      )}
    >
      <div className="h-full flex items-center justify-center gap-2 md:gap-2.5">
        <div className="relative w-[18px] h-[18px] md:w-5 md:h-5">
          <Image
            fill
            src={
              isDarkTheme
                ? '/images/arrow-dark.svg'
                : '/images/arrow-light.svg'
            }
            alt="icon"
          />
        </div>
        <span>Back</span>
      </div>
    </Link>
  );
};

export default Button;
