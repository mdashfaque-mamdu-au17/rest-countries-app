import React from 'react';
import CardLoader from './CardLoader';

const CardLoaders = () => {
  return (
    <div className="mx-auto px-4 flex flex-wrap items-center justify-center gap-y-10 gap-x-10 md:justify-start lg:gap-x-[74px] lg:gap-y-[72px] 2xl:px-0 ">
      <CardLoader />
      <CardLoader />
      <CardLoader />
      <CardLoader />
    </div>
  );
};

export default CardLoaders;
