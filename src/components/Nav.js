import React from 'react';
import styled from 'styled-components';

function Nav() {
  return (
    <>
      <Header>
        <NavBlock>
          <Logo>게시판</Logo>
        </NavBlock>
      </Header>
    </>
  );
}

export default Nav;

const Header = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  z-index: 99;
  background: black;
`;

const NavBlock = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Logo = styled.div`
  width: 100px;
  height: 80px;
  font-size: 2rem;
  font-weight: 700;
  line-height: 80px;
  color: #fff;
`;
