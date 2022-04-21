import React from 'react';
import styled from 'styled-components';

const Tab = ({ onClick }) => {
  const tabs = [
    { id: 0, title: '풍성한 고기 반찬' },
    { id: 1, title: '편리한 반찬 세트' },
    { id: 2, title: '맛있는 제철 요리' },
    { id: 3, title: '우리 아이 영양 반찬' },
  ];

  return (
    <StyledTab onClick={onClick}>
      {tabs.map(({ id, title }) => (
        <li data-id={id}>{title}</li>
      ))}
    </StyledTab>
  );
};

const StyledTab = styled.ul`
  display: flex;
  padding: 20px;
  li {
    margin-left: 10px;
  }
`;

export default Tab;
