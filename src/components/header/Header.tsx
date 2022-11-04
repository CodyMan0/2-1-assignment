import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return <Container>전체 차량</Container>;
};

export default Header;

const Container = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 17px;
  font-weight: 700;
  line-height: 21px;
  border-bottom: 1px solid black;
`;
