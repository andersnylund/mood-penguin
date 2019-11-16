import React, { useState } from 'react';
import Submission from './Submission';
import Results from './Results';

export interface Analysis {
  latestHappinessAverage: number;
  latestSentimentAverage: number;
  keyWords: string[];
}

export const App = () => {
  const [isShowingResults, setIsShowingResults] = useState(false);
  const [analysis, setAnalysis] = useState({} as Analysis);

  return isShowingResults ? (
    <Results
      changeScreen={() => setIsShowingResults(false)}
      analysis={analysis}
    />
  ) : (
    <Submission
      changeScreen={() => setIsShowingResults(true)}
      setAnalysis={setAnalysis}
    />
  );
};

export default App;
