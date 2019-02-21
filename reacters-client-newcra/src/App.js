import React from 'react';
import { Route } from 'react-router-dom';
import loadable from '@loadable/component';
import Core from './containers/base/Core';

const PostListPage = loadable(() => import('./pages/PostListPage'));
const PostPage = loadable(() => import('./pages/PostPage'));
const LoginPage = loadable(() => import('./pages/LoginPage'));
const RegisterPage = loadable(() => import('./pages/RegisterPage'));
const WritePage = loadable(() => import('./pages/WritePage'));

const App = () => {
  return (
    <>
      <Route component={PostListPage} path="/" exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/posts/:postId(\d+)" />
      <Core />
    </>
  );
};

export default App;
