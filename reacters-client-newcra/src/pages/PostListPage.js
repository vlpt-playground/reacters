import React from 'react';
import './PostListPage.scss';
import PageTemplateContainer from '../containers/base/PageTemplateContainer';
import WritePostButton from '../components/postList/WritePostButton';
import Responsive from '../components/base/Responsive';
import PostListContainer from '../containers/postList/PostListContainer';

import PaginationContainer from '../containers/postList/PaginationContainer';

const PostListPage = () => {
  return (
    <PageTemplateContainer>
      <Responsive>
        <div className="PostListPage">
          <div className="button-aligner">
            <WritePostButton />
          </div>
          <PostListContainer />
          <PaginationContainer />
        </div>
      </Responsive>
    </PageTemplateContainer>
  );
};

export default PostListPage;
