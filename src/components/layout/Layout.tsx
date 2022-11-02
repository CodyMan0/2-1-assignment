import Header from 'components/header/Header';
import React from 'react';
import S from './LayoutStyle';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <S.Layout>
      <Header />
      {children}
    </S.Layout>
  );
};

export default Layout;
