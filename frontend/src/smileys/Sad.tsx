import React, { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import { Animation } from '../App';

interface Props {
  animationProps: Animation;
}

export const Sad: FunctionComponent<Props> = ({ animationProps }) => (
  <motion.svg
    {...animationProps}
    key="sad"
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 50 50"
    x="0px"
    y="0px"
  >
    <title>Emotions_tnp</title>
    <path d="M25,1A24,24,0,1,0,49,25,24,24,0,0,0,25,1Zm0,46A22,22,0,1,1,47,25,22,22,0,0,1,25,47Zm8.43-16.16a1,1,0,0,1-.59,1.29l-15,5.62a1,1,0,0,1-.7-1.87l15-5.62A1,1,0,0,1,33.43,30.84ZM18,22a3,3,0,1,1,3-3A3,3,0,0,1,18,22Zm17-3a3,3,0,1,1-3-3A3,3,0,0,1,35,19Z" />
  </motion.svg>
);

export default Sad;
