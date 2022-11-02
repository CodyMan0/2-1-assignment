import React from 'react';
import { useNavigate } from 'react-router';

import S from './VehicleItemStyle';

const VehicleItem = ({ car }: any) => {
  const navigate = useNavigate();
  const { attribute, amount, id } = car;
  const { brand, fuelType, imageUrl, name, segment } = attribute;

  const handleClick = () => {
    navigate(`/detail/${id}`);
  };
  return (
    <S.Container onClick={handleClick}>
      <S.LeftSide>
        <S.BrandAndName>{brand}</S.BrandAndName>
        <S.BrandAndName>{name}</S.BrandAndName>
        <S.Box>
          <S.TypeAndPrice>
            {segment}/{fuelType}
          </S.TypeAndPrice>
          <S.TypeAndPrice>{`월 ${amount} 부터`}</S.TypeAndPrice>
        </S.Box>
      </S.LeftSide>
      <S.RightSide>
        <S.Img src={imageUrl} alt="car-picture" />
      </S.RightSide>
    </S.Container>
  );
};

export default VehicleItem;
