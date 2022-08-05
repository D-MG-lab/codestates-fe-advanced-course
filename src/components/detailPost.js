import React from 'react';
import styled from 'styled-components';

function DetailPost({ item }) {
  return (
    <>
      <div>
        <ul>
          <DetailTitle>{item.title}</DetailTitle>
          <DetailWriter>작성자 {item.userId}</DetailWriter>
          <DetailBody>{item.body}</DetailBody>
        </ul>
      </div>
    </>
  );
}

export default DetailPost;

const DetailTitle = styled.li`
  font-size: 20px;
  font-weight: 700;
  height: 2.2em;
`;

const DetailWriter = styled.li`
  padding: 1rem 0;
  text-align: right;
`;

const DetailBody = styled.li`
  border-top: 2px solid lightgray;
  padding: 1rem 0;
  font-size: 18px;
`;
