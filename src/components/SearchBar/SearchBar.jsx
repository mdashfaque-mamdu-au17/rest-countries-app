import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { useGlobalContext } from '../../context/context';

const SearchBar = ({
  id,
  name,
  type,
  label,
  placeholder,
  value,
  onChange,
}) => {
  const { isDarkTheme } = useGlobalContext();
  const themeStyle = isDarkTheme
    ? 'bg-light-grey text-white'
    : 'bg-white text-primary-black';

  const placeholderStyle = isDarkTheme
    ? 'placeholder:text-white'
    : 'placeholder:text-light-grey-300';
  return (
    <label
      htmlFor={id || name}
      className={classNames(
        'h-12 w-full block  sm:w-[480px] rounded-[5px] shadow-search-shadow flex items-cneter sm:h-14 transition duration-300',
        themeStyle
      )}
    >
      <span className="flex items-center w-full h-full gap-[26px] ml-8 sm:gap-6 ">
        <span className="relative inline-block w-4 h-4 sm:h-[18px] sm:w-[18px]">
          {isDarkTheme ? (
            <Image
              fill
              src="/images/icon-search-dark.svg"
              alt="icon"
              style={{ objectFit: 'contain' }}
            />
          ) : (
            <Image
              fill
              src="/images/icon-search-light.svg"
              alt="icon"
              style={{ objectFit: 'contain' }}
            />
          )}
        </span>
        <input
          type={type}
          id={id}
          autoComplete="off"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={classNames(
            'w-full text-xs focus:outline-none bg-inherit sm:text-sm  font-normal ',
            placeholderStyle
          )}
        />
      </span>
    </label>
  );
};

export default SearchBar;
