import React, { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import Image from 'next/image';
import classNames from 'classnames';
import { useGlobalContext } from '../../context/context';

const ListBoxSelect = ({
  selectedRegion,
  setSelectedRegion,
  regionOptions,
}) => {
  const { isDarkTheme } = useGlobalContext();
  const themeStyle = isDarkTheme
    ? 'bg-light-grey text-white'
    : 'bg-white text-primary-black';
  return (
    <div className="w-[200px] h-14">
      <Listbox value={selectedRegion} onChange={setSelectedRegion}>
        <div className="relative w-full h-full transition duration-300">
          <Listbox.Button
            className={classNames(
              'relative w-full cursor-default rounded-[5px] shadow-search-shadow focus:outline-none h-full text-left pl-6 transition duration-300',
              themeStyle
            )}
          >
            <span className="block text-xs truncate sm:text-sm">
              {selectedRegion.name}
            </span>
            <span className="absolute pointer-events-none inset-y-0 right-0 flex items-center pr-[19px]">
              <Image
                width={12}
                height={12}
                src={
                  isDarkTheme
                    ? '/images/down-arrow-dark.svg'
                    : '/images/down-arrow-light.svg'
                }
                style={{ objectFit: 'contain' }}
                alt="icon"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className={classNames(
                'absolute z-50 mt-1 w-full overflow-auto rounded-[5px] py-2 text-xs sm:text-sm shadow-search-shadow focus:outline-none',
                themeStyle
              )}
            >
              {regionOptions.map((country, index) => {
                return (
                  <Listbox.Option
                    key={country.id}
                    className={classNames(
                      'relative cursor-default select-none py-2 pl-6'
                    )}
                    value={country}
                  >
                    {({ selected }) => {
                      return (
                        <>
                          <span
                            className={classNames(
                              'block truncate',
                              selected
                                ? 'font-semibold'
                                : 'font-normal'
                            )}
                          >
                            {country.name}
                          </span>
                        </>
                      );
                    }}
                  </Listbox.Option>
                );
              })}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default ListBoxSelect;
