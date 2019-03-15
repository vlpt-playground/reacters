import React from 'react';
import './PostListPage.scss';
import PageTemplateContainer from '../containers/base/PageTemplateContainer';
import WritePostButton from '../components/postList/WritePostButton';
import Responsive from '../components/base/Responsive';
import PostListContainer from '../containers/postList/PostListContainer';

import PaginationContainer from '../containers/postList/PaginationContainer';
import WithUser from '../containers/common/WithUser';

const PostListPage = () => {
  return (
    <PageTemplateContainer>
      <Responsive>
        <div className="PostListPage">
          <WithUser>
            {user => {
              if (!user) return null;
              return (
                <div className="button-aligner">
                  <WritePostButton />
                </div>
              );
            }}
          </WithUser>

          <PostListContainer />
          <PaginationContainer />
        </div>
      </Responsive>
    </PageTemplateContainer>
  );
};

export default PostListPage;
