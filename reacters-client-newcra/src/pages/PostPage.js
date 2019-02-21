import React from 'react';
import './PostPage.scss';
import PageTemplateContainer from '../containers/base/PageTemplateContainer';
import Responsive from '../components/base/Responsive';
import PostViewerContainer from '../containers/posts/PostViewerContainer';

const PostPage = () => {
  return (
    <PageTemplateContainer>
      <div className="PostPage">
        <Responsive>
          <PostViewerContainer />
        </Responsive>
      </div>
    </PageTemplateContainer>
  );
};

export default PostPage;
