import React from 'react';
import styled from 'styled-components';

interface Title {
  title: string;
}

const Button = ({ title }: Title) => {
  return (
    <ButtonBox type="button" title={title}>
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonBox>
  );
};

export default Button;

const ButtonBox = styled.button<Title>`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => {
    if (props.title === '전체') {
      return '#000000';
    }
    if (props.title === '신규') {
      return '#0094FF';
    }

    return '#D9D9D9';
  }};
  width: 62px;
  height: 27px;
  align-items: flex-start;
  padding: 5px 18px;
  border-radius: 62px;
  color: white;
  border: none;
`;

const ButtonTitle = styled.p`
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0;
`;

// const ButtonBox = styled.button``;
