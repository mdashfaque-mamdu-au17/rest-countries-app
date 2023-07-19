import React from 'react';
import classNames from 'classnames';

const Title = ({ type, children }) => {
  const applySpecificStyle = () => {
    if (type === 'primary-one') {
      return 'text-sm font-extrabold md:text-2xl';
    }
    if (type === 'primary-two') {
      return 'text-xs font-semibold md:text-base';
    }
  };
  return (
    <h6 className={classNames(applySpecificStyle(), '')}>
      {children}
    </h6>
  );
};

export default Title;
