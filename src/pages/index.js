import React, { useState } from 'react';
import classNames from 'classnames';
import useSWR from 'swr';
import { useGlobalContext } from '@/context/context';
import { Header, SearchBar, CountryCard } from '../components';
import customFetch from '../../utils/axios';
import { formatNumberWithCommas } from '../../utils/utility';

const fetcher = (url) => customFetch.get(url).then((res) => res.data);
export default function Home() {
  const [searchTerm, setSearchTerm] = useState();
  const { isDarkTheme } = useGlobalContext();

  const themeStyle = isDarkTheme
    ? 'bg-light-grey-secondary'
    : 'bg-creame-white';

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const { data, error, isLoading } = useSWR('/all', fetcher);

  return (
    <main
      className={classNames(
        themeStyle,
        'min-h-screen transition duration-300'
      )}
    >
      <Header />
      <div className="px-4 mt-6 max-w-[1278px] sm:mx-auto 2xl:px-0 md:mt-12">
        <div>
          <SearchBar
            id="countrySearch"
            name="countrySearch"
            type="text"
            label="countrySearch"
            placeholder="Search for a country"
            value={searchTerm}
            onChange={handleSearchTerm}
          />
        </div>
      </div>

      {/* country list */}
      <section>
        {isLoading && <div>Loading...</div>}
        {!isLoading &&
          data.length > 0 &&
          data?.map((country, index) => {
            return (
              <CountryCard
                key={country?.name?.common}
                imageSrc={country?.flags?.png}
                countryName={country?.name?.common}
                region={country?.region}
                capital={country?.capital?.[0]}
                population={formatNumberWithCommas(
                  country?.population
                )}
              />
            );
          })}
      </section>
    </main>
  );
}
