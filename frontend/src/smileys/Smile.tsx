import React, { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import { Animation } from '../App';

interface Props {
  animationProps: Animation;
}

export const Smile: FunctionComponent<Props> = ({ animationProps }) => (
  <motion.svg
    {...animationProps}
    key="smile"
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 50 50"
    x="0px"
    y="0px"
  >
    <title>Emotions_tnp</title>
    <path d="M25,1A24,24,0,1,0,49,25,24,24,0,0,0,25,1Zm0,46A22,22,0,1,1,47,25,22,22,0,0,1,25,47ZM35.77,33.32a1,1,0,0,1-.13,1.41C31.73,38,28.06,39.1,24.9,39.1a16,16,0,0,1-10.63-4.45,1,1,0,0,1,1.45-1.38c0.34,0.35,8.35,8.52,18.63-.08A1,1,0,0,1,35.77,33.32ZM15,19a3,3,0,1,1,3,3A3,3,0,0,1,15,19Zm14,0a3,3,0,1,1,3,3A3,3,0,0,1,29,19Z" />
  </motion.svg>
);

export default Smile;
