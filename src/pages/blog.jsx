import React from 'react';
import { useRouteData } from 'react-static';
import { Link } from '@reach/router';

const Blog = () => {
  const { posts } = useRouteData();

  return (
    <div className="default-content">
      <div className="content">
        <h1>It's blog time.</h1>
        <br />
        All Posts:
        <ul>
          {posts.map(post =>
            <li key={post.id}>
              <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
            </li>)}
        </ul>
      </div>
    </div>
  );
};

export default Blog;
