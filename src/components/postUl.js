import React from 'react';
import Li from './postLi';
import styled from 'styled-components';

function PostUl({ post }) {
  return (
    <>
      <Ul>
        {post.map((item) => {
          return <Li key={item.id} item={item} />;
        })}
      </Ul>
    </>
  );
}

export default PostUl;

const Ul = styled.ul`
  width: 800px;
  display: flex;
  flex-direction: column;
  border-top: 5px solid lightgray;
`;
