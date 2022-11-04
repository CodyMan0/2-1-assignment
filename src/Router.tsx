import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Detail from 'pages/Detail';
import Home from 'pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Car } from 'carList.model';

const Router = () => {
  const [carList, setCarList] = useState<Car>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`https://preonboarding.platdev.net/api/cars`).then((res) => {
      setCarList(res.data);
      setIsLoading(false);
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home carList={carList} isLoading={isLoading} />}
        />
        <Route
          path="/detail/:id"
          element={<Detail carList={carList} isLoading={isLoading} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
