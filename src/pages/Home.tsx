import React from 'react';
import Layout from 'components/layout/Layout';
import VehicleCategory from 'components/vehicleCategory/VehicleCategory';
import VehicleList from 'components/vehicleList/VehicleList';

const Home = () => {
  return (
    <Layout>
      <VehicleCategory />
      <VehicleList />
    </Layout>
  );
};

export default Home;
