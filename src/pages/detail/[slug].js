import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import Image from 'next/image';
import {
  Header,
  Button,
  SubTitle,
  DetailLoader,
} from '../../components';
import customFetch from '../../../utils/axios';
import { useGlobalContext } from '../../context/context';
import { formatNumberWithCommas } from '../../../utils/utility';

const fetcher = (url) => customFetch.get(url).then((res) => res.data);

export default function Page() {
  const [borderCountries, setBorderCountries] = useState([]);
  const { isDarkTheme } = useGlobalContext();
  const router = useRouter();
  const { data, error, isLoading } = useSWR(
    `/name/${router?.query?.slug}?fullText=true`,
    fetcher
  );

  const themeStyle = isDarkTheme
    ? 'bg-light-grey-secondary text-white'
    : 'bg-creame-white text-primary-black';

  const fetchBorders = async (borderCodes) => {
    try {
      const { data } = await customFetch.get(
        `/alpha?codes=${borderCodes}&fields=name`
      );
      setBorderCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  const borders = data?.[0]?.borders;
  useEffect(() => {
    if (!borders) {
      return;
    } else if (borders.length > 0) {
      fetchBorders(String(borders));
    }
  }, [data]);
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

        {isLoading && <DetailLoader />}
        {!isLoading &&
          data.length > 0 &&
          data?.map((country) => {
            return (
              <div
                className="mt-16 xl:flex xl:gap-[144px]"
                key={country?.name?.common}
              >
                <div className="relative w-full h-[275px] md:max-w-[559px] md:h-[483px]">
                  <Image
                    fill
                    key={country?.name?.common}
                    src={country?.flags?.png}
                    alt="flag"
                  />
                </div>

                <div className="mt-10 xl:grow xl:mt-12">
                  <div>
                    <h6 className="text-[22px] font-extrabold leading-[26px] sm:text-[32px]">
                      {country?.name?.common}
                    </h6>

                    {/* div 1 */}
                    <div className="mt-4 sm:flex sm:justify-between md:justify-start md:gap-[117px] xl:justify-between xl:gap-0 sm:mt-6">
                      <div>
                        <SubTitle
                          title="Native Name"
                          detail={country?.name?.common}
                          styles="leading-8 md:text-base md:leading-8"
                        />

                        <SubTitle
                          title="Population"
                          detail={formatNumberWithCommas(
                            country?.population
                          )}
                          styles="leading-8 md:text-base md:leading-8"
                        />

                        <SubTitle
                          title="Region"
                          detail={country?.region}
                          styles="leading-8 md:text-base md:leading-8"
                        />

                        <SubTitle
                          title="Sub Region"
                          detail={country?.subregion}
                          styles="leading-8 md:text-base md:leading-8"
                        />

                        <SubTitle
                          title="Capital"
                          detail={country?.capital[0]}
                          styles="leading-8 md:text-base md:leading-8"
                        />
                      </div>

                      {/* div 2 */}
                      <div className="mt-8 sm:mt-0">
                        <SubTitle
                          title="Top Level Domain"
                          detail={country?.tld?.[0]}
                          styles="leading-8 md:text-base md:leading-8"
                        />

                        <SubTitle
                          title="Currencies"
                          detail={
                            Object.values(country?.currencies)?.[0]
                              ?.name
                          }
                          styles="leading-8 md:text-base md:leading-8"
                        />

                        <SubTitle
                          title="Languages"
                          detail={Object.values(
                            country?.languages
                          )?.map((language, index) => {
                            const lastIndex =
                              Object.values(country?.languages)
                                .length - 1;
                            return `${language}${
                              lastIndex !== index ? ', ' : ''
                            }`;
                          })}
                          styles="leading-8 md:text-base md:leading-8"
                        />
                      </div>
                    </div>
                  </div>

                  {/* border countries */}
                  {borderCountries.length > 0 && (
                    <div className="mt-[34px] xl:mt-[70px] md:flex md:gap-4 md:items-center">
                      <h6 className="text-base font-semibold">
                        Border Countries:
                      </h6>
                      <div className="flex gap-2.5 mt-4 md:mt-0">
                        {borderCountries
                          .slice(0, 3)
                          ?.map((country, index) => {
                            return (
                              <div
                                className={classNames(
                                  'min-w-[96px] h-7 rounded-sm text-sm flex justify-center items-center shadow-country-box-shadow',
                                  isDarkTheme
                                    ? 'bg-light-grey'
                                    : 'bg-white'
                                )}
                                key={country?.name?.common}
                              >
                                <span>{country?.name?.common}</span>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </section>
    </main>
  );
}
