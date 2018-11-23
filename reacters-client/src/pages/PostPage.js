import React from 'react';
import './PostPage.scss';
import PageTemplateContainer from '../containers/base/PageTemplateContainer';
import Responsive from '../components/base/Responsive';

const PostPage = () => {
  return (
    <PageTemplateContainer>
      <Responsive>
        <div className="PostPage">PostPage</div>
      </Responsive>
    </PageTemplateContainer>
  );
};

export default PostPage;
