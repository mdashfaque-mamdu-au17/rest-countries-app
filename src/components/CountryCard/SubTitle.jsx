import React from 'react';

const SubTitle = ({ title, detail }) => {
  return (
    <p className="text-sm font-semibold leading-4">
      {title}: <span className="font-light">{detail}</span>
    </p>
  );
};

export default SubTitle;
