import React from 'react';
import PageTemplate from '../../components/base/PageTemplate';
import HeaderContainer from './HeaderContainer';

const PageTemplateContainer = ({ children }) => {
  return <PageTemplate header={<HeaderContainer />}>{children}</PageTemplate>;
};

export default PageTemplateContainer;
