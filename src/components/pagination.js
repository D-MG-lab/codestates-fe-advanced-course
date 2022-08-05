import React from 'react';
import styled from 'styled-components';

const Pagination = ({ postsNum, total, paginate }) => {
  const pageNum = [];
  for (let i = 1; i <= Math.ceil(total / postsNum); i++) {
    pageNum.push(i);
  }
  return (
    <>
      <NumUl>
        {pageNum.map((num) => (
          <NumLi key={num}>
            <button onClick={() => paginate(num)}>{num}</button>
          </NumLi>
        ))}
      </NumUl>
    </>
  );
};

export default Pagination;

const NumUl = styled.ul`
  text-align: center;
`;

const NumLi = styled.li`
  display: inline-block;

  width: 2rem;
  height: 2rem;

  button {
    width: 2rem;
    height: 2rem;
    display: block;
    font-weight: 500;
    line-height: 2rem;

    &:hover {
      border-radius: 50%;
      cursor: pointer;
      background-color: gray;
      color: #fff;
    }
  }
`;
