import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: row;
  height: 110px;
  padding: 20px;
  border-top: 1px black solid;
`;

const LeftSide = styled.div`
  flex: 1;
  margin: 10px 0px 0px 10px;
`;
const RightSide = styled.div`
  flex: 1;
  align-self: center;
`;
const Img = styled.img`
  width: 152px;
  height: 80px;
`;
const BrandAndName = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`;
const TypeAndPrice = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
`;

const Box = styled.div`
  margin-top: 8px;
`;

const S = {
  Container,
  LeftSide,
  RightSide,
  Img,
  BrandAndName,
  TypeAndPrice,
  Box,
};

export default S;
