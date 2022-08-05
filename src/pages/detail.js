import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DetailPost from '../components/detailPost';
import DetailComment from '../components/detailComment';
import styled from 'styled-components';

function Detail() {
  const [selectedPost, setSelectedPost] = useState([]);
  const [comments, setCommnets] = useState([]);
  const { id } = useParams();

  const detailPost = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setSelectedPost(res.data))
      .catch((err) => console.log(err));
  };

  const detailComment = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((res) => setCommnets(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    detailPost();
    detailComment();
  }, []);

  return (
    <>
      <DetailSection>
        <DetailBlock>
          <DetailPost item={selectedPost} />
          <DetailComment comments={comments} />
        </DetailBlock>
      </DetailSection>
    </>
  );
}

export default Detail;

const DetailSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  line-height: 1.1;
`;

const DetailBlock = styled.div`
  width: 800px;
  padding: 3rem;
  background-color: #fff;
  border-radius: 2rem;
  box-shadow: 5px 5px 5px lightgray;
`;
