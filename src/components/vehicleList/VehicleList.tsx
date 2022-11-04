import React from 'react';
import VehicleItem from 'components/vehicleItem/VehicleItem';
import NonVehicle from 'components/NonVehicle';
import S from './VehicleListStyle';

const VehicleList = ({ carList, isLoading }: any) => {
  if (carList?.payload.length === 0) {
    return <NonVehicle title="차량이 없습니다." />;
  }

  if (isLoading) {
    return <NonVehicle title="불러오는 중" />;
  }
  return (
    <S.Container>
      {carList?.payload.map((car: any) => (
        <VehicleItem key={car.id} car={car} />
      ))}
    </S.Container>
  );
};

export default VehicleList;
