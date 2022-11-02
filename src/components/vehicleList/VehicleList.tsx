import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Car } from 'carList.model';
import VehicleItem from 'components/vehicleItem/VehicleItem';
import NonVehicle from 'components/NonVehicle';
import S from './VehicleListStyle';

const VehicleList = () => {
  const [carList, setCarList] = useState<Car>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  console.log('LIst', carList?.payload);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://preonboarding.platdev.net/api/cars?fuelType=ev`)
      .then((res) => {
        setCarList(res.data);
        setIsLoading(false);
      });
  }, []);

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
