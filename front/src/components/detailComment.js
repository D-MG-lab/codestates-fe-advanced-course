import React from 'react';
import styled from 'styled-components';

function DetailComment({ comments }) {
  return (
    <>
      <CommentBlock>
        <CommentLength>
          댓글 {comments.length > 0 && `${comments.length}`}개
        </CommentLength>
        <ul>
          {comments.map((item) => {
            return (
              <CommentLi key={item.id}>
                <span>{item.name}</span>
                <p>{item.body}</p>
              </CommentLi>
            );
          })}
        </ul>
      </CommentBlock>
    </>
  );
}

export default DetailComment;

const CommentBlock = styled.div`
  padding: 1rem;
`;

const CommentLength = styled.div`
  padding: 1rem;
  text-align: right;
  border-bottom: 2px solid lightgray;
  color: gray;
`;

const CommentLi = styled.li`
  padding: 1rem;
  border-bottom: 1px solid lightgray;

  span {
    font-weight: 700;
  }
  p {
    color: gray;
  }
`;
