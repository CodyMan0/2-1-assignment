import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  align-items: center;
  background-color: #0094ff;
  width: inherit;
  height: 48.01px;
  border-radius: 3px;
`;

const Title = styled.div`
  text-align: left;
  color: white;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
  padding: 13px;
`;

const S = {
  Container,
  Title,
};

export default S;
