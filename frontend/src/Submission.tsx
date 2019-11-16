import React, { useState, useEffect } from 'react';
import { Slider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { TextArea, Form, Button, Message } from 'semantic-ui-react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { getSmiley } from './smileys/Smileys';

interface Props {
  changeScreen: () => void;
  setAnalysis: (analysis: any) => void;
}

const Submission: React.FC<Props> = ({ changeScreen, setAnalysis }) => {
  const [sliderValue, setSliderValue] = useState(50);
  const [textValue, setTextValue] = useState('');
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isMessageVisible) {
        changeScreen();
      }
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [isMessageVisible, changeScreen]);

  const handleSubmit = async () => {
    setIsMessageVisible(true);
    const result = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/moods`,
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          happiness: sliderValue,
          description: textValue
        })
      }
    );
    const json = await result.json();
    setAnalysis(json);
  };

  return isMessageVisible ? (
    <MessageContainer
      animate={{ opacity: 1, y: 0, scale: 1 }}
      initial={{ opacity: 0, y: 20, scale: 0 }}
    >
      {sliderValue < 50 ? (
        <P>Hang in there, buddy! 💪🏻</P>
      ) : (
        <P>Keep up the good vibes! 🎉</P>
      )}
    </MessageContainer>
  ) : (
    <Container
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <H1>How are you feeling?</H1>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={50}
        value={sliderValue}
        onChange={(e, val) => setSliderValue(val as number)}
      />
      {getSmiley(sliderValue)}
      <StyledForm onSubmit={() => handleSubmit()}>
        <StyledTextArea
          placeholder="Tell me more"
          onChange={(e: any, val: any) => {
            setTextValue(val.value);
          }}
        />
        <StyledButton color="green">OK 👌</StyledButton>
      </StyledForm>
    </Container>
  );
};

const H1 = styled.h1`
  text-shadow: 1px 1px 2px rgba(150, 150, 150, 1);
`;

const P = styled.p`
  font-size: 60px;
  text-align: center;
  margin: auto 0;
`;

const MessageContainer = styled(motion.div)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Container = styled(motion.div)`
  margin: 20px auto 0px;
  padding: 20px;
  max-width: 400px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const StyledTextArea = styled(TextArea)`
  width: 400px;
`;
const StyledButton = styled(Button)`
  &&& {
    margin: 10px;
  }
`;
const StyledForm = styled(Form)`
  width: 100%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit'
    }
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)'
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider);

export default Submission;
