import React from 'react';

import Cry from './Cry';
import Sad from './Sad';
import Neutral from './Neutral';
import Smile from './Smile';
import Happy from './Happy';

export interface Animation {
  initial: {
    scale: number;
  };
  animate: {
    scale: number;
  };
}

export const smileyAnimationProps: Animation = {
  initial: { scale: 0.95 },
  animate: { scale: 1 }
};

export const getSmiley = (happiness: number) => {
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
