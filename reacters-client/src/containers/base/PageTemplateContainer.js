import React from 'react';
import PageTemplate from '../../components/base/PageTemplate';
import Header from '../../components/base/Header';

const PageTemplateContainer = ({ children }) => {
  return <PageTemplate header={<Header />}>{children}</PageTemplate>;
};

export default PageTemplateContainer;
