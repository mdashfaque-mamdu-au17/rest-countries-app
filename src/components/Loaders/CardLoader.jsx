import React from 'react';
import classNames from 'classnames';
import { useGlobalContext } from '../../context/context';

const CardLoader = () => {
  const { isDarkTheme } = useGlobalContext();
  const themeBackgroundStyle = isDarkTheme
    ? 'bg-light-grey'
    : 'bg-white';

  const themeTextStyle = isDarkTheme
    ? 'bg-white'
    : 'bg-primary-black';
  return (
    <div
      className={classNames(
        'w-[264px] h-[336px] rounded-[5px] animate-pulse shadow-card-shadow',
        themeBackgroundStyle
      )}
    >
      <div className="w-full h-[160px]"></div>
      <div className="mt-6 ml-6">
        <div
          className={classNames(
            themeTextStyle,
            'w-[100px] h-5 rounded-full opacity-50'
          )}
        ></div>
        <div className="flex flex-col gap-2 mt-4">
          <div
            className={classNames(
              themeTextStyle,
              'w-[90px] h-2 rounded-full opacity-50'
            )}
          ></div>
          <div
            className={classNames(
              themeTextStyle,
              'w-[90px] h-2 rounded-full opacity-50'
            )}
          ></div>
          <div
            className={classNames(
              themeTextStyle,
              'w-[90px] h-2 rounded-full opacity-50'
            )}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CardLoader;
