import Button from 'components/button/Button';
import React from 'react';
import styled from 'styled-components';

const VehicleCategory = () => {
  type Categories = {
    id: number;
    title: string;
  };
  const BUTTON_CATEGORIES = [
    { id: 1, title: '전체' },
    { id: 2, title: '대형' },
    { id: 3, title: '중형' },
    { id: 4, title: '소형' },
  ];

  return (
    <Container>
      {BUTTON_CATEGORIES.map((cate: Categories) => (
        <Button key={cate.id} title={cate.title} />
      ))}
    </Container>
  );
};

export default VehicleCategory;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px 0 10px 10px;
  border-bottom: 1px solid black;
`;
