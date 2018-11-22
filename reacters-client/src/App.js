import React from 'react';
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';

const App = () => {
  return (
    <>
      <Route component={PostListPage} path="/" exact />
      <Route component={PostPage} path="/:postId" />
    </>
  );
};

export default App;
