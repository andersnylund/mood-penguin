import React, { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import { Animation } from '../App';

interface Props {
  animationProps: Animation;
}

export const Cry: FunctionComponent<Props> = ({ animationProps }) => (
  <motion.svg
    {...animationProps}
    key="cry"
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 50 50"
    x="0px"
    y="0px"
  >
    <title>Emotions_tnp</title>
    <path d="M25,1A24,24,0,1,0,49,25,24,24,0,0,0,25,1Zm0,46A22,22,0,1,1,47,25,22,22,0,0,1,25,47Zm10.73-9.58a1,1,0,0,1-1.45,1.38c-0.33-.35-8.35-8.52-18.63.08a1,1,0,1,1-1.28-1.53C26.11,27.52,35.63,37.32,35.73,37.42ZM15,19a3,3,0,1,1,3,3A3,3,0,0,1,15,19Zm14,0a3,3,0,1,1,3,3A3,3,0,0,1,29,19Zm4,7a1,1,0,0,1-2,0V24a1,1,0,0,1,2,0v2Zm0,3v1a1,1,0,0,1-2,0V29A1,1,0,0,1,33,29ZM18,23a1,1,0,0,1,1,1v1a1,1,0,0,1-2,0V24A1,1,0,0,1,18,23Z" />
  </motion.svg>
);

export default Cry;
