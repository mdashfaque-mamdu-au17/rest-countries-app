import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { useGlobalContext } from '@/context/context';
import SubTitle from './SubTitle';

const CountryCard = () => {
  const { isDarkTheme } = useGlobalContext();

  const themeStyle = isDarkTheme
    ? 'bg-light-grey text-white'
    : 'bg-white text-primary-black';

  return (
    <div
      className={classNames(
        'w-[264px] h-[336px] rounded-[5px] shadow-card-shadow transition duration-300',
        themeStyle
      )}
    >
      <div className="relative w-full h-[160px] rounded-t-[5px]">
        <Image
          fill
          src="https://flagcdn.com/w320/pe.png"
          alt="image"
          placeholder="blur"
          blurDataURL="https://flagcdn.com/w320/pe.png"
          objectFit="cover"
          className="rounded-t-[5px]"
        />
      </div>

      <div className="mt-6 ml-6">
        <h6 className="text-lg font-extrabold leading-[26px]">
          United States of America
        </h6>
        <div className="flex flex-col gap-2 mt-4">
          <SubTitle title="Population" detail="323,947,000" />
          <SubTitle title="Region" detail="Americans" />
          <SubTitle title="Capital" detail="Washington, D.C" />
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
