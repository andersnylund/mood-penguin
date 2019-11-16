import React, { useState } from 'react';
import Submission from './Submission';
import Results from './Results';

export const App = () => {
  const [isShowingResults, setIsShowingResults] = useState(false);

  return isShowingResults ? (
    <Results changeScreen={() => setIsShowingResults(false)} />
  ) : (
    <Submission changeScreen={() => setIsShowingResults(true)} />
  );
};

export default App;
