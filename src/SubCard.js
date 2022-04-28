import React from 'react';

import CardContainer from './container/CardContainer';
import CategoryTitle from './components/CategoryTitle';

const SubCard = ({ dishData, title }) => {
  const mainDatas = dishData.slice(0, 9);
  const cardDataLen = dishData.length;
  const originalShowingCardNum = 4;
  const specialShowingCardNum = 3;
  const showingSlideCardNum =
    cardDataLen === specialShowingCardNum
      ? cardDataLen
      : originalShowingCardNum;

  return (
    <CardContainer
      cardInfos={mainDatas}
      hasButton={true}
      showingSlideCardNum={showingSlideCardNum}
    >
      <CategoryTitle title={title} />
    </CardContainer>
  );
};

export default SubCard;
