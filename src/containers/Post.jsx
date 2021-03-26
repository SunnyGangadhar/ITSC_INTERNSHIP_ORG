import React from 'react';
import { useRouteData } from 'react-static';
import { Link } from '@reach/router';

const PostComponent = () => {
  const { post } = useRouteData();

  return (
    <div className="default-content">
      <div className="content">
        <Link to="/blog/">{`<`} Back</Link>
        <br />
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default PostComponent;
