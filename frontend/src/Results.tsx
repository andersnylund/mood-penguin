import React, { FunctionComponent, useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

import { Mood } from '../../shared/types';
import { getSmiley } from './smileys/Smileys';
import { Container } from './Submission';

interface Props {
  changeScreen: () => void;
}

export const Results: FunctionComponent<Props> = ({ changeScreen }) => {
  const [moods, setMoods] = useState([] as Mood[]);

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/moods`
    );
    const data: Mood[] = await response.json();
    setMoods(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const averageMood = Math.floor(
    moods.reduce(
      (prevValue, currValue) =>
        prevValue + (currValue.happiness ? currValue.happiness : 0),
      0
    ) / moods.length
  );

  return (
    <Container>
      <h1>Lately, your average mood has been like</h1>
      {getSmiley(averageMood)}
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

export default Results;
