import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function PostLi({ item }) {
  return (
    <>
      <Li>
        <Link to={`/detail/${item.id}`}>
          <ul>
            <li>{item.title}</li>
            <li>작성자 {item.userId}</li>
          </ul>
        </Link>
      </Li>
    </>
  );
}

export default PostLi;

const Li = styled.li`
  ul {
    display: flex;
  }
  li {
    padding: 1rem;
    border-bottom: 1px solid lightgray;
  }
  li:first-child {
    width: 90%;
  }
  li:last-child {
    width: 10%;
  }
`;
