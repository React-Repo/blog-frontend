import React from 'react';
import HeaderConatiner from '../containers/common/HeaderConatiner';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';

const PostListPage = () => {
  return (
    <>
      <HeaderConatiner />
      <PostListContainer />
      <PaginationContainer />
    </>
  );
};

export default PostListPage;
