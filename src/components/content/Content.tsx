import React from 'react';
import S from './ContentStyle';

const Content = ({ segment, fuelType, startDate, insurance }: any) => {
  console.log(segment);
  console.log(fuelType);
  console.log(startDate);
  console.log(insurance);
  return (
    <S.Container>
      <S.Vehicle>
        <S.Title>dfdf</S.Title>
        <S.Segment>dsf</S.Segment>
      </S.Vehicle>
    </S.Container>
  );
};

export default Content;
