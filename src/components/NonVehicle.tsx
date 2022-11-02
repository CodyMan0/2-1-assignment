import React from 'react';
import styled from 'styled-components';

const NonVehicle = ({ title }: any) => {
  return (
    <Container>
      <Content>{title}</Content>
    </Container>
  );
};

export default NonVehicle;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Content = styled.div`
  width: 119px;
  height: 21px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
`;
