import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostUl from '../components/postUl';
import Pagination from '../components/pagination';
import styled from 'styled-components';

function Posts() {
  const [post, setPost] = useState([]);
  const [current, setCurrent] = useState(1);
  const [postsNum, setPostsPerPage] = useState(10);
  // const [selected, setSelected] = useState('');

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }, []);

  const lastIndex = current * postsNum;
  const firstIndex = lastIndex - postsNum;
  const curPosts = (posts) => {
    let curPosts = 0;
    curPosts = posts.slice(firstIndex, lastIndex);
    return curPosts;
  };

  return (
    <>
      <PostSection>
        <PostUl post={curPosts(post)} />
        <PaginationBlock>
          <Pagination
            postsNum={postsNum}
            total={post.length}
            paginate={setCurrent}
          />
        </PaginationBlock>
      </PostSection>
    </>
  );
}

export default Posts;

const PostSection = styled.section`
  margin-top: 140px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PaginationBlock = styled.div`
  margin-top: 40px;
`;
