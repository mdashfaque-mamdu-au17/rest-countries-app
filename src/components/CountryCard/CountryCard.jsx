import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { useGlobalContext } from '@/context/context';

const CountryCard = () => {
  const { isDarkTheme } = useGlobalContext();

  const themeStyle = isDarkTheme ? 'bg-light-grey' : 'bg-white';
  return (
    <div
      className={classNames(
        'w-[264px] h-[336px] rounded-[5px] shadow-card-shadow',
        themeStyle
      )}
    >
      <div className="relative w-full h-[160px]">
        <Image
          fill
          src="https://flagcdn.com/w320/mg.svg"
          alt="image"
          placeholder="blur"
          blurDataURL="https://flagcdn.com/w320/mg.svg"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default CountryCard;
