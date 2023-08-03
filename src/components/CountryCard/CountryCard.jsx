import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import { useGlobalContext } from '../../context/context';
import SubTitle from './SubTitle';

const CountryCard = ({
  imageSrc,
  countryName,
  region,
  capital,
  population,
}) => {
  const { isDarkTheme } = useGlobalContext();

  const themeStyle = isDarkTheme
    ? 'bg-light-grey text-white'
    : 'bg-white text-primary-black';

  return (
    <Link
      className={classNames(
        'w-[264px] h-[336px] rounded-[5px] shadow-card-shadow transition duration-300',
        themeStyle
      )}
      href={`/detail/${countryName}`}
    >
      <div className="relative w-full h-[160px] rounded-t-[5px]">
        <Image
          fill
          src={imageSrc}
          alt="image"
          placeholder="blur"
          blurDataURL={imageSrc}
          className="rounded-t-[5px]"
        />
      </div>

      <div className="mt-6 ml-6">
        <h6 className="text-lg font-extrabold leading-[26px]">
          {countryName}
        </h6>
        <div className="flex flex-col gap-2 mt-4">
          <SubTitle title="Population" detail={population} />
          <SubTitle title="Region" detail={region} />
          <SubTitle title="Capital" detail={capital} />
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
