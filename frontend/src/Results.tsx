import React, { FunctionComponent } from 'react';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

import { getSmiley } from './smileys/Smileys';
import { Container } from './Submission';
import { Analysis } from './App';

interface Props {
  changeScreen: () => void;
  analysis: Analysis;
}

export const Results: FunctionComponent<Props> = ({
  changeScreen,
  analysis
}) => {
  const moodMetric =
    ((analysis.latestHappinessAverage + analysis.latestSentimentAverage) /
      200) *
    100;

  return (
    <Container>
      <h1>Lately, your mood has been like</h1>
      {getSmiley(moodMetric)}
      <h1>And your main talking points have been</h1>
      {analysis.keyWords.map(keyword => (
        <P key={keyword}> {keyword}</P>
      ))}
      <ButtonContainer>
        <Button color="green" onClick={() => changeScreen()}>
          OK 👌
        </Button>
      </ButtonContainer>
    </Container>
  );
};

const ButtonContainer = styled.div`
  margin: 40px;
`;

const P = styled.p`
  font-size: 32px;
  font-weight: bold;
  color: darkblue;
  margin: 0;
`;

export default Results;
