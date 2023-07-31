import React from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import Image from 'next/image';
import { Header, Button, SubTitle } from '@/components';
import customFetch from '../../../utils/axios';
import { useGlobalContext } from '@/context/context';

const fetcher = (url) => customFetch.get(url).then((res) => res.data);

export default function Page() {
  const { isDarkTheme } = useGlobalContext();
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    `/name/${router?.query?.slug}`,
    fetcher
  );
  console.log(data);

  const themeStyle = isDarkTheme
    ? 'bg-light-grey-secondary text-white'
    : 'bg-creame-white text-primary-black';

  return (
    <main
      className={classNames(themeStyle, 'transition duration-300 ')}
    >
      <Header />
      <section
        className={classNames(
          'min-h-screen pt-10 md:pt-20 px-7 max-w-[1278px] sm:mx-auto 2xl:px-0'
        )}
      >
        <div>
          <Button />
        </div>

        {isLoading && <div>Loading...</div>}
        {!isLoading &&
          data.length > 0 &&
          data?.map((country) => {
            return (
              <div className="mt-16">
                <div className="relative w-full h-[275px]">
                  <Image
                    fill
                    key={country?.name?.common}
                    src={country?.flags?.png}
                    alt="flag"
                  />
                </div>

                <div className="mt-10">
                  <div>
                    <h6 className="text-[22px] font-extrabold leading-[26px] sm:text-[32px]">
                      {country?.name?.common}
                    </h6>

                    <div>
                      <SubTitle
                        title="Native Name"
                        detail={
                          country?.name?.nativeName?.eng?.official
                        }
                      ></SubTitle>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </section>
    </main>
  );
}
