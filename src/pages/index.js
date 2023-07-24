import React, { useState } from 'react';
import classNames from 'classnames';
import { useGlobalContext } from '@/context/context';
import { Header, SearchBar, CountryCard } from '../components';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState();
  const { isDarkTheme } = useGlobalContext();

  const themeStyle = isDarkTheme
    ? 'bg-light-grey-secondary'
    : 'bg-creame-white';

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

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
        <CountryCard />
      </section>
    </main>
  );
}
