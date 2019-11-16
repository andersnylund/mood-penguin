import React, { useState, useEffect } from 'react';
import { Slider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { TextArea, Form, Button, Message } from 'semantic-ui-react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Cry from './smileys/Cry';
import Sad from './smileys/Sad';
import Neutral from './smileys/Neutral';
import Smile from './smileys/Smile';
import Happy from './smileys/Happy';

export interface Animation {
  initial: {
    scale: number;
  };
  animate: {
    scale: number;
  };
}

const smileyAnimationProps: Animation = {
  initial: { scale: 0.95 },
  animate: { scale: 1 }
};

const getSmiley = (happiness: number) => {
  if (happiness < 20) {
    return <Cry animationProps={smileyAnimationProps} />;
  } else if (happiness < 40) {
    return <Sad animationProps={smileyAnimationProps} />;
  } else if (happiness < 60) {
    return <Neutral animationProps={smileyAnimationProps} />;
  } else if (happiness < 80) {
    return <Smile animationProps={smileyAnimationProps} />;
  } else {
    return <Happy animationProps={smileyAnimationProps} />;
  }
};

const App: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const [textValue, setTextValue] = useState('');
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMessageVisible(false);
    }, 6000);
    return () => {
      clearTimeout(timer);
    };
  }, [isMessageVisible]);

  const handleSubmit = async () => {
    setSliderValue(50);
    setIsMessageVisible(true);
    fetch('http://localhost:3001/api/moods', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        happiness: sliderValue,
        description: textValue
      })
    });
  };

  return isMessageVisible ? (
    <MessageContainer
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 3 }}
    >
      <Message
        success
        header="Thank you!"
        content="Now go and continue on your awesome day"
      />
    </MessageContainer>
  ) : (
    <FormContainer
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>How are you feeling?</h1>
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
        <StyledButton>Submit</StyledButton>
      </StyledForm>
    </FormContainer>
  );
};

const MessageContainer = styled(motion.div)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const FormContainer = styled(motion.div)`
  margin: 20px auto 0px;
  padding: 20px;
  max-width: 400px;
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

export default App;
