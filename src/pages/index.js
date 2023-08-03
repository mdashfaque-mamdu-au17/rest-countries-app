import React, { useState } from 'react';
import classNames from 'classnames';
import useSWR from 'swr';
import { useGlobalContext } from '../context/context';
import {
  Header,
  SearchBar,
  CountryCard,
  ListBoxSelect,
  CardLoaders,
} from '../components';
import customFetch from '../../utils/axios';
import { formatNumberWithCommas } from '../../utils/utility';
import { regions } from '../../utils/regions';

const fetcher = (url) => customFetch.get(url).then((res) => res.data);

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  const { isDarkTheme } = useGlobalContext();

  const themeStyle = isDarkTheme
    ? 'bg-light-grey-secondary'
    : 'bg-creame-white';

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const { data, error, isLoading } = useSWR('/all', fetcher);

  const regionsResults =
    !isLoading && selectedRegion.name === 'All'
      ? data
      : data?.filter((country) => {
          return (
            country.region.toLowerCase() ===
            selectedRegion.name.toLowerCase()
          );
        });

  const searchResults =
    !isLoading &&
    data?.filter((country) => {
      return country.name.common
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });

  let combinedResults;
  if (selectedRegion.name === 'All' && !searchTerm) {
    combinedResults = data;
  } else if (selectedRegion.name === 'All') {
    combinedResults = searchResults;
  } else if (!searchTerm) {
    combinedResults = regionsResults;
  } else {
    combinedResults = searchResults.filter((country) => {
      return regionsResults.includes(country);
    });
  }

  return (
    <main
      className={classNames(
        themeStyle,
        'min-h-screen transition duration-300'
      )}
    >
      <Header />
      <div className="px-4 mt-6 max-w-[1278px] sm:mx-auto 2xl:px-0 md:mt-12 md:flex md:justify-between md:items-center">
        <div className="md:shrink-0">
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
        <div className="mt-10 md:mt-0">
          <ListBoxSelect
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            regionOptions={regions}
          />
        </div>
      </div>

      {/* country list */}
      <section className="max-w-[1278px] mt-8 mx-auto px-4 flex flex-wrap items-center justify-center gap-y-10 gap-x-10 md:justify-start lg:gap-x-[74px] lg:gap-y-[72px] 2xl:px-0 lg:mt-12">
        {!isLoading && combinedResults.length < 1 && (
          <h3
            className={classNames(
              'text-2xl',
              isDarkTheme ? 'text-white' : 'text-primary-black'
            )}
          >
            No Results Found...
          </h3>
        )}
        {isLoading && <CardLoaders />}
        {!isLoading &&
          combinedResults.length > 0 &&
          combinedResults?.map((country, index) => {
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
