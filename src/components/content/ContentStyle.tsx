import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48.01px;
`;

const Vehicle = styled.div`
  display: flex;
  align-items: center;
  width: inherit;
  color: black;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
  padding: 13px;
`;

const Title = styled.div`
  flex: 1;
  text-align: left;
  color: black;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
  padding: 13px;
`;

const Segment = styled.div`
  flex: 1;
  text-align: right;
  margin-right: 40px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
`;

const S = {
  Container,
  Title,
  Vehicle,
  Segment,
};

export default S;
