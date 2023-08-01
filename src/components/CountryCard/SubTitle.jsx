import React from 'react';
import classNames from 'classnames';

const SubTitle = ({ title, detail, styles }) => {
  return (
    <p
      className={classNames(
        'text-sm font-semibold leading-4',
        styles
      )}
    >
      {title}: <span className="font-light">{detail}</span>
    </p>
  );
};

export default SubTitle;
