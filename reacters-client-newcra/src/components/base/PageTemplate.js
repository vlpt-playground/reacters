import React from 'react';

const PageTemplate = ({ children, header }) => {
  return (
    <div className="PageTemplate">
      {header}
      {children}
    </div>
  );
};

export default PageTemplate;
