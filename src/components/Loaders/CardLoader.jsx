import React from 'react';
import classNames from 'classnames';
import { useGlobalContext } from '@/context/context';

const CardLoader = () => {
  const { isDarkTheme } = useGlobalContext();
  const themeBackgroundStyle = isDarkTheme
    ? 'bg-light-grey'
    : 'bg-white';

  return (
    <div
      className={classNames(
        'w-[264px] h-[336px] rounded-[5px] animate-pulse shadow-card-shadow',
        themeBackgroundStyle
      )}
    >
      hello
    </div>
  );
};

export default CardLoader;
