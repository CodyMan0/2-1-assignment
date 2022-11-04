import React from 'react';
import Layout from 'components/layout/Layout';
import VehicleCategory from 'components/vehicleCategory/VehicleCategory';
import VehicleList from 'components/vehicleList/VehicleList';

const Home = ({ carList, isLoading }: any) => {
  return (
    <Layout>
      <VehicleCategory />
      <VehicleList carList={carList} isLoading={isLoading} />
    </Layout>
  );
};

export default Home;
