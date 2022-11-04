import React from 'react';
import Layout from 'components/layout/Layout';
import VehicleDetail from 'components/vehicleDetail/VehicleDetail';

const Detail = ({ carList, isLoading }: any) => {
  return (
    <Layout>
      <VehicleDetail carList={carList} isLoading={isLoading} />
    </Layout>
  );
};

export default Detail;
