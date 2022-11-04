import React from 'react';
import S from './ContentTitleStyle';

const ContentTitle = ({ title }: any) => {
  console.log(title);
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default ContentTitle;
