import React from 'react';
import classNames from 'classnames';
import { useGlobalContext } from '../../context/context';

const DetailLoader = () => {
  const { isDarkTheme } = useGlobalContext();
  const themeStyle = isDarkTheme ? 'bg-light-grey' : 'bg-white';
  const themeTextStyle = isDarkTheme
    ? 'bg-white'
    : 'bg-primary-black';
  return (
    <div className="mt-16 xl:flex xl:gap-[144px] animate-pulse">
      <div
        className={classNames(
          'w-full h-[275px] md:max-w-[559px] md:h-[483px] shadow-card-shadow animate-pulse',
          themeStyle
        )}
      ></div>

      <div className="mt-10 xl:grow xl:mt-12">
        <div>
          <div
            className={classNames(
              themeTextStyle,
              'w-20 h-6 rounded-full opacity-50'
            )}
          ></div>

          {/* div 1 */}
          <div className="mt-4 sm:flex sm:justify-between md:justify-start md:gap-[117px] xl:justify-between xl:gap-0 sm:mt-6">
            <div className="flex flex-col gap-3">
              <div
                className={classNames(
                  themeTextStyle,
                  'w-[160px] h-3 rounded-full opacity-50'
                )}
              ></div>
              <div
                className={classNames(
                  themeTextStyle,
                  'w-[160px] h-3 rounded-full opacity-50'
                )}
              ></div>
              <div
                className={classNames(
                  themeTextStyle,
                  'w-[160px] h-3 rounded-full opacity-50'
                )}
              ></div>
              <div
                className={classNames(
                  themeTextStyle,
                  'w-[160px] h-3 rounded-full opacity-50'
                )}
              ></div>
              <div
                className={classNames(
                  themeTextStyle,
                  'w-[160px] h-3 rounded-full opacity-50'
                )}
              ></div>
            </div>

            <div className="flex flex-col gap-3 mt-8 sm:mt-0">
              <div
                className={classNames(
                  themeTextStyle,
                  'w-[160px] h-3 rounded-full opacity-50'
                )}
              ></div>
              <div
                className={classNames(
                  themeTextStyle,
                  'w-[160px] h-3 rounded-full opacity-50'
                )}
              ></div>
              <div
                className={classNames(
                  themeTextStyle,
                  'w-[160px] h-3 rounded-full opacity-50'
                )}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailLoader;
